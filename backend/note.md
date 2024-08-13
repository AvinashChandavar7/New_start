In Dart, there are four main types of loops:

1. `for`
2. `for-in`
3. `while`
4. `do-while`

### 1. **`for` Loop**

- used when you know in advance how many times you want to execute a statement or a block of statements.

**Syntax:**

```dart
for (initialization; condition; increment/decrement) {
  // Code to execute
}
```

**Example:**

```dart
void main() {
  // Loop from 1 to 5
  for (int i = 1; i <= 5; i++) {
    // Print the current iteration number
    print('Iteration $i');
  }
}
```

**Output:**

```
Iteration 1
Iteration 2
Iteration 3
Iteration 4
Iteration 5
```

### 2. **`for-in` Loop**

- used to iterate over elements of a collection, such as a list, set, or map.

**Syntax:**

```dart
for (var element in collection) {
  // Code to execute
}
```

**Example:**

```dart
void main() {
  // A list of fruits
  var fruits = ['Apple', 'Banana', 'Cherry'];

  // Loop through each fruit in the list
  for (var fruit in fruits) {
    // Print the name of the fruit
    print('I like $fruit');
  }
}
```

**Output:**

```
I like Apple
I like Banana
I like Cherry
```

### 3. **`while` Loop**

- The `while` loop executes a block of code as long as the specified condition is `true`.
- It is generally used when the number of iterations is not known beforehand.

**Syntax:**

```dart
while (condition) {
  // Code to execute
}
```

**Example:**

```dart
void main() {
  int i = 1; // Initialization

  // Loop while i is less than or equal to 5
  while (i <= 5) {
    // Print the current iteration number
    print('Iteration $i');

    // Increment i by 1
    i++;
  }
}
```

**Output:**

```
Iteration 1
Iteration 2
Iteration 3
Iteration 4
Iteration 5
```

### 4. **`do-while` Loop**

The `do-while` loop is similar to the `while` loop, but it ensures that the block of code is executed at least once before checking the condition.

**Syntax:**

```dart
do {
  // Code to execute
} while (condition);
```

**Example:**

```dart
void main() {
  int i = 1; // Initialization

  // Execute the block first and then check the condition
  do {
    // Print the current iteration number
    print('Iteration $i');

    // Increment i by 1
    i++;
  } while (i <= 5); // Check the condition after the block
}
```

**Output:**

```
Iteration 1
Iteration 2
Iteration 3
Iteration 4
Iteration 5
```

### Summary

- **`for` Loop:** Best when you know the number of iterations beforehand.
- **`for-in` Loop:** Ideal for iterating over collections.
- **`while` Loop:** Used when the condition is checked before each iteration.
- **`do-while` Loop:** Used when you need the loop to execute at least once, regardless of the condition.

---

## Functions

Certainly! Here's a comprehensive overview of the various types of functions and related features in Dart, with examples and explanations for each.

### 1. **Basic Function**

- **Purpose:** To encapsulate a piece of code for reuse.

**Example:**

```dart
void greet(String name) {
  print('Hello, $name!'); // Prints a greeting message with the provided name
}

void main() {
  greet('Alice'); // Calls the greet function with 'Alice'
}
```

### 2. **Returning Function**

- **Purpose:** To calculate a value and return it for use elsewhere.

**Example:**

```dart
int add(int a, int b) {
  return a + b; // Returns the sum of a and b
}

void main() {
  var sum = add(3, 4); // Calls the add function and stores the result in sum
  print(sum); // Prints: 7
}
```

### 3. **Arrow Function**

- **Purpose:** For concise, single-expression functions.

**Example:**

```dart
int multiply(int a, int b) => a * b; // Returns the product of a and b

void main() {
  var product = multiply(3, 4); // Calls the multiply function and stores the result in product
  print(product); // Prints: 12
}
```

### 4. **Anonymous Function (Lambda)**

- **Purpose:** For short-lived functions, often used as arguments to other functions.

**Example:**

```dart
void main() {
  var list = ['Alice', 'Bob', 'Charlie'];

  // Uses an anonymous function to print each name in the list
  list.forEach((name) {
    print(name); // Prints each name in the list
  });
}
```

