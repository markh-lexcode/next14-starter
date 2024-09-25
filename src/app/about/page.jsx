import Image from "next/image"
import styles from "./about.module.css"

const AboutPage = () => {
  // console.log('lets check where its works')
  return (
    // <Image src="/about.png" alt="" width={500} height={500} />
    // <div className={styles.imgContainer}>
    //   <Image src="https://images.pexels.com/photos/28286847/pexels-photo-28286847/free-photo-of-guggenheim-museum.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" fill />
    // </div>
    <div className={styles.container}>
       <div className={styles.textContainer}>
          <h2>About Agency</h2>
          <h1>We create digital ideas that are bigger, bolder, braver and better.</h1>
          <p>We create digital ideas that are bigger, bolder, braver and better. We
            believe in good ideas flexibility and precission We’re world’s Our
            Special Team best consulting & finance solution provider. Wide range
            of web and software development services.</p>
            <div className={styles.boxes}>
              <div className={styles.box}>
                <h1>10 K+</h1>
                <p>Year of experience</p>
              </div>
              <div className={styles.box}>
                <h1>10 K+</h1>
                <p>Year of experience</p>
              </div>
              <div className={styles.box}>
                <h1>10 K+</h1>
                <p>Year of experience</p>
              </div>
            </div>
        </div>
       <div className={styles.imgContainer}>
        <Image
            src="/about.png"
            alt="About Image"
            fill
            className={styles.img}
          />
       </div>
    </div>
   
    
  )
}

export default AboutPage