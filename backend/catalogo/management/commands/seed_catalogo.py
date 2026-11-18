from django.core.management.base import BaseCommand
from catalogo.models import Categoria, Producto

class Command(BaseCommand):
    help = 'Carga catálogo de ejemplo para la florería.'
    def handle(self, *args, **options):
        data = {
          'Ramos': ['Aurora de peonías','Ramo Sol de mayo','Rosas del jardín'],
          'Arreglos': ['Centro Brisa','Jardín de cristal','Luz de domingo'],
          'Plantas': ['Monstera Serena','Orquídea Nube','Helecho Bosque'],
          'Ocasiones especiales': ['Abrazo de cumpleaños','Día inolvidable','Gracias, mamá'],
          'Accesorios': ['Jarrón Alba','Tarjeta botánica','Tijera de poda'],
        }
        photos = ['1490750967868-88aa4486c946','1520763185298-1b434c919102','1494972308805-463bc619d34e']
        for ci, (nombre, productos) in enumerate(data.items(), 1):
            cat, _ = Categoria.objects.get_or_create(nombre=nombre, defaults={'descripcion': f'Piezas seleccionadas de {nombre.lower()}.'})
            for i, titulo in enumerate(productos):
                Producto.objects.get_or_create(nombre=titulo, defaults={
                    'categoria': cat, 'descripcion': f'{titulo}, preparado a mano con flores y follaje de temporada.',
                    'precio': 35 + ci * 8 + i * 5,
                    'imagen': f'https://images.unsplash.com/photo-{photos[i%3]}?auto=format&fit=crop&w=900&q=85',
                })
        self.stdout.write(self.style.SUCCESS('Catálogo de ejemplo cargado.'))
