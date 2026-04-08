````md id="strategy-layer-notes"
# Strategy Layer in Spring Boot — Easy + Deep Understanding

## What is Strategy Layer?

Strategy layer is used when:

👉 You have **multiple ways to perform the same task**

and you want to **choose one dynamically at runtime**

---

## In Your Project (Important)

Your task = **visualize an algorithm**

But algorithms can be:
- BFS
- DFS
- Sorting
- etc.

👉 Each algorithm has **different logic**

So instead of writing everything in one service:

❌ Bad approach:
- Big if-else or switch case

✅ You used Strategy Pattern:
- Clean, scalable, professional

---

## What You Did (Correct Design)

### 1. Common Interface

```java
public interface AlgorithmStrategy {
    AlgorithmResponse visualize(AlgorithmRequest request);
}
````

👉 This says:
"Every algorithm must follow this rule"

---

### 2. Multiple Implementations

You will have classes like:

* SelectionSort
* DfsStrategy
* BubbleSort

👉 Each class = different logic but implements same interface

---

### 3. Controller Uses Map

```java
private final Map<String, AlgorithmStrategy> algoMap;
```

👉 Spring automatically stores all objects(created) in a map--- Objects in Spring are Singleton that means that spring only create object only once.. and that object can be used n number of times until the backend server stops.

for example : in bubbleSort.java , spring founds @Service("bubble") and create its object [Concept= Inversion of Control], it finds "bubble" which is treated as a nickname and is stored in a map

map looks like this : bubble-> BubbleSortObject

So in AlgoController.java.. Line 25 to 37 makes this universal and only retrieve that object, that is asked by the user..

---

### 4. Dynamic Selection

```java
AlgorithmStrategy req = algoMap.get(algorithm.toLowerCase());
```

👉 Based on user input:

* "bubble" → Bubble Sort
* "selection" → Selection Sort

---

## Flow in Your Project

````
Client → Controller → Strategy → Algorithm Logic
``` id="st9xk1"

---

## Why Strategy Layer is Powerful

### 1. No if-else mess
Cleaner code

---

### 2. Easy to Add New Algorithm
Just:
- Create new class
- Implement interface

👉 No change in controller

---

### 3. Scalable Design
Works for:
- Algorithms
- Payment methods
- Authentication types
- etc.

---

## Real Understanding (Very Important)

👉 Strategy Layer = **“Choose logic at runtime”**

Instead of:
> "If user says BFS → do this"

You say:
> "Give me the BFS strategy and run it"

---

## Where It Fits

````

Client → Controller → Strategy Layer → Logic

```id="st2m7a"

(It replaces part of service layer in your case)

---

## One Line Understanding

👉 Strategy Layer = **A flexible way to switch between multiple logics dynamically**
```

