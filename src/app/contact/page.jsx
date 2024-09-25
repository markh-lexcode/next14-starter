
"use client"
// import { useEffect, useState } from 'react';
import styles from './contact.module.css'
import Image from 'next/image'
import dynamic from 'next/dynamic';
// import HyrationTest from '@/components/hydrationTest';

// const HydrationTestNoSSR = dynamic(() => import("@/components/hydrationTest"), {ssr: false})

const ContactPage = () => {
  // const [isClient, setIsClient] = useState(false)

  // useEffect(() => {
  //   setIsClient(true)
  // }, [])
  
  // const a = Math.random();

  // console.log(a);

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/contact.png" alt="" fill className={styles.img} />
      </div>
      {/* {isClient && a} */}
      <div className={styles.formContainer}>
        {/* <HyrationTest /> */}
        {/* <HydrationTestNoSSR/> */}
        {/* <div suppressHydrationWarning>{a}</div> */}
        <form action="" className={styles.form}>
          <input type="text" placeholder="Name and Surname" />
          <input type="text" placeholder="Email Address" />
          <input type="text" placeholder="Phone Number (Optional)" />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Message"
          ></textarea>
          <button>Send</button>
        </form>
      </div>
    </div>
  )
}

export default ContactPage