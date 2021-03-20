---
title: "Functional Programming"
metaTitle: "Functional Programming in Java"
metaDescription: "Functional Programming in Java, Lambda expressions, Functional Interfaces, 
Real use of lambdas and method references, Java Stream Operations, Java Stream examples,  Highest salary using java stream, 
Distinct integers in a list using java stream, List to Map using java stream"
---

### Functional Interfaces in Java (Lambda)

Every Lambda expression has 3 parts:
1. ()  Argument List 
2.  -> token
3.  { } Body

Lambda expressions only work for Functional Interfaces. eg:
1. Runnable and Callable (Multi-threading)
2. ActionListener (GUIs)
3. Comparable and Comparator (Sorting objects, Pure Functional Interface) 
```
Comparator <Employee> nameComparator = (a, b) -> a.getName().compareTo(b.getName());
```

### Functional Interfaces, by Function Type

| Function Type | Function Name   |
|---------------|-----------------|
| nothing -> T  | Supplier        |
| T -> nothing  | Consumer        |
| T -> T        | Unary Operator  |
| T, T -> T     | Binary Operator |
| S -> T        | Function        |
| T -> boolean  | Predicate       |

What is the real use of Lambdas and Method References ?
- They are 2 handy ways to pass code around.  
- Lambdas for short snippets of code.
- Method References for longer pieces of code for methods that are already part of a larger architecture.

### Streams
Unlike external iteration in for and while loops, java streams uses internal iteration,
meaning apply some operation on every object of the sequence.
You pass a functional object to the forEach method and the forEach method takes care of 
iteration.  It is internal because the responsibility of iteration lies within the collection, 
in this case stream. ie responsibility shifts from client to stream library.

``` 
Employee [] emps = { emp1, emp2, emp3 ..}
Arrays.stream(emps).fitler(e->e.getSalary() >= 2500)
                   .map(Employee::getName)
                   .sorted()
                   .forEach(System.out::println);

Stream.of(emps).filter ....
```
### Stream Operations
- filter: is to  filter the result based on predicate
- map:  is to extract based on the given method on object
- sorted:  is to sort
- forEach:  is terminal operator to print

### Stream Characteristics
- Streams can be ordered or unordered.  
  - Streams from lists are ordered. Streams from sets are unordered
- Streams can be sequential or parallel.  
- Streams can only be traversed Once.


### Filtering Operations of Java Streams
- Based on Content : filter, takeWhile, dropWhile  (takeWhile & dropWhile makes sense for ordered streams) 
- Based on Amount: limit
- Based on Uniqueness: distinct

### distinct() operation on streams      
- It is better to operate distinct() operation on as few elements as possible as it is more complex.   
- It is one of the few stateful intermediate operations.    
- It does not operate independently on each element.   
- Harder to parallelize.

### Terminal Operations in Stream

| Return Type | Function                                                              |
|-------------|-----------------------------------------------------------------------|
| void        | forEach, forEachOrdered, peek (intermediate operation, for debugging) |
| boolean     | allMatch, anyMatch, noneMatch                                         |
| array       | toArray                                                               |
| long        | count                                                                 |
| T           | findFirst, findAny, min, max                                          |

### Examples of Java Stream Operations

Q. Print names of 10  employees with the highest salary using java stream
```
A. emps.sorted(Comparator.comparingInt(Employee::getSalary).reversed())
       .limit(10)
       .map(Employee::getName)
       .forEachOrdered(System.out::println)
```   

Q. Count the number of distinct integers in a list using java stream
```
long n = list.parallelStream().  (this stream is natunally ordered(from List))
             .unordered().     (relaxing the order gives significant speedup)
             .distinct()
             .count();
```   

Q. List to Map using java stream    
```
Extract map with departmentId as key  and List<employeeId> as values: 
Map<Long, List<Long>> deptIdToEmpIdMap =  
        items.stream()
             .collect(
                 Collectors.groupingBy(
                     Department::id, 
                     Collectors.mapping(
                         Employee::getEmployeeId, 
                         Collectors.toList()
                     )
                 )
             );
```






 


 
