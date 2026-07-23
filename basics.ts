export {};
let name: string = "Noman";
let age: number = 25;
let isOn: boolean = true;
let skills: string[] = ["A", "B"];
let scores: number[] = [1, 2, 4];
let user: { name: string; age: number } = { name: "Noman", age: 35 };

let isLoggedIn: boolean = false;
let id: number = 22;
let tags: string[] = ["a", "b"];
console.log(id);
let coords: [number, number] = [10, 20]; // tuple - fixed length/order

let a: any = "Hello";
a.toUpperCase(); // ✅ Allowed (unsafe)

// unkown ==>	safer version of any, forces you to check first
let b: unknown = "Hello";
// b.toUpperCase(); // ❌ Error (must check first)

function calculateArea(w: number, h: number): number {
 return w * h;
}
function CalculateArea(w: number, h?: number): number {
 return w * (h ?? w);
}
//Type Alias --a nickname for a shape
// Type Aliases allow defining types with a custom name (an Alias).
// Type Aliases can be used for primitives like string or more complex types such as objects and arrays:
type Car = {
 brand: string;
 model: string;
 year: number;
 isElectric: boolean;
};

function printCarInfo(car: Car): string {
 return `${car.year} ${car.brand} ${car.model}`;
}
console.log(
 printCarInfo({
  brand: "Tesla",
  model: "Model 3",
  year: 2022,
  isElectric: true,
 }),
);
//Interfaces are similar to type aliases, except they only apply to object types.
interface Car2 {
 brand: string;
 model: string;
 year: number;
 isElectric: boolean;
}
interface electricCar extends Car2 {
 batteryRange: number;
}
//Both can be extended, but interfaces support declaration merging
function printElectricCarInfo(car: electricCar): string {
 return `${car.year}${car.brand}${car.model}-${car.batteryRange}mi range`;
}
// Use Interface for:React props, object/class shapes
console.log(
 printElectricCarInfo({
  brand: "Honda",
  model: "Model 3",
  year: 2023,
  isElectric: true,
  batteryRange: 350,
 }),
);
// Use type for: 	functions, unions, primitives and intersections
type PaymentMethod = "card" | "cash" | "paypal";
type User = {
 name: string;
};
// Intersection =="this AND that" combined
type Admin = User & { role: string };
function processPayment(method: PaymentMethod): string {
 return `"Processing payment via "${method}`;
}
console.log(processPayment("card"));

interface UserData {
 id: string;
 username: string;
 email: string;
 isActive: boolean;
 phoneNumber: null;
 role: UserRole;
}
//enum ==	named set of constants
enum UserRole {
 Admin = "admin",
}
let data: UserData = {
 id: "usr_98231",
 username: "dev_jay",
 email: "jay@example.com",
 role: UserRole.Admin,
 isActive: true,
 phoneNumber: null,
};

let headphones: HeadphonesData = {
 id: 104,
 title: "Wireless Noise-Canceling Headphones",
 price: 199.99,
 tags: ["electronics", "audio", "wireless"],
 dimensions: {
  width: 18.5,
  height: 20.0,
  depth: 8.0,
 },
 rating: {
  score: 4.7,
  count: 128,
 },
 status: "in_stock",
};

type HeadphonesData = {
 id: number;
 title: string;
 price: number;
 tags: [string, string, string];
 dimensions: {
  width: number;
  height: number;
  depth: number;
 };
 rating: {
  score: number;
  count: number;
 };
 status: string;
};
type Cat = { kind: "cat"; meow: () => void };
type Dog = { kind: "dog"; bark: () => void };
type Pet = Cat | Dog;
//Type inference ==>	TS guesses the type without you writing one
let x = 5;
function describePet(pet: Pet): string {
 if (pet.kind === "cat") {
  return "Meow!";
 } else {
  return "Woof!";
 }
}
console.log(
 console.log(
  describePet({ kind: "dog", bark: () => console.log("bark sound") }),
 ),
);
//Generics= 	Reusable code that works across types, keeping type info
function wrapInArray<T>(item: T): T[] {
 return [item];
}
console.log(wrapInArray(5));
console.log(wrapInArray("hi"));

interface Task {
 id: number;
 title: string;
 completed: boolean;
}
interface ApiResponse<T> {
 data: T;
 success: boolean;
 message: string;
}
let taskResponse: ApiResponse<Task> = {
 data: { id: 2343, title: "Title", completed: true },
 success: true,
 message: "Task Fetched",
};
//Array methods
interface Task {
 id: number;
 title: string;
 completed: boolean;
}

const tasks: Task[] = [
 { id: 1, title: "Learn TS", completed: true },
 { id: 2, title: "Build TaskFlow", completed: false },
 { id: 3, title: "Apply to jobs", completed: true },
];

function getCompletedTasks(tasks: Task[]): Task[] {
 return tasks.filter((task) => {
  return task.completed;
 });
}
console.log(getCompletedTasks(tasks));

function countCompletedTasks(tasks: Task[]): number {
 return tasks.reduce((accumulator, task) => {
  if (task.completed) {
   return accumulator + 1;
  }
  return accumulator;
 }, 0);
}
console.log(countCompletedTasks(tasks));
//Type assertion ==>	"trust me, I know the type"
const el = document.getElementById("x") as HTMLInputElement;
// Type assertion (as) = Tell TypeScript to treat a value as a specific type. It only affects compile-time, not runtime.

function generic<T>(arr: T[]): T | undefined {
 return arr.pop();
}
console.log(generic([1, 2, 3, 4]));
