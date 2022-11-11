import Link from "next/link";
import styles from '../../styles/Footer.module.css';
import { Facebook, Instagram, Twitter, Snapchat } from "react-bootstrap-icons";


function Footer() {
  const facebookHanler = () => {
    window.open("https://www.facebook.com/", "_blank");
  }

  const instagramHanler = () => {
    window.open("https://www.instagram.com/?hl=en", "_blank");
  }

  const twitterHanler = () => {
    window.open("https://twitter.com/tweeter?lang=en", "_blank");
  }

  const snapchatHanler = () => {
    window.open("https://www.snapchat.com/", "_blank");
  }


  return (
    <div className={styles.footerBasic}>
      <footer>
        <div className={styles.social}>
          <a href="#" onClick={facebookHanler}><i className="bi bi-facebook"></i> <Facebook /></a>
          <a href="#" onClick={instagramHanler}><i className="bi bi-instagram"></i><Instagram /></a>
          <a href="#" onClick={twitterHanler}><i className="bi bi-twitter"></i><Twitter /></a>
          <a href="#" onClick={snapchatHanler}><i className="bi bi-snapchat"></i><Snapchat /></a>
        </div>
        <ul className="list-inline">
          <li className="list-inline-item"><Link href="/"><a>Home</a></Link></li>
          <li className="list-inline-item"><Link href="#"><a>Services</a></Link></li>
          <li className="list-inline-item"><Link href="#"><a>About</a></Link></li>
          <li className="list-inline-item"><Link href="#"><a>Terms</a></Link></li>
          <li className="list-inline-item"><Link href="#"><a>Privacy Policy</a></Link></li>
        </ul>
        <p className={styles.copyright}>Aslam Zaman © 2022</p>
      </footer>






    </div>
  )
}

export default Footer