"use client"
import Image from "next/image"
import { useState } from "react"
import classNames from "classnames/bind"
import styles from './Description.module.sass'

const PLACEHOLDER_IMAGE = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDACgcHiMeGSgjISMtKygwPGRBPDc3PHtYXUlkkYCZlo+AjIqgtObDoKrarYqMyP/L2u71////m8H////6/+b9//j/2wBDASstLTw1PHZBQXb4pYyl+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj4+Pj/wAARCACOAI4DASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAQACBP/EABYQAQEBAAAAAAAAAAAAAAAAAAABEf/EABYBAQEBAAAAAAAAAAAAAAAAAAABAv/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AOdJKBFKgKQFIgiCipFIAFAAQoEkqJFIoSQJIqiKIIooBFIoDQBkNCqMohUKKZaCSVEklCYoYISI0gCigyGhRWazWqKoyCFGkQyqBCiIKoYYI1AMIjSIkUAFIqDNZrVZqqzQaAbCSKgkoiCBjUZjUVGoYzGkQpIAKRUGazWqzVGaDQK0gkEglUoEGoYzGoI1CzGgKBREKhQFZprNUFCqFSCAhICghWo1GI1AajTEIjRZSBFQEFFVFUFBABBCFBCkhDTRjJBoslBrVoQhAQKs0hUCQUCCGSgRpEJFJBRSQQKCAhIQAhUCSUf/2Q=='

export const Description = () => {
  const [hasBorder, setBorder] = useState(false)

  const handleClick = () => setBorder(!hasBorder)

  const cx = classNames.bind(styles)
  
  const buttonStyles = cx('Description__button', {
    'Description__button--border': hasBorder,
  })
  
  return (
    <section className={styles.Description}>
      <button onClick={handleClick} className={buttonStyles}>
        <div className={styles.Description__imageContainer}>
          <Image
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            src="/images/description.jpeg"
            alt="products marketplace"
            placeholder="blur"
            blurDataURL={PLACEHOLDER_IMAGE}
            //priority={false}
            //quality={1}
          />
        </div>
      </button>
      <div className={styles.Description__text}>
        <h2>Description</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum officia voluptates omnis quisquam nostrum nisi praesentium atque eligendi, earum, tempora eum. Enim id soluta facere modi. Deleniti corrupti neque rerum.</p>
      </div>
    </section>
  )
}