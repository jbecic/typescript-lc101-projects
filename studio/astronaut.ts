import { Payload } from "./Payload";

export class Astronaut implements Payload{
    massKg: number;
    name: string;
    constructor(name: string, massKg: number) {
        this.name = name;
        this.massKg = massKg;
    }
}