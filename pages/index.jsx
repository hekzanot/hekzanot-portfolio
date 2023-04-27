import Link from 'next/link';
// import Illustration from '../components/Illustration';
import Image from "next/image";
import styles from '../styles/HomePage.module.css';

export default function HomePage() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.background}>
          <h1>Design</h1>
          <h1>Development</h1>
        </div>
        <div className={styles.foreground}>
          <div className={styles.content}>
            <h1 className={styles.name}>Mücahit Eren Özcan</h1>
            <h6 className={styles.bio}>Jr. Software Engineer</h6>
            <div className={styles.cardContainer}>
              <div className={styles.card}>
                <div className={styles.content}>
                  <h4>My Stack</h4>
                  <div className={styles.tags}>
                    <span key='Research' className='Research'>
                      HTML5
                    </span>
                    <span key='PyTorch' className='PyTorch'>
                      CSS3
                    </span>
                    <span key='Tensorflow' className='Tensorflow'>
                      SASS
                    </span>
                    <span key='Apache-Spark' className='Apache-Spark'>
                      Bootstrap
                    </span>
                    <span key='SQL' className='SQL'>
                      JavaScript
                    </span>
                    <span key='Computer-Vision' className='Computer-Vision'>
                      JQuery
                    </span>
                    <span key='Data-Pipelines' className='Data-Pipelines'>
                      React/Next.Js 
                    </span>
                    <span key='MLOps' className='MLOps'>
                      GIT
                    </span>
                    <span key='Software-Design' className='Software-Design'>
                      Laravel
                    </span>
                    <span key='Bots' className='Bots'>
                      MySQL
                    </span>
                    <span key='APIs' className='APIs'>
                      APIs
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <Link href="/about">
              <button className={styles.button}>Hakkımda</button>
            </Link>
            {/* <Link href="/projects">
              <button className={styles.button}>View Projects</button>
            </Link> */}
            <Link href="/contact">
              <button className={styles.outlined}>İletişim</button>
            </Link>
          </div>
          {/* <Illustration className={styles.illustration} /> */}
          <div className={styles.right}>
            <div className={styles.picture_boader}>
              <Image
                className={styles.picture}
                src="/ben.jpg"
                width={300}
                height={290}
                alt="Mücahit' Picture"
              />
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: { title: 'Home' },
  };
}
