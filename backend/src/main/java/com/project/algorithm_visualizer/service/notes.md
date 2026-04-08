````md id="service-layer-your-code"
# Service Layer (Based on Your Project)

## What is Service Layer (In Your Project)?

In your project, Service Layer is:

👉 The place where **actual algorithm logic is written and executed**

Example:
- Bubble Sort logic
- Step tracking
- Comparisons & swaps counting

---

## Your Service Class

```java
@Service("bubble")
public class BubbleSort implements AlgorithmStrategy
````

👉 This tells:

* This is a **Spring Service**
* Named as `"bubble"` (used in your map)
* It follows **AlgorithmStrategy rule**

---

## What Your Service Layer is Doing

### 1. Takes Input (DTO)

```java
List<Integer> numbers = new ArrayList<>(request.getNumbers());
```

👉 Receives data from controller via DTO
👉 Creates a safe copy to work on

---

### 2. Applies Business Logic (CORE PART)

```java
for(int i=0;i<sizeOfNumbers;i++){
    for(int j=0;j<sizeOfNumbers-i-1;j++){
```

👉 This is your **actual algorithm logic (Bubble Sort)**
👉 Service layer = where real processing happens

---

### 3. Tracks Steps (Extra Logic)

```java
steps.add(new SortSteps(...));
```

👉 You are not just sorting
👉 You are:

* Recording each step
* Adding descriptions
* Tracking indices

👉 This is **custom business logic**

---

### 4. Maintains Metrics

```java
int comparisions = 0;
int swaps = 0;
```

👉 Service calculates:

* Comparisons
* Swaps
* Complexity info

---

### 5. Prepares Response

```java
AlgorithmResponse response = new AlgorithmResponse(...);
```

👉 Converts processed data → response DTO
👉 Sends clean result back to controller

---

## Flow in Your Project

````
Client → Controller → Strategy(Service) → Algorithm Logic → Response
``` id="srvflow1"

---

## Key Responsibilities (From Your Code)

- 🧠 Execute algorithm logic  
- 📊 Track steps and stats  
- 🔄 Process input data  
- 📦 Prepare final response  

---

## Important Design Observations

### 1. Service = Strategy
👉 You combined:
- Service Layer + Strategy Pattern

✔ Very good design

---

### 2. No Business Logic in Controller
✔ Controller only calls:
```java
req.visualize(request);
````

👉 Clean separation maintained

---

### 3. Highly Scalable

To add new algorithm:

* Create new class
* Implement `AlgorithmStrategy`
* Add `@Service("name")`

👉 No change in controller needed

---

## Real Understanding

👉 Your Service Layer is not just “logic”

It is:

* Logic + Processing + Step Tracking + Result Building

---

## One Line Understanding

👉 Service Layer = **Where your algorithm actually runs and produces meaningful output**

```

---