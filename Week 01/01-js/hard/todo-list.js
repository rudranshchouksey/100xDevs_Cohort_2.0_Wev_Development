/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/
class Todo {
  constructor() {
      this.todos = [];
  }

  // Add a new todo to the list
  add(todo) {
      this.todos.push(todo);
      return this; // Allows method chaining
  }

  // Remove a todo by index
  remove(indexOfTodo) {
      if (indexOfTodo >= 0 && indexOfTodo < this.todos.length) {
          this.todos.splice(indexOfTodo, 1);
      } else {
          throw new Error("Invalid index");
      }
      return this;
  }

  // Update a todo at a specific index
  update(index, updatedTodo) {
      if (index >= 0 && index < this.todos.length) {
          this.todos[index] = updatedTodo;
      } else {
          throw new Error("Invalid index");
      }
      return this;
  }

  // Get all todos
  getAll() {
      return this.todos;
  }

  // Get a todo by its index
  get(indexOfTodo) {
      if (indexOfTodo >= 0 && indexOfTodo < this.todos.length) {
          return this.todos[indexOfTodo];
      } else {
          throw new Error("Invalid index");
      }
  }

  // Clear all todos
  clear() {
      this.todos = [];
      return this;
  }
}

module.exports = Todo;

const myTodos = new Todo();

myTodos.add("Buy milk").add("Clean the house");
console.log(myTodos.getAll()); // Output: ["Buy milk", "Clean the house"]

myTodos.update(1, "Clean the garden");
console.log(myTodos.get(1)); // Output: "Clean the garden"

myTodos.remove(0);
console.log(myTodos.getAll()); // Output: ["Clean the garden"]

myTodos.clear();
console.log(myTodos.getAll()); // Output: []