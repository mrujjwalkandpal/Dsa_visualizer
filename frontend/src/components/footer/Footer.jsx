import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      
      <div className={styles.footerContent}>
        <h3>DSA Visualizer</h3>
        <p>Learn Data Structures & Algorithms visually</p>
      </div>

      <div className={styles.footerBottom}>
        <p>Copyright 2026 Team 5. All rights reserved.</p>
      </div>

    </div>
  );
};

export default Footer;
