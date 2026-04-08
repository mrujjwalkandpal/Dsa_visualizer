package com.project.algorithm_visualizer.startegy;

import com.project.algorithm_visualizer.dto.AlgorithmRequest;
import com.project.algorithm_visualizer.dto.AlgorithmResponse;

public interface AlgorithmStrategy {
    
    public AlgorithmResponse visualize(AlgorithmRequest request);
}
