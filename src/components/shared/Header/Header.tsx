import { validateAccessToken } from "app/utils/auth/validateAccessToken";
import { cookies } from "next/headers";
import Link from "next/link";
import styles from './Header.module.sass'
import dynamic from 'next/dynamic'

const NoSSRShoppingCart = dynamic(() => import('./../ShoppingCart'), {ssr: false})

export const Header = async () => {
  const { customer }:any = await validateAccessToken()

  const cookiesStore = cookies()
  const token = cookiesStore.get('accessToken')?.value

  console.log(customer)

  console.log('Hello Header')
  return (
    <header className={styles.Header}>
      <nav>
        <ul className={styles.Header__list}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/store">Store</Link>
          </li>
          <li>
            <Link href="/test">Test</Link>
          </li>
        </ul>
        <div className={styles.Header__user}>
          {
            token ?
            <p>Hola! {customer.firstName}</p> :
            <Link href='/login'>Login</Link>
          }
          <NoSSRShoppingCart />
        </div>
      </nav>
    </header>
  );
}