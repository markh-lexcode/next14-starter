"use client"
import Link from 'next/link'
import styles from './postCard.module.css'
import Image from 'next/image'

const PostCard = ({post}) => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image src="https://images.pexels.com/photos/28110792/pexels-photo-28110792/free-photo-of-a-black-and-white-photo-of-a-glass-of-water.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" fill className={styles.img}  />
        </div>
        <span className={styles.date}>01.01.2024</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>{post.title}</h1>
        <p className={styles.desc}>{post.body}fsdfsd</p>
        <Link className={styles.link} href={`/blog/${post.id}`}>READ MORE</Link>
      </div>
    </div>
  )
}

export default PostCard