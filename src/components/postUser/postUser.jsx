import { getUser } from '@/lib/data'
import styles from './postUser.module.css'
import Image from 'next/image'

// FETCH DATA WITH AN API
// const getUser = async (userId) => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {cache: 'no-store'})

//   if (!res.ok) {
//     throw new Error('Something went wrong')
//   }

//   return res.json()
// } 

const PostUser = async ({userId}) => {
  // FETCH DATA WITH AN API
  // const user = await getUser(userId);

  // FETCH DATA WITHOUT AN API
  const user = await getUser(userId)

  return (
    <div className={styles.container}>
      <Image 
        className={styles.avatar}
        src={user.img ? user.img : '/noavatar.png'} 
        width={50} 
        height={50} 
        alt="" 
      />
      <div className={styles.texts}>
        <span className={styles.title}>Author</span>
        <span className={styles.username}>{user.username}</span>
      </div>
    
  </div>
  )
}

export default PostUser