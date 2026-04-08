import React from "react";
import styles from "./Navbar.module.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.navPar}>
        {/* Logo always brings the user back to the landing page */}
        <div className={styles.navLogo} onClick={() => navigate("/")}>
            <img src="https://static.vecteezy.com/system/resources/previews/026/824/742/non_2x/dsa-logo-design-inspiration-for-a-unique-identity-modern-elegance-and-creative-design-watermark-your-success-with-the-striking-this-logo-vector.jpg" alt="logo image" />
            <div className={styles.navLogoTxt}>DSA VISUALIZER</div>
        </div>

        <div className={styles.navHome}>
            <button className={styles.navHomeBtn} onClick={() => navigate("/")}>
              HOME
            </button>
        </div>

        <div className={styles.navAlgo}>
            {/* Algorithm opens the sorting landing page so users can choose a sort */}
            <button
              className={styles.navAlgoBtn}
              onClick={() => navigate("/sorting")}
            >
              ALGORITHM
            </button>
        </div>

        <div className={styles.navAbout}>
            {/* About gives project context instead of sending the user back home */}
            <button className={styles.navAboutBtn} onClick={() => navigate("/about")}>
              ABOUT
            </button>
        </div>
    </div>
  )
}

export default Navbar
