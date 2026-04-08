package com.project.algorithm_visualizer.dto;

import java.util.List;

import com.project.algorithm_visualizer.model.SortSteps;

public class AlgorithmResponse {
   private List<SortSteps> reportList; // Stores the steps genrated by SortSteps.java class so that we can show.. what really happened during an algorithm run to the user
    private int totalSwaps; 
    private int totalComparision;
    private String theoriticalComplexity; // Time COmplexity- O(N),O(N^2),O(logN)   
    private int theoriticalSteps; // It stores theorticalSteps means : for example - Bubble sort have (N^2) time then total steps for array of 5 elements should be 25.. Later we can compare the pratical steps count and this theoriticalSteps count.



    // -- Constructors --
    public AlgorithmResponse(List<SortSteps> reportList, int totalSwaps, String theoriticalComplexity,int totalComparision, int theoriticalSteps) {
        this.reportList = reportList;
        this.totalSwaps = totalSwaps;
        this.totalComparision = totalComparision;
        this.theoriticalSteps = theoriticalSteps;
        this.theoriticalComplexity=theoriticalComplexity;
    }
    // Spring boot also needs a non parameterized constructor or it will give errors.
    public AlgorithmResponse() {
    }



    // -- Getters --
    public List<SortSteps> getReportList() {
        return reportList;
    }
    public int getTotalSwaps() {
        return totalSwaps;
    }
    public int getTotalComparision() {
        return totalComparision;
    }
    public String getTheoriticalComplexity() {
        return theoriticalComplexity;
    }
    public int getTheoriticalSteps() {
        return theoriticalSteps;
    }



    // -- Setters -- 
    public void setReportList(List<SortSteps> reportList) {
        this.reportList = reportList;
    }
    public void setTotalSwaps(int totalSwaps) {
        this.totalSwaps = totalSwaps;
    }
    public void setTotalComparision(int totalComparision) {
        this.totalComparision = totalComparision;
    }
    public void setTheoriticalComplexity(String theoriticalComplexity) {
        this.theoriticalComplexity = theoriticalComplexity;
    }
    public void setTheoriticalSteps(int theoriticalSteps) {
        this.theoriticalSteps = theoriticalSteps;
    }
}
