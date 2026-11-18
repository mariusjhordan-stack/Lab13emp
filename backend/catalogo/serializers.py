from rest_framework import serializers
from .models import Categoria, Producto

class CategoriaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Categoria
        fields = ['id', 'nombre', 'descripcion']

class ProductoSerializer(serializers.ModelSerializer):
    # Incluyo el nombre para que React no dependa de otra consulta.
    categoria_nombre = serializers.CharField(source='categoria.nombre', read_only=True)
    class Meta:
        model = Producto
        fields = ['id', 'categoria', 'categoria_nombre', 'nombre', 'descripcion', 'precio', 'imagen', 'cantidad_disponible', 'disponible']