### 5. **Named Parameters**

- **Purpose:** To make function calls clearer and allow default values.

**Example:**

```dart
void describe({required String name, int age = 18}) {
  print('Name: $name, Age: $age'); // Prints name and age
}

void main() {
  describe(name: 'Alice'); // Calls the describe function with a name and default age
}
```

### 6. **Positional Parameters**

- **Purpose:** When the function signature is simple and order matters.

**Example:**

```dart
void display(String name, int age) {
  print('Name: $name, Age: $age'); // Prints name and age
}

void main() {
  display('Alice', 30); // Calls the display function with a name and age
}
```

### 7. **First-Class Functions**

- **Purpose:** Functions can be treated as variables, passed around, and executed dynamically.

**Example:**

```dart
void printMessage(String message) {
  print(message); // Prints the provided message
}

void executeFunction(void Function(String) fn, String value) {
  fn(value); // Calls the passed function with the provided value
}

void main() {
  executeFunction(printMessage, 'Hello, Dart!'); // Executes printMessage with 'Hello, Dart!'
}
```

### 8. **Higher-Order Functions**

- **Purpose:** Functions that operate on other functions (pass them as arguments or return them).

**Example:**

```dart
int applyOperation(int a, int b, int Function(int, int) operation) {
  return operation(a, b); // Calls the passed function with a and b
}

int add(int a, int b) => a + b;
int subtract(int a, int b) => a - b;

void main() {
  var result = applyOperation(5, 3, add); // Uses the add function as an argument
  print(result); // Prints: 8

  result = applyOperation(5, 3, subtract); // Uses the subtract function as an argument
  print(result); // Prints: 2
}
```

### 9. **Async and Await Functions**

- **Purpose:** To handle asynchronous operations cleanly and readably.

**Example:**

```dart
Future<String> fetchFromServer() async {
  // Simulates a delay for fetching data
  await Future.delayed(Duration(seconds: 2));
  return 'Data from server'; // Returns a simulated response
}

Future<void> fetchData() async {
  var data = await fetchFromServer(); // Awaits the result of fetchFromServer
  print(data); // Prints: Data from server
}

void main() {
  fetchData(); // Calls the async function to fetch data
}
```

### 10. **Main Function**

- **Purpose:** The entry point of every Dart program.

**Example:**

```dart
void main() {
  print('Hello, Dart!'); // Prints a greeting message
}
```

### 11. **Recursive Functions**

- **Purpose:** To call itself to solve a problem by breaking it down into smaller instances of the same problem.

**Example:**

```dart
int factorial(int n) {
  if (n <= 1) return 1; // Base case
  return n * factorial(n - 1); // Recursive case
}

void main() {
  print(factorial(5)); // Prints: 120
}
```

### 12. **Function Types (Type Aliases)**

- **Purpose:** To define a type for functions, which can then be used as parameters or return types.

**Example:**

```dart
typedef IntOperation = int Function(int, int);

int add(int a, int b) => a + b;

void main() {
  IntOperation operation = add; // Assigns the add function to the type alias
  print(operation(5, 3)); // Prints: 8
}
```

### 13. **Method Overriding**

- **Purpose:** To provide a specific implementation of a method in a derived class that overrides the one defined in the base class.

**Example:**

```dart
class Animal {
  void makeSound() {
    print('Some generic animal sound');
  }
}

class Dog extends Animal {
  @override
  void makeSound() {
    print('Bark');
  }
}

void main() {
  var dog = Dog();
  dog.makeSound(); // Prints: Bark
}
```

### 14. **Factory Constructors**

- **Purpose:** To provide a way to create instances of a class with custom logic.

**Example:**

```dart
class Circle {
  final double radius;
  Circle._(this.radius); // Private constructor

  factory Circle(double radius) {
    if (radius < 0) radius = 0; // Custom logic
    return Circle._(radius); // Calls the private constructor
  }
}

void main() {
  var circle = Circle(-5); // Uses the factory constructor
  print(circle.radius); // Prints: 0
}
```

