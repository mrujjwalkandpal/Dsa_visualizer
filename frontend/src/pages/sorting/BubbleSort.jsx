import SortVisualizer from "../../components/sortvisualizer/SortVisualizer";

const BubbleSort = () => {
  return (
    <SortVisualizer
      title="Bubble Sort Visualizer"
      description="This page is shaped around your Spring Boot response, including frame reports, active indexes, comparisons, swaps, and theoretical complexity."
      algorithmKey="bubble"
      defaultNumbers="5, 1, 4, 2, 8"
    />
  );
};

export default BubbleSort;
