"use client"

interface ErrorProps {
  error: Error
  reset: () => void
}

export default function Error(props: ErrorProps) {
  return (
    <div>
      <h1>:</h1>
      <p>Ha ocurrido un error</p>
      <button onClick={props.reset}>Try Again</button>
    </div>
  )
}