### 15. **Getters and Setters**

- **Purpose:** To define custom behavior for accessing and modifying properties.

**Example:**

```dart
class Rectangle {
  double _width;
  double _height;

  Rectangle(this._width, this._height);

  double get area => _width * _height; // Getter

  set width(double value) {
    _width = value > 0 ? value : 0; // Setter with validation
  }

  set height(double value) {
    _height = value > 0 ? value : 0; // Setter with validation
  }
}

void main() {
  var rect = Rectangle(5, 10);
  print(rect.area); // Prints: 50

  rect.width = -3; // Uses the setter with validation
  print(rect.area); // Prints: 0 (because width was set to 0)
}
```

### 16. **Extension Methods**

- **Purpose:** To add new functionality to existing classes without modifying their source code.

**Example:**

```dart
extension StringRepeater on String {
  String repeat(int times) {
    return this * times; // Repeats the string 'times' number of times
  }
}

void main() {
  print('Hello'.repeat(3)); // Prints: HelloHelloHello
}
```

### 17. **Function Generators (Generators)**

- **Purpose:** To create iterators that generate sequences of values on demand.

**Example:**

```dart
Iterable<int> countUpTo(int max) sync* {
  for (int i = 1; i <= max; i++) {
    yield i; // Yields each value one by one
  }
}

void main() {
  for (var number in countUpTo(5)) {
    print(number); // Prints numbers from 1 to 5
  }
}
```

---

```dart
class Person {
  // Private variables
  String _name;
  int _age;

  // Constructor
  Person(this._name, this._age);

  // Getter for name
  String get name => _name;

  // Setter for name
  set name(String name) {
    if (name.isNotEmpty) {
      _name = name;
    }
  }

  // Getter for age
  int get age => _age;

  // Setter for age
  set age(int age) {
    if (age >= 0) {
      _age = age;
    }
  }

  // Method to print person's details
  void introduce() {
    print('Hi, I am $_name and I am $_age years old.');
  }
}

void main() {
  // Create a Person object
  var person = Person('Alice', 30);

  // Print the person's details
  person.introduce(); // Output: Hi, I am Alice and I am 30 years old.

  // Update name and age using setters
  person.name = 'Bob';
  person.age = 25;

  // Print the updated details
  person.introduce(); // Output: Hi, I am Bob and I am 25 years old.
}
```

### **Explanation**

1. **Class Definition**:

   - `Person` is the class with private variables `_name` and `_age`.

2. **Constructor**:

   - `Person(this._name, this._age);` initializes the private variables when a `Person` object is created.

3. **Getters**:

   - `String get name => _name;` returns the private variable `_name`.
   - `int get age => _age;` returns the private variable `_age`.

4. **Setters**:

   - `set name(String name) { ... }` allows you to set the private variable `_name` only if the new value is not empty.
   - `set age(int age) { ... }` allows you to set the private variable `_age` only if the new value is non-negative.

5. **Method**:

   - `void introduce() { ... }` prints a message using the name and age.

6. **Usage**:
   - In the `main` function, we create a `Person` object, use the `introduce` method to print details, update the name and age with setters, and print the updated details.

Certainly! Here’s a simplified overview of classes, constructors, private variables, getters, and setters in Dart, presented in a table format for easier understanding:

| **Concept**          | **Explanation**                                                               | **Example**                      |
| -------------------- | ----------------------------------------------------------------------------- | -------------------------------- |
| **Class**            | A blueprint for creating objects. It contains fields (variables) and methods. | `class Person { ... }`           |
| **Constructor**      | A special method used to initialize objects.                                  | `Person(this._name, this._age);` |
| **Private Variable** | Variables prefixed with `_` to restrict access from outside the class.        | `String _name;`                  |
| **Getter**           | A method to access the value of a private variable.                           | `String get name => _name;`      |
| **Setter**           | A method to set or modify the value of a private variable.                    | `set name(String name) { ... }`  |
| **Method**           | A function defined inside a class to perform operations.                      | `void introduce() { ... }`       |
