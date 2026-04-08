import styles from "./About.module.css";

const About = () => {
  return (
    <section className={styles.page}>
      <div className={styles.heroCard}>
        <p className={styles.eyebrow}>About The Project</p>
        <h1 className={styles.title}>DSA Visualizer for 4th Sem PBL</h1>
        <p className={styles.description}>
          This project is being developed as our 4th semester Project Based
          Learning work. The goal is to make core Data Structures and Algorithms
          easier to understand through visual, step-by-step execution.
        </p>
      </div>

      <div className={styles.grid}>
        <section className={styles.card}>
          <h2>Project Goal</h2>
          <p>
            We are building an interactive visualizer that helps students learn
            how algorithms behave internally instead of only reading theory.
          </p>
          <p>
            The focus is on turning comparisons, swaps, insertions, and other
            algorithm steps into something learners can actually see.
          </p>
        </section>

        <section className={styles.card}>
          <h2>Phase 2 Progress</h2>
          <ul className={styles.list}>
            <li>Home page with navbar, hero section, feature cards, and footer</li>
            <li>Sorting landing page where users can choose an algorithm</li>
            <li>Separate pages for Bubble Sort and Insertion Sort</li>
            <li>Reusable sorting visualizer UI for multiple sorting algorithms</li>
            <li>Frontend input panel, bars view, stats area, and step navigation</li>
            <li>Spring Boot backend integration structure for sorting endpoints</li>
          </ul>
        </section>

        <section className={styles.card}>
          <h2>What Is Working Now</h2>
          <ul className={styles.list}>
            <li>Users can move from home to the sorting section through routing</li>
            <li>Bubble Sort and Insertion Sort each have their own page</li>
            <li>The visualizer UI is aligned with the backend response format</li>
            <li>Typed array input can be sent to the backend algorithm API</li>
          </ul>
        </section>

        <section className={styles.card}>
          <h2>Next Steps</h2>
          <ul className={styles.list}>
            <li>Add smoother animation playback for backend-generated steps</li>
            <li>Improve styling and usability for the algorithm pages</li>
            <li>Extend the same reusable structure to more sorting algorithms</li>
            <li>Later expand into additional DSA topics beyond sorting</li>
          </ul>
        </section>
      </div>
    </section>
  );
};

export default About;
