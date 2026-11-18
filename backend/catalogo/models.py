from django.db import models

class Categoria(models.Model):
    # Una categoría puede agrupar muchos productos.
    nombre = models.CharField(max_length=80, unique=True)
    descripcion = models.TextField(blank=True)
    def __str__(self): return self.nombre

class Producto(models.Model):
    # Datos que el catálogo usa para mostrar y filtrar cada pieza floral.
    categoria = models.ForeignKey(Categoria, related_name='productos', on_delete=models.CASCADE)
    nombre = models.CharField(max_length=120)
    descripcion = models.TextField()
    precio = models.DecimalField(max_digits=8, decimal_places=2)
    imagen = models.URLField()
    cantidad_disponible = models.PositiveIntegerField(default=10)
    disponible = models.BooleanField(default=True)
    creado = models.DateTimeField(auto_now_add=True)
    def __str__(self): return self.nombre
