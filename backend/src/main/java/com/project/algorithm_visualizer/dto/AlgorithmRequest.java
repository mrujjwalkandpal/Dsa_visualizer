package com.project.algorithm_visualizer.dto;

import java.util.List;

public class AlgorithmRequest {
    private List<Integer> numbers;
    private Integer target;

    public AlgorithmRequest(List<Integer> numbers, Integer target) {
        this.numbers = numbers;
        this.target = target;
    }
    public AlgorithmRequest() {
    }

    public List<Integer> getNumbers() {
        return numbers;
    }
    public int getTarget() {
        return target;
    }

    public void setNumbers(List<Integer> numbers) {
        this.numbers = numbers;
    }
    public void setTarget(int target) {
        this.target = target;
    }
    
}
