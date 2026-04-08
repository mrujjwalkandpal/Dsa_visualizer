import styles from "./VisualizerCard.module.css";
import { useNavigate } from "react-router-dom";

const VisualizerCards = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h2>Sorting</h2>
        <p>Visualize sorting algorithms like Bubble, Merge, Quick.</p>
        {/* Sorting now opens a landing page where the user can choose the algorithm */}
        <button onClick={() => navigate("/sorting")}>
          Open
        </button>
      </div>

      <div className={styles.card}>
        <h2>Searching</h2>
        <p>Explore linear and binary search visually.</p>
        <button disabled>Coming Soon</button>
      </div>

      <div className={styles.card}>
        <h2>Trees</h2>
        <p>Understand BST, traversal and operations.</p>
        <button disabled>Coming Soon</button>
      </div>

      <div className={styles.card}>
        <h2>Graphs</h2>
        <p>Visualize BFS, DFS and shortest paths.</p>
        <button disabled>Coming Soon</button>
      </div>
    </div>
  );
};

export default VisualizerCards;
