from rest_framework import viewsets
from .models import Categoria, Producto
from .serializers import CategoriaSerializer, ProductoSerializer

class CategoriaViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Categoria.objects.all().order_by('id')
    serializer_class = CategoriaSerializer

class ProductoViewSet(viewsets.ReadOnlyModelViewSet):
    # El parámetro ?categoria= filtra en el servidor.
    serializer_class = ProductoSerializer
    def get_queryset(self):
        qs = Producto.objects.filter(disponible=True).select_related('categoria').order_by('id')
        categoria = self.request.query_params.get('categoria')
        return qs.filter(categoria_id=categoria) if categoria else qs
