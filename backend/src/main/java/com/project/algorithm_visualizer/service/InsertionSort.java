package com.project.algorithm_visualizer.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.project.algorithm_visualizer.dto.AlgorithmRequest;
import com.project.algorithm_visualizer.dto.AlgorithmResponse;
import com.project.algorithm_visualizer.model.SortSteps;
import com.project.algorithm_visualizer.startegy.AlgorithmStrategy;

@Service("insertion")
public class InsertionSort implements AlgorithmStrategy {

    @Override
    public AlgorithmResponse visualize(AlgorithmRequest request) {
        List<Integer> numbers = new ArrayList<>(request.getNumbers());
        List<SortSteps> steps = new ArrayList<>();

        int sizeOfNumbers = numbers.size();
        int comparisons = 0;
        int swaps = 0;

        steps.add(new SortSteps(new ArrayList<>(numbers), new int[] {}, "START",
                "Insertion Sort Started for " + sizeOfNumbers + " Elements"));

        for (int i = 1; i < sizeOfNumbers; i++) {
            int key = numbers.get(i);
            int j = i - 1;

            while (j >= 0) {
                comparisons++;

                if(numbers.get(j) > key){

                    String desc = "Comparing " + numbers.get(j) + " and " + key;
                    steps.add(new SortSteps(new ArrayList<>(numbers), new int[] { j, j + 1 }, "COMPARISON", desc));

                    numbers.set(j + 1, numbers.get(j));
                    swaps++;

                    String msg = "Shifted " + numbers.get(j) + " to position " + (j + 1);
                    steps.add(new SortSteps(new ArrayList<>(numbers), new int[] { j, j + 1 }, "SHIFTING", msg));

                    j = j - 1;
                }
                else break;
            }

            numbers.set(j + 1, key);
            steps.add(new SortSteps(new ArrayList<>(numbers), new int[] { j + 1 }, "INSERT",
                    "Inserted " + key + " at position " + (j + 1)));
        }
        steps.add(new SortSteps(new ArrayList<>(numbers), new int[]{}, "FINISH", "Success! All elements have been sorted in " + comparisons + " comparisons."));

        AlgorithmResponse response = new AlgorithmResponse(steps,swaps,"O(n²)",comparisons,sizeOfNumbers*sizeOfNumbers -1);

        return response;
    }

}