# Viaje de amigos

Web estática para comparar Túnez, Rumanía y Georgia y tomar notas compartidas
durante la llamada.

## Ver en local

```bash
python3 -m http.server 8080
```

Abre `http://localhost:8080`.

## Publicar en GitHub Pages

1. Crea un repositorio en GitHub.
2. Sube estos archivos a la rama principal.
3. En GitHub, entra en `Settings` -> `Pages`.
4. En `Build and deployment`, elige `Deploy from a branch`.
5. Selecciona la rama principal y la carpeta raíz.

## Notas en tiempo real

GitHub Pages no tiene backend. Para que las notas se vean en tiempo real entre
personas distintas, la página usa Firebase/Firestore cuando encuentra una
configuración en `firebase-config.js`.

Pasos rápidos:

1. Crea un proyecto en Firebase.
2. Crea una aplicación web y copia su configuración pública.
3. Pega esos valores en `firebase-config.js`.
4. Activa Firestore.
5. Usa reglas temporales para el viaje y cámbialas en Firebase cuando ya no
   necesitéis editar notas.

La configuración de Firebase de una app web no es un secreto, pero las reglas
sí importan. Lo más prudente es crear un proyecto Firebase exclusivo para esta
web y cerrar escrituras después del viaje.

## Salas

La sala se controla con el parámetro `room`.

Ejemplo:

```txt
https://usuario.github.io/repositorio/?room=viaje-amigos
```

Todos los que abran el mismo enlace verán las mismas notas si Firebase está
configurado.
