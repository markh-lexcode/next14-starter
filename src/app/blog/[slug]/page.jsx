
import Image from 'next/image'
import styles from './singlePost.module.css'
import PostUser from '@/components/postUser/PostUser'
import { Suspense } from 'react'


const getData = async (slug) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`, {cache: 'no-store'})

  if (!res.ok) {
    throw new Error('Something went wrong')
  }

  return res.json()
} 


const SingplePostPage = async ({params}) => {

  const {slug} = params;

  const post = await getData(slug);

  // console.log(post)

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="https://images.pexels.com/photos/28110792/pexels-photo-28110792/free-photo-of-a-black-and-white-photo-of-a-glass-of-water.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" fill className={styles.img}  />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.detail}>
          <Image src="https://images.pexels.com/photos/28110792/pexels-photo-28110792/free-photo-of-a-black-and-white-photo-of-a-glass-of-water.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" width={50} height={50} alt="" className={styles.avatar}  />
          <Suspense fallback={<div>Loading...</div>} >
            <PostUser userId={post.userId} />
          </Suspense>
          <div className={styles.detailText}>
            <span className={styles.detailAuthor}>Published</span>
            <span className={styles.detailValue}>01.01.2024</span>
          </div>
        </div>
        <div className={styles.content}>
         {post.body}
        </div>
      </div>
    </div>
  )
}

export default SingplePostPage