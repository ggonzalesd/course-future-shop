import Link from "next/link"
import style from './storeLayout.module.sass'
import { getCollections } from "app/services/shopify/collections"

export default async function Layout({ children }: { children: React.ReactNode }) {
  const collections = await getCollections()
  console.log(collections)

  return (
    <main className={style.StoreLayout}>
      <nav>
        <ul className={style.StoreLayout__list}>
          {
            collections.map((collection:any) => (
              <Link
                key={collection.id}
                href={'/store/' + collection.handle}
                className={style.StoreLayout__chip}
              >
                {collection.title}
              </Link>
            ))
          }
        </ul>
      </nav>
      {children}
    </main>
  )
}