const KIWI_API_URL = "https://api.tequila.kiwi.com/v2/search";

function corsHeaders() {
  return {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };
}

function jsonResponse(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      ...corsHeaders(),
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "no-store",
    },
  });
}

function kiwiDate(value) {
  const match = String(value || "").match(/^(\d{4})-(\d{2})-(\d{2})/);
  if (!match) {
    return "";
  }

  return `${match[3]}/${match[2]}/${match[1]}`;
}

function boundedNumber(value, fallback, min, max) {
  const number = Number(value);
  if (!Number.isFinite(number)) {
    return fallback;
  }

  return Math.min(max, Math.max(min, number));
}

export default {
  async fetch(request, env) {
    if (request.method === "OPTIONS") {
      return new Response(null, { headers: corsHeaders() });
    }

    if (!env.KIWI_TEQUILA_API_KEY) {
      return jsonResponse({ error: "Missing KIWI_TEQUILA_API_KEY" }, 500);
    }

    const url = new URL(request.url);
    const origin = url.searchParams.get("origin");
    const destination = url.searchParams.get("destination");

    if (!origin || !destination) {
      return jsonResponse({ error: "Missing origin or destination" }, 400);
    }

    const params = new URLSearchParams({
      fly_from: origin,
      fly_to: destination,
      date_from: kiwiDate(url.searchParams.get("departure_from")),
      date_to: kiwiDate(url.searchParams.get("departure_to")),
      return_from: kiwiDate(url.searchParams.get("return_from")),
      return_to: kiwiDate(url.searchParams.get("return_by")),
      nights_in_dst_from: String(boundedNumber(url.searchParams.get("stay_min"), 8, 1, 30)),
      nights_in_dst_to: String(boundedNumber(url.searchParams.get("stay_max"), 10, 1, 30)),
      curr: url.searchParams.get("currency") || "EUR",
      limit: String(boundedNumber(url.searchParams.get("limit"), 80, 1, 200)),
      sort: "price",
      asc: "1",
      selected_cabins: "M",
      adult_hold_bag: "0",
      adult_hand_bag: "1",
      one_for_city: "0",
    });

    const kiwiResponse = await fetch(`${KIWI_API_URL}?${params.toString()}`, {
      headers: {
        apikey: env.KIWI_TEQUILA_API_KEY,
        Accept: "application/json",
      },
    });

    const payload = await kiwiResponse.json();

    if (!kiwiResponse.ok) {
      return jsonResponse(
        {
          error: payload.message || "Kiwi request failed",
          status: kiwiResponse.status,
        },
        kiwiResponse.status,
      );
    }

    return jsonResponse(payload);
  },
};
