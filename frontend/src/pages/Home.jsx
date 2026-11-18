import {useEffect,useState} from 'react'
import Header from '../components/Header'
import CategoryFilter from '../components/CategoryFilter'
import ProductList from '../components/ProductList'
import {getCategorias,getProductos} from '../services/api'

export default function Home(){
  // El estado controla categorías, productos, filtro y mensajes de la interfaz.
  const [categories,setCategories]=useState([])
  const [products,setProducts]=useState([])
  const [active,setActive]=useState('')
  const [loading,setLoading]=useState(true)
  const [error,setError]=useState('')
  // Carga categorías al inicio y actualiza el catálogo cuando cambia el filtro.
  useEffect(()=>{getCategorias().then(setCategories).catch(e=>setError(e.message))},[])
  useEffect(()=>{setLoading(true);getProductos(active).then(setProducts).catch(e=>setError(e.message)).finally(()=>setLoading(false))},[active])
  return <><Header/><main><section className="hero min-h-[470px] md:min-h-[560px] flex items-center text-white"><div className="container"><p className="uppercase tracking-[.22em] text-sm text-[#e0ddbf]">Flores de temporada · Lima</p><h1 className="serif text-5xl md:text-7xl leading-[1.08] max-w-[650px] mt-5 mb-6">Un pequeño jardín para regalar</h1><p className="max-w-[490px] text-white/85 leading-7">Ramos hechos a mano, plantas que acompañan y detalles florales para celebrar lo cotidiano.</p><a href="#catalogo" className="inline-block mt-8 bg-[#f5edda] text-[#314838] rounded-full px-7 py-3 font-semibold">Explorar catálogo</a></div></section>
  <section id="catalogo" className="container py-16 md:py-20"><div className="mb-9"><p className="uppercase tracking-[.18em] text-xs text-[#718675]">Elegidos con cuidado</p><h2 className="serif text-4xl mt-2">Flores que dicen mucho</h2><p className="text-[#748078] mt-3">Cada arreglo se prepara a mano con flores frescas de estación.</p></div><CategoryFilter categories={categories} active={active} onChange={setActive}/>{error&&<p className="mt-6 text-red-700">No pudimos cargar el catálogo: {error}</p>}{loading?<p className="py-16 text-center text-[#748078]">Cargando flores frescas…</p>:<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8"><ProductList products={products}/></div>}</section>
  <section id="historia" className="bg-[#edf1e9] py-14"><div className="container text-center"><p className="serif text-2xl">Flor de Bruma</p><p className="text-[#66756a] mt-3">Flores frescas, gestos simples y belleza para todos los días.</p></div></section></main></>
}
