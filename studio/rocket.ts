import { Payload } from "./Payload";
import { Astronaut } from "./astronaut";
import { Cargo } from "./cargo";

export class Rocket {
    name: string;
    totalCapacityKg: number;
    cargoItems: Cargo[] = [];
    astronauts: Astronaut[] = [];
    constructor(name: string, totalCapacityKg: number) {
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }
    sumMass(items: Payload[]): number {
        let total: number = 0;
        for (let i = 0; i < items.length; i++) {
            total += items[i].massKg
        }
        return total;
    }
    currentMassKg(): number {
        const crew: number = this.sumMass(this.astronauts);
        const items: number = this.sumMass(this.cargoItems);
        const total: number = crew + items;
        return total;
    }
    canAdd(item: Payload): boolean {
        const currentWeight: number = this.currentMassKg() + item.massKg;
        if (currentWeight < this.totalCapacityKg) {
            return true;
        }
        return false;
    }
    addCargo(cargo: Cargo): boolean {
        if (this.canAdd(cargo) === true) {
            this.cargoItems.push(cargo);
            return true
        }
        return false;
    }
    addAstronaut(astronaut: Astronaut): boolean {
        if (this.canAdd(astronaut) === true) {
            this.astronauts.push(astronaut);
            return true;
        }
        return false;
    }
}