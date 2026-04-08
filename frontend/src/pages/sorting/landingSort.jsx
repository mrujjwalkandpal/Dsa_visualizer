import { useNavigate } from "react-router-dom";
import styles from "./LandingSort.module.css";

const LandingSort = () => {
  const navigate = useNavigate();

  return (
    <section className={styles.page}>
      <div className={styles.header}>
        <h1 className={styles.title}>Choose a Sorting Visualizer</h1>
        <p className={styles.subtitle}>
          Pick an algorithm to explore its steps and behavior visually.
        </p>
      </div>

      {/* Reuses the same card-style layout for algorithm selection */}
      <div className={styles.container}>
        <div className={styles.card}>
          <h2>Bubble Sort</h2>
          <p>
            Watch adjacent elements compare and swap until the array is sorted.
          </p>
          <button onClick={() => navigate("/sorting/bubble-sort")}>
            Open
          </button>
        </div>

        <div className={styles.card}>
          <h2>Insertion Sort</h2>
          <p>
            See each value move into its correct position in the growing sorted
            section.
          </p>
          <button onClick={() => navigate("/sorting/insertion-sort")}>
            Open
          </button>
        </div>
      </div>
    </section>
  );
};

export default LandingSort;
