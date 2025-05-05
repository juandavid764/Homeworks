import { Graph } from "../models/Graph";
import { City } from "../models/City";
import { Person } from "../models/Person";

export const graph = new Graph();

// Sample data
const cities = [
  new City("Madrid"),
  new City("Barcelona"),
  new City("Valencia"),
  new City("Sevilla"),
  new City("Bilbao"),
];
  
const people = [
  new Person("Alice", 30),
  new Person("Bob", 25),
  new Person("Charlie", 35),
  new Person("David", 28),
  new Person("Eva", 22),
  new Person("Frank", 40),
  new Person("Grace", 29),
  new Person("Hannah", 31),
  new Person("Ian", 27),
  new Person("Jack", 33),
  new Person("Kathy", 26),
  new Person("Liam", 24),
  new Person("Mia", 32),
  new Person("Noah", 21),
  new Person("Olivia", 36),
];

// Add cities to the graph
for (const city of cities) {
  graph.addNode(city.name);
}

// Add people to the graph
for (const person of people) {
  graph.addNode(person.name);
}

// Add edges between cities and people
// One person live in one city
for (const person of people) {
  const randomCity = cities[Math.floor(Math.random() * cities.length)];
  graph.addEdge(person.name, randomCity.name);
}

