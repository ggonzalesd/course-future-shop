import { env } from 'app/config/env'

export const shopifyUrls = {
  products: { // 312051564711
    all: `${env.SHOPIFY_HOSTNAME}/admin/api/2024-04/products.json`,
    mainProducts: `${env.SHOPIFY_HOSTNAME}/admin/api/2024-04/collections/312051564711/products.json`,
  },
  collections: {
    all: `${env.SHOPIFY_HOSTNAME}/admin/api/2024-04/smart_collections.json`,
    products: (id:string) => `${env.SHOPIFY_HOSTNAME}/admin/api/2024-04/collections/${id}/products.json`,
  }
}