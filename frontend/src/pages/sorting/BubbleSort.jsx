import SortVisualizer from "../../components/sortvisualizer/SortVisualizer";

const BubbleSort = () => {
  return (
    <SortVisualizer
      title="Bubble Sort Visualizer"
      description="Bubble Sort compares two nearby numbers and swaps if they are in the wrong order. This process repeats until everything is sorted."
      algorithmKey="bubble"
      defaultNumbers="5, 1, 4, 2, 8"
    />
  );
};

export default BubbleSort;
