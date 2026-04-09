import { useEffect, useMemo, useState } from "react";
import styles from "./SortVisualizer.module.css";
import { runAlgorithm } from "../../services/algorithmApi";

const parseNumbers = (input) => {
  return input
    .split(",")
    .map((value) => Number(value.trim()))
    .filter((value) => !Number.isNaN(value));
};

const SortVisualizer = ({
  title,
  description,
  algorithmKey,
  defaultNumbers = "5, 1, 4, 2, 8",
}) => {
  const [numbersInput, setNumbersInput] = useState(defaultNumbers);
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [algorithmResponse, setAlgorithmResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeed] = useState(700);

  // This mirrors the backend request payload: { numbers, target }.
  const parsedNumbers = useMemo(
    () => parseNumbers(numbersInput),
    [numbersInput],
  );

  const getTypeClass = (type) => {
    switch (type) {
      case "SWAP":
        return styles.swap;
      case "COMPARE":
        return styles.compare;
      case "START":
        return styles.start;
      case "END":
        return styles.end;
      default:
        return styles.defaultType;
    }
  };

  const steps = algorithmResponse?.reportList ?? [];
  const activeStep = steps[activeStepIndex] ?? null;
  // Before the API runs, the chart previews whatever the user typed.
  const bars = activeStep?.currentState ?? parsedNumbers;
  const highlightedIndexes = activeStep?.activeIndex ?? [];

  useEffect(() => {
    if (!steps.length) {
      setActiveStepIndex(0);
      return;
    }

    setActiveStepIndex((currentIndex) =>
      Math.min(currentIndex, steps.length - 1),
    );
  }, [steps]);

  useEffect(() => {
    if (!isPlaying || steps.length === 0) {
      return undefined;
    }

    // Advances the backend frames automatically at the speed selected by the user.
    const timer = window.setInterval(() => {
      setActiveStepIndex((currentIndex) => {
        if (currentIndex >= steps.length - 1) {
          setIsPlaying(false);
          return currentIndex;
        }

        return currentIndex + 1;
      });
    }, speed);

    return () => window.clearInterval(timer);
  }, [isPlaying, speed, steps.length]);

  const handleInputChange = (event) => {
    setNumbersInput(event.target.value);
    setAlgorithmResponse(null);
    setError("");
    setActiveStepIndex(0);
    setIsPlaying(false);
  };

  const handleRunAlgorithm = async () => {
    if (parsedNumbers.length < 2) {
      setError("Enter at least two valid numbers separated by commas.");
      setAlgorithmResponse(null);
      return;
    }

    try {
      setLoading(true);
      setError("");

      // Sends the typed numbers to the Spring Boot endpoint for this algorithm.
      const response = await runAlgorithm(algorithmKey, parsedNumbers);
      setAlgorithmResponse(response);
      setActiveStepIndex(0);
      setIsPlaying(false);
    } catch (requestError) {
      setAlgorithmResponse(null);
      setError(requestError.message || "Could not reach the backend.");
      setIsPlaying(false);
    } finally {
      setLoading(false);
    }
  };

  const handlePlayPause = () => {
    if (!steps.length) {
      return;
    }

    if (activeStepIndex === steps.length - 1) {
      setActiveStepIndex(0);
    }

    setIsPlaying((currentValue) => !currentValue);
  };

  return (
    <section className={styles.page}>
      <div className={styles.header}>
        <div>
          <p className={styles.eyebrow}>Sorting Visualizer</p>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.subtitle}>{description}</p>
        </div>

        {/* Shows the backend route this page will call for this algorithm */}
        <div className={styles.endpointBox}>
          <span className={styles.endpointLabel}>Backend Endpoint</span>
          <code className={styles.endpoint}>
            POST /api/visualize/{algorithmKey}
          </code>
        </div>
      </div>

      <div className={styles.layout}>
        <aside className={styles.sidebar}>
          <div className={styles.panel}>
            <h2 className={styles.panelTitle}>Input</h2>
            <label className={styles.label} htmlFor={`${algorithmKey}-numbers`}>
              Numbers
            </label>
            <textarea
              id={`${algorithmKey}-numbers`}
              className={styles.textarea}
              value={numbersInput}
              onChange={handleInputChange}
              placeholder="Example: 5, 1, 4, 2, 8"
            />
            <p className={styles.helperText}>
              The backend expects a comma-separated list that becomes the
              `numbers` field in `AlgorithmRequest`.
            </p>

            {error ? <p className={styles.errorText}>{error}</p> : null}
            {loading ? (
              <p className={styles.infoText}>
                Running {algorithmKey} on the backend...
              </p>
            ) : null}

            <div className={styles.buttonRow}>
              <button
                className={styles.primaryButton}
                onClick={handleRunAlgorithm}
                disabled={loading}
              >
                {loading ? "Running..." : "Run Algorithm"}
              </button>
              <button
                className={styles.secondaryButton}
                onClick={() => {
                  setActiveStepIndex(0);
                  setAlgorithmResponse(null);
                  setError("");
                  setIsPlaying(false);
                }}
              >
                Reset View
              </button>
            </div>
          </div>

          <div className={styles.panel}>
            <h2 className={styles.panelTitle}>Summary</h2>
            <div className={styles.statsGrid}>
              <div className={styles.statCard}>
                <span className={styles.statLabel}>Swaps / Shifts</span>
                <strong>{algorithmResponse?.totalSwaps ?? 0}</strong>
              </div>
              <div className={styles.statCard}>
                <span className={styles.statLabel}>Comparisons</span>
                <strong>{algorithmResponse?.totalComparision ?? 0}</strong>
              </div>
              <div className={styles.statCard}>
                <span className={styles.statLabel}>Complexity</span>
                <strong>
                  {algorithmResponse?.theoriticalComplexity ?? "-"}
                </strong>
              </div>
              <div className={styles.statCard}>
                <span className={styles.statLabel}>Theoretical Steps</span>
                <strong>{algorithmResponse?.theoriticalSteps ?? 0}</strong>
              </div>
            </div>
          </div>
        </aside>

        <div className={styles.main}>
          <div className={styles.panel}>
            <div className={styles.viewerHeader}>
              <div>
                <h2 className={styles.panelTitle}>Current Frame</h2>
                <p
                  className={`${styles.frameDescription} ${getTypeClass(activeStep?.type)}`}
                >
                  {activeStep?.desp ??
                    "Type numbers, then run the algorithm to load the backend frames here."}
                </p>
              </div>

              <span
                className={`${styles.stepBadge} ${getTypeClass(activeStep?.type)}`}
              >
                {activeStep
                  ? `${activeStep.type} | Step ${activeStepIndex + 1}/${steps.length}`
                  : "No Step Loaded"}
              </span>
            </div>

            <div className={styles.controlsRow}>
              <button
                className={styles.primaryButton}
                onClick={handlePlayPause}
                disabled={!steps.length}
              >
                {isPlaying ? "Pause" : "Play"}
              </button>
              <div className={styles.speedControl}>
                <label
                  className={styles.speedLabel}
                  htmlFor={`${algorithmKey}-speed`}
                >
                  Speed
                </label>
                <select
                  id={`${algorithmKey}-speed`}
                  className={styles.speedSelect}
                  value={speed}
                  onChange={(event) => setSpeed(Number(event.target.value))}
                >
                  <option value={1000}>Slow</option>
                  <option value={700}>Normal</option>
                  <option value={400}>Fast</option>
                  <option value={220}>Very Fast</option>
                </select>
              </div>
            </div>

            <div className={styles.barArea}>
              {bars.length ? (
                bars.map((value, index) => {
                  const maxValue = Math.max(...bars, 1);
                  const barHeight = `${Math.max((value / maxValue) * 100, 12)}%`;
                  const isActive = highlightedIndexes.includes(index);

                  return (
                    <div key={`${value}-${index}`} className={styles.barColumn}>
                      <span className={styles.barValue}>{value}</span>
                      <div
                        className={`${styles.bar} ${isActive ? styles.barActive : ""}`}
                        style={{ height: barHeight }}
                      />
                      <span className={styles.barIndex}>{index}</span>
                    </div>
                  );
                })
              ) : (
                <p className={styles.emptyState}>
                  Add some numbers to preview the sorting layout.
                </p>
              )}
            </div>

            <div className={styles.navigationRow}>
              <button
                className={styles.secondaryButton}
                onClick={() =>
                  setActiveStepIndex((currentIndex) =>
                    Math.max(currentIndex - 1, 0),
                  )
                }
                disabled={!steps.length || activeStepIndex === 0 || isPlaying}
              >
                Previous
              </button>
              <button
                className={styles.secondaryButton}
                onClick={() =>
                  setActiveStepIndex((currentIndex) =>
                    Math.min(currentIndex + 1, steps.length - 1),
                  )
                }
                disabled={
                  !steps.length ||
                  activeStepIndex === steps.length - 1 ||
                  isPlaying
                }
              >
                Next
              </button>
            </div>
          </div>

          <div className={styles.panel}>
            <h2 className={styles.panelTitle}>Backend Report Steps</h2>
            {steps.length ? (
              <div className={styles.stepList}>
                {steps.map((step, index) => {
                  const isSelected = index === activeStepIndex;

                  return (
                    <button
                      key={`${step.type}-${index}`}
                      className={`${styles.stepItem} ${
                        isSelected ? styles.stepItemSelected : ""
                      } ${isSelected && isPlaying ? styles.stepItemPlaying : ""}`}
                      disabled={isPlaying}
                      // Clicking a step lets the user jump to that exact backend frame.
                      onClick={() => setActiveStepIndex(index)}
                    >
                      <span className={styles.stepTopRow}>
                        <span
                          className={`${styles.stepType} ${getTypeClass(step.type)}`}
                        >
                          {step.type}
                        </span>
                        {isSelected ? (
                          <span className={styles.liveBadge}>
                            {isPlaying ? "Live" : "Current"}
                          </span>
                        ) : null}
                      </span>
                      <span className={styles.stepText}>{step.desp}</span>
                    </button>
                  );
                })}
              </div>
            ) : (
              <p className={styles.emptyState}>
                No response loaded yet. Click `Run Algorithm` to fetch the step
                frames.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SortVisualizer;
