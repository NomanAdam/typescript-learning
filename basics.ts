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
function calculateArea(w: number, h: number): number {
 return w * h;
}
function CalculateArea(w: number, h?: number): number {
 return w * (h ?? w);
}

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

interface Car2 {
 brand: string;
 model: string;
 year: number;
 isElectric: boolean;
}
interface electricCar extends Car2 {
 batteryRange: number;
}
function printElectricCarInfo(car: electricCar): string {
 return `${car.year}${car.brand}${car.model}-${car.batteryRange}mi range`;
}
console.log(
 printElectricCarInfo({
  brand: "Honda",
  model: "Model 3",
  year: 2023,
  isElectric: true,
  batteryRange: 350,
 }),
);

type PaymentMethod = "card" | "cash" | "paypal";

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
