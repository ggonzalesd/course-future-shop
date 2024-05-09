import { ProductView } from "app/components/product/ProductView"
import { getProducts } from "app/services/shopify/products"
import { redirect } from "next/navigation"

interface ProductPageProps {
  searchParams: {
    id: string
  }
}

export async function generateMetadata({ searchParams }: ProductPageProps) {
  const { id } = searchParams
  const products = await getProducts(id)
  const product = products[0]

  return {
    title: product.title,
    description: product.description,
    keywords: product.tags,
    openGraph: {
      images: [product.image]
    }
  }
}

export default async function ProductPage(props: ProductPageProps) {
  const { id } = props.searchParams
  // useParams / useSearchParams

  const product = await getProducts(id)

  console.log(product)

  if(!id) {
    redirect('/store')
  }

  return (
    <ProductView product={product[0]} />
  )
}