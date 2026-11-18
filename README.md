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
python manage.py runserver
```

## Iniciar el frontend (otra terminal)
```bash
cd frontend
npm install
npm run dev
```

Admin: http://127.0.0.1:8000/admin/ · API: http://127.0.0.1:8000/api/ · App: http://localhost:5173
El entorno local del laboratorio crea el usuario `admin` con contraseña `admin12345`.
