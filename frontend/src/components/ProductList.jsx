import ProductCard from './ProductCard'
export default function ProductList({products}){if(!products.length)return <p className="col-span-full py-16 text-center text-[#748078]">Pronto tendremos nuevas flores para esta categoría.</p>;return products.map(product=><ProductCard key={product.id} product={product}/>)}
