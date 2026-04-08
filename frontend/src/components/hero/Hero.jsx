import styles from "./Hero.module.css";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className={styles.hero}>
      <div className={styles.heroGlow} />

      <div className={styles.heroContent}>
        <div className={styles.copyBlock}>
          <p className={styles.heroEyebrow}>Interactive Learning</p>

          <h1 className={styles.heroTitle}>
            Visualize algorithms the way they actually move.
          </h1>

          <p className={styles.heroSubtitle}>
            Follow comparisons, swaps, insertions, and step-by-step state
            changes through a cleaner visual experience built for learning DSA.
          </p>

          <div className={styles.heroPoints}>
            <div className={styles.pointCard}>
              <span className={styles.pointLabel}>Sorting</span>
              <p>Track each comparison and understand why the array changes.</p>
            </div>
            <div className={styles.pointCard}>
              <span className={styles.pointLabel}>Backend Driven</span>
              <p>See frames returned by the Spring Boot engine, not fake UI states.</p>
            </div>
            <div className={styles.pointCard}>
              <span className={styles.pointLabel}>Built for PBL</span>
              <p>Turn classroom concepts into something visual, interactive, and clear.</p>
            </div>
          </div>

          <div className={styles.heroActions}>
            {/* CTA sends the user to the sorting landing page first */}
            <button
              className={styles.heroBtn}
              onClick={() => navigate("/sorting")}
            >
              Start Visualizing
            </button>

            <button
              className={styles.heroGhostBtn}
              onClick={() => navigate("/about")}
            >
              Learn About Project
            </button>
          </div>
        </div>

        <div className={styles.heroPreview}>
          <div className={styles.previewCard}>
            <div className={styles.previewHeader}>
              <span className={styles.previewBadge}>Why This Helps</span>
              <span className={styles.previewMeta}>Responsive Learning View</span>
            </div>

            <div className={styles.previewGrid}>
              <div className={styles.previewInfoCard}>
                <span className={styles.previewNumber}>01</span>
                <h3>See Every Decision</h3>
                <p>
                  Watch how the array changes frame by frame instead of guessing
                  what happened between steps.
                </p>
              </div>

              <div className={styles.previewInfoCard}>
                <span className={styles.previewNumber}>02</span>
                <h3>Learn With Real Flow</h3>
                <p>
                  Follow comparisons, swaps, insertions, and shifting in the
                  same order the backend generates them.
                </p>
              </div>

              <div className={styles.previewInfoCardWide}>
                <div className={styles.previewPillRow}>
                  <span className={styles.previewPill}>Bubble Sort</span>
                  <span className={styles.previewPill}>Insertion Sort</span>
                  <span className={styles.previewPill}>More Coming</span>
                </div>
                <p className={styles.previewSummary}>
                  Built to connect theory, backend logic, and UI animation in
                  one place so the algorithm journey feels easier to understand.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
