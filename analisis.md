# Análisis del e-commerce de florería

## Ejercicio 01

**Rubro:** florería y regalos botánicos.

**Nombre comercial:** Flor de Bruma.

**Descripción:** tienda de ramos de temporada preparados a mano, arreglos para ocasiones especiales, plantas de interior y accesorios botánicos. La propuesta combina una estética natural con una navegación sencilla para descubrir flores y detalles.

**Funcionalidades:** listar productos disponibles, consultar categorías, filtrar el catálogo por categoría, mostrar estados de carga y error, y mantener el catálogo sincronizado con el panel administrativo de Django.

**Campos del producto:** categoría, nombre, descripción, precio en soles, URL de imagen, cantidad disponible, estado de disponibilidad y fecha de creación.

**Elementos de interfaz:** encabezado con marca y navegación; portada con llamado a explorar; filtros de categoría; tarjetas de producto con imagen, nombre, descripción y precio; estados vacíos, carga y error; pie de página informativo.

**Arquitectura:** React solicita los recursos al API de Django REST Framework mediante fetch. DRF serializa los modelos Categoria y Producto y consulta SQLite. El panel administrativo escribe cambios en la misma base de datos, por lo que las siguientes consultas de React los reflejan.

![Flujo React a DRF y SQLite](../capturas/ej01_01_diagrama.png)
