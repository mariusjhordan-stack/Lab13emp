import { Button } from '@/components/ui/button'

// La selección se controla en Home; este componente comunica el filtro elegido.
export default function CategoryFilter({ categories, active, onChange }) {
  const opciones = [{ id: '', nombre: 'Todo el jardín' }, ...categories]

  return (
    <div className="flex gap-2 overflow-x-auto pb-2">
      {opciones.map((categoria) => {
        const seleccionada = String(active) === String(categoria.id)
        return (
          <Button
            key={categoria.id || 'all'}
            type="button"
            variant={seleccionada ? 'default' : 'outline'}
            onClick={() => onChange(String(categoria.id))}
            className={`h-auto rounded-full px-5 py-2.5 ${seleccionada ? 'bg-[#415d4a] text-white hover:bg-[#344c3b]' : 'border-[#e7e9e3] bg-white text-[#647269]'}`}
          >
            {categoria.nombre}
          </Button>
        )
      })}
    </div>
  )
}
