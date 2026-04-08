import SortVisualizer from "../../components/sortvisualizer/SortVisualizer";

const InsertionSort = () => {
  return (
    <SortVisualizer
      title="Insertion Sort Visualizer"
      description="The shared UI works for insertion sort too, including insertion-specific step types like COMPARISON, SHIFTING, and INSERT."
      algorithmKey="insertion"
      defaultNumbers="5, 2, 4, 6, 1, 3"
    />
  );
};

export default InsertionSort;
