# Flor de Bruma

Tienda floral de arreglos hechos a mano, ramos de temporada, plantas de interior y detalles para regalar. Catálogo React + Vite + Tailwind y API Django REST Framework con SQLite.

## Requisitos
Node.js y Python 3.

## Iniciar el backend
```bash
cd backend
source venv/bin/activate
python manage.py migrate
python manage.py seed_catalogo
python manage.py createsuperuser
python manage.py runserver 127.0.0.1:8001
```

## Iniciar el frontend (otra terminal)
```bash
cd frontend
npm install
npm run dev -- --port 5175
```

Admin: http://127.0.0.1:8001/admin/ · API: http://127.0.0.1:8001/api/ · App: http://localhost:5175
El entorno local del laboratorio crea el usuario `admin` con contraseña `admin12345`.
