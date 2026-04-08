````md id="model-layer-your-code"
# Model Layer (Based on Your Project)

## What is Model Layer (In Your Project)?

In your project, Model layer is:

👉 The **structure that holds your data**  
👉 It defines **what kind of data flows inside your system**

---

## Your Model Class

```java
public class SortSteps
````

👉 This represents **one step/frame of your algorithm visualization**

---

## What Your Model is Representing

Each object of `SortSteps` = **one frame of animation**

👉 It contains:

### 1. Current State of Array

```java
private List<Integer> currentState;
```

* Stores array at that moment
* Example: `[5, 3, 8, 1]`

---

### 2. Active Indices

```java
private int[] activeIndex;
```

* Which elements are being:

  * Compared
  * Swapped

---

### 3. Type

```java
private String type;
```

* What is happening:

  * COMPARE
  * SWAPPED
  * START
  * FINISH

---

### 4. Description

```java
private String desp;
```

* Human-readable explanation
* Used for UI / visualization

---

## What Model Layer is Doing Here

### 1. Holds Data Only

👉 No logic
👉 No loops
👉 No processing

✔ Just storing values

---

### 2. Acts as Data Container

```java
new SortSteps(...)
```

👉 Service layer creates these objects
👉 Controller sends them to client

---

### 3. Used Across Layers

* Created in **Service**
* Returned via **DTO/Response**
* Consumed by **Frontend**

---

## Constructors (Important)

### Parameterized Constructor

```java
public SortSteps(...)
```

👉 Used to create object with data

---

### Default Constructor

```java
public SortSteps() {}
```

👉 Required by Spring (for serialization/deserialization)

---

## Getters & Setters

👉 Used by:

* Spring
* JSON conversion
* Other layers

---

## Flow in Your Project

```id="modflow1"
Service → Model (SortSteps) → Response DTO → Controller → Client
```

---

## Key Responsibilities (From Your Code)

* 📦 Store step data
* 🎯 Represent one frame of algorithm
* 🔄 Transfer data between layers
* 🧩 Keep structure clean

---

## Important Observation

👉 Your Model is **NOT database entity**

✔ It is just a **plain data class (POJO)**
✔ Perfect for your no-database project

---

## Real Understanding

👉 Model = **“Shape of your data”**

In your case:

* It defines how each **visual step looks**

---

## One Line Understanding

👉 Model = **A simple class that holds and defines your data structure (no logic)**

