package com.project.algorithm_visualizer.controller;

import com.project.algorithm_visualizer.dto.AlgorithmRequest;
import com.project.algorithm_visualizer.dto.AlgorithmResponse;
import com.project.algorithm_visualizer.startegy.AlgorithmStrategy;

import java.util.Map;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
@RequestMapping("/api/visualize")
public class AlgoController {

    private final Map<String, AlgorithmStrategy> algoMap;

    public AlgoController(Map<String, AlgorithmStrategy> algoMap) {
        this.algoMap = algoMap;
    }

    @PostMapping("/{algorithm}")
    public AlgorithmResponse algorithmStart(
            @PathVariable String algorithm,
            @RequestBody AlgorithmRequest request)

    {
        AlgorithmStrategy req= algoMap.get(algorithm.toLowerCase());
        if(req==null){
            throw new RuntimeException("Algorithm not found");
        }

        return req.visualize(request);
    }

}
