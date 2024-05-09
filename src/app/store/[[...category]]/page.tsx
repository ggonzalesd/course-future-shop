import { ProductsWrapper } from "app/components/store/ProductsWrapper"
import { getCollectionProducts, getCollections } from "app/services/shopify/collections"
import { getProducts } from "app/services/shopify/products"

interface CategoryProps {
  params: {
    category: string[]
  },
  searchParams: {
    name?: string,
  },
};

export default async function Category(props: CategoryProps) {
  const { category } = props.params
  const collections = await getCollections()
  const selectedCollectionsId = category ? collections.find(
    (collection:any) => collection.handle === category[0]
  )?.id : null

  if(selectedCollectionsId) {
    const products = await getCollectionProducts(selectedCollectionsId)
    return (
      <ProductsWrapper products={products} />
    )
  } else {
    const products = await getProducts()
    return (
      <ProductsWrapper products={products} />
    )
  }

  //hrow new Error('Error BOOM!')

}