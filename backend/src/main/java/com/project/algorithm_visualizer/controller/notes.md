````md id="controller-layer-your-code"
# Controller Layer (Based on Your Project)

## What is Controller Layer (In Your Project)?

In your project, Controller is:

👉 The **entry point of your API**  
👉 It receives the request, selects the correct algorithm, and returns the result

---

## Your Controller Class

```java
@RestController
@RequestMapping("/api/visualize")
public class AlgoController
````

👉 This means:

* It handles **HTTP requests**
* Base URL = `/api/visualize`

---

## What Your Controller is Doing

### 1. Receives Request from Client

```java
@PostMapping("/{algorithm}")
```

👉 Endpoint example:

```
POST /api/visualize/bubble
```

* `{algorithm}` = dynamic input (like "bubble", "dfs")

---

### 2. Takes Input Data (DTO)

```java
@PathVariable String algorithm
@RequestBody AlgorithmRequest request
```

👉 Controller receives:

* Algorithm name (from URL)
* Data (numbers list) from request body

---

### 3. Selects Correct Strategy (Important)

```java
AlgorithmStrategy req = algoMap.get(algorithm.toLowerCase());
```

👉 This is the **main job of your controller**

* Finds correct algorithm (bubble, etc.)
* Uses map provided by Spring

---

### 4. Handles Invalid Input

```java
if(req == null){
    throw new RuntimeException("Algorithm not found");
}
```

👉 Ensures:

* Only valid algorithms are allowed

---

### 5. Calls Service Logic

```java
return req.visualize(request);
```

👉 Controller does NOT process data
👉 It just forwards request to service (strategy)

---

## Flow in Your Project

````
Client → Controller → Strategy(Service) → Response
``` id="ctrlflow1"

---

## Key Responsibilities (From Your Code)

- 🌐 Handle HTTP request  
- 📥 Accept input (DTO + path variable)  
- 🔍 Choose correct algorithm  
- 📤 Return response  

---

## Important Design Observations

### 1. Controller is Thin ✅

- No loops
- No algorithm logic
- No heavy processing

👉 Perfect design

---

### 2. Dynamic Routing

Instead of:
- `/bubble`
- `/dfs`

👉 You used:
````

/api/visualize/{algorithm}

````

✔ More scalable

---

### 3. Uses Spring Dependency Injection

```java
private final Map<String, AlgorithmStrategy> algoMap;
````

👉 Spring automatically injects all strategies

---

## Real Understanding

👉 Your Controller is like a **dispatcher**

* Takes request
* Decides “which algorithm to run”
* Sends it to correct service

---

## One Line Understanding

👉 Controller = **Receives request, selects logic, and returns response without doing actual work**

```


