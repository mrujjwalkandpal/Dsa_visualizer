// This is a POJO (Plain old Java Object) class, this class is acting like a frame and storing its relative metadata.

package com.project.algorithm_visualizer.model;

import java.util.List;

public class SortSteps{
    private List<Integer> currentState; // Current State of the Array at that particular Frame
    private int[] activeIndex; // The indices that are going to be swapped or compared
    private String type; // type of Algo-SEARCHING, SORTING
    private String desp; // Description of each frame (Ex: 5 is compared with 4 | or | 9 is swapped with 3 | or | Algorithm Starts, Algorithm Stops.. these type of data)



    // -- Constructors--
    public SortSteps(List<Integer> currentState, int[] activeIndex, String type, String desp) {
        this.currentState = currentState;
        this.activeIndex = activeIndex;
        this.type = type;
        this.desp = desp;
    }

    // Spring boot also needs a non parameterized constructor or it will give errors.
    public SortSteps() {
    }



    // -- Getters
    public List<Integer> getCurrentState() {
        return currentState;
    }
    public int[] getActiveIndex() {
        return activeIndex;
    }
    public String getType() {
        return type;
    }
    public String getDesp() {
        return desp;
    }



    // -- Setters
    public void setCurrentState(List<Integer> currentState) {
        this.currentState = currentState;
    }
    public void setActiveIndex(int[] activeIndex) {
        this.activeIndex = activeIndex;
    }
    public void setType(String type) {
        this.type = type;
    }
    public void setDesp(String desp) {
        this.desp = desp;
    }

}