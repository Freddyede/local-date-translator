import { Core } from "../core/Core";

export class CoreTest {
    year: number;
    constructor() { }
    testDateIsAnObject() {
        let core: Core = new Core();
        console.log(typeof core.date === "object");
    }
    
    testDateYearsIsGoodYear() {
        let core = new Core();
        this.year = new Date().getFullYear();
        console.log(core.date.getFullYear() === this.year);
    }
}