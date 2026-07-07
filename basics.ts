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
