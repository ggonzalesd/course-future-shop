import { env } from "app/config/env";
import { shopifyUrls } from "./urls";

export const getProducts = async (id?:string): Promise<ProductType[]> => {
  const apiUrl = id?`${shopifyUrls.products.all}?ids=${id}`:shopifyUrls.products.all
  const response = await fetch(apiUrl, {
    headers: {
      'X-Shopify-Access-Token': env.SHOPIFY_TOKEN || '',
    },
  })
  const data = await response.json()
  const transformed = data.products.map((product: any) => ({
    id: product.id,
    gql_id: product.variants[0].admin_graphql_api_id,
    title: product.title,
    description: product.body_html,
    price: product.variants[0].price,
    image: product.images[0].src,
    quantity: product.variants[0].inventory_quantity,
    handle: product.handle,
    tags: product.tags,
  }))
  return transformed;
}

export const getMainProducts = async () => {
  const response = await fetch(shopifyUrls.products.mainProducts, {
    headers: {
      'X-Shopify-Access-Token': env.SHOPIFY_TOKEN || '',
    },
    cache: 'force-cache',
    next: {
      // revalidate: 10,
      tags: ['main-products'],
    }
  })
  const { products } = await response.json()

  return products
}
