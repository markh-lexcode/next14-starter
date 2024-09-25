
import Image from 'next/image'
import styles from './singlePost.module.css'
import PostUser from '@/components/postUser/PostUser'
import { Suspense } from 'react'
import { getPost } from '@/lib/data'

// FETCH DATA WITH AN API
// const getData = async (slug) => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`, {cache: 'no-store'})

//   if (!res.ok) {
//     throw new Error('Something went wrong')
//   }

//   return res.json()
// } 

const SingplePostPage = async ({params}) => {

  const {slug} = params;

  // FETCH DATA WITH AN API
  // const post = await getData(slug);

  // FETCH DATA WITHOUT AN API
  // console.log(post)

  console.log(slug)

  const post = await getPost(slug)

  // console.log(post)s

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        {post.img && <Image src={post.img} alt="" fill className={styles.img}  />}
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.detail}>
          
          {post && (<Suspense fallback={<div>Loading...</div>} >
            <PostUser userId={post.userId} />
          </Suspense>)}
          <div className={styles.detailText}>
            <span className={styles.detailAuthor}>Published</span>
            <span className={styles.detailValue}>{post.createdAt.toString().slice(4,16)}</span>
          </div>
        </div>
        <div className={styles.content}>
          {post.title}
         {post.desc}
        </div>
      </div>
    </div>
  )
}

export default SingplePostPage