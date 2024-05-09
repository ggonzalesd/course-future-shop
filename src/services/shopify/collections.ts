import { env } from "app/config/env";
import { shopifyUrls } from "./urls";

export const getCollections = async () => {
  const response = await fetch(shopifyUrls.collections.all, {
    headers: {
      'X-Shopify-Access-Token': env.SHOPIFY_TOKEN || '',
    },
  })
  const collections = await response.json()
  return collections.smart_collections.map((collection:any) => ({
    id: collection.id,
    title: collection.title,
    handle: collection.handle,
  }));
}

export const getCollectionProducts = async (id: string) => {
  const response = await fetch(shopifyUrls.collections.products(id), {
    headers: {
      'X-Shopify-Access-Token': env.SHOPIFY_TOKEN || '',
    },
  })
  const data = await response.json()
  return data.products
}