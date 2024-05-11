"use client"
import { handleLogin } from 'app/actions'
import styles from './LoginForm.module.sass'
import { useState } from 'react'

export const LoginForm = () => {
  const [ loading, setLoading ] = useState<boolean>(false)

  const handleSubmit = async (event: any) => {
    event.preventDefault()
    setLoading(true)
    const formData = new FormData(event.target)
    await handleLogin(formData)
    setLoading(false)
  }

  return (
    <div className={styles.NewAccountForm}>
      <h1 className={styles.NewAccountForm__title}>Login</h1>
      <form
        className={styles.NewAccountForm__form}
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          name="email"
          placeholder="email"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
          disabled={loading}
        />
        <input
          type="password"
          name="password"
          placeholder='password'
          disabled={loading}
        />
        <input
          type="submit"
          name="submit"
          value="Login"
          disabled={loading}
        />
      </form>
    </div>
  )
}