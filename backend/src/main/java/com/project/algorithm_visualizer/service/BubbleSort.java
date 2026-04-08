package com.project.algorithm_visualizer.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.project.algorithm_visualizer.dto.AlgorithmRequest;
import com.project.algorithm_visualizer.dto.AlgorithmResponse;
import com.project.algorithm_visualizer.model.SortSteps;
import com.project.algorithm_visualizer.startegy.AlgorithmStrategy;


@Service("bubble")
public class BubbleSort implements AlgorithmStrategy{

     
    @Override
    public AlgorithmResponse visualize(AlgorithmRequest request){
        List<Integer> numbers = new ArrayList<>(request.getNumbers());
        List<SortSteps> steps = new ArrayList<>();
        int sizeOfNumbers= numbers.size();
        int comparisions=0;
        int swaps=0;
        steps.add(new SortSteps(new ArrayList<>(numbers), new int[]{}, "START", "Algorithm started: Preparing to sort " + sizeOfNumbers + " elements."));
        for(int i=0;i<sizeOfNumbers;i++){
            boolean isSwappingHappens=false;
            for(int j=0;j<sizeOfNumbers-i-1;j++){
                comparisions++;

                String desc= numbers.get(j)+" and "+ numbers.get(j+1);
                steps.add(new SortSteps(new ArrayList<>(numbers),new int[]{j,j+1},"COMPARE","Comparing "+desc));
                if(numbers.get(j)>numbers.get(j+1)){
                    isSwappingHappens=true;
                    swaps++;
                    String msg="Swapped "+numbers.get(j)+" and "+ numbers.get(j+1);

                    int temp=numbers.get(j);
                    numbers.set(j,numbers.get(j+1));
                    numbers.set(j+1,temp);

                    steps.add(new SortSteps(new ArrayList<>(numbers),new int[]{j,j+1},"SWAPPED", msg));
                }
            }
            if(isSwappingHappens==false){
                steps.add(new SortSteps(new ArrayList<>(numbers),new int[]{}, "FINISH","Array was Already in a Sorted Order"));
                break;
            }
        }
        steps.add(new SortSteps(new ArrayList<>(numbers), new int[]{}, "FINISH", "Success! All elements have been sorted in " + comparisions + " comparisons."));
        AlgorithmResponse response = new AlgorithmResponse(steps,swaps,"O(n²)",comparisions,sizeOfNumbers*(sizeOfNumbers-1));
        


        return response;
    }
}
