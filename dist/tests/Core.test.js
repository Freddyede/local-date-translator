"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoreTest = void 0;
const Core_1 = require("../core/Core");
class CoreTest {
    constructor() { }
    testDateIsAnObject() {
        let core = new Core_1.Core();
        console.log(typeof core.date === "object");
    }
    testDateYearsIsGoodYear() {
        let core = new Core_1.Core();
        this.year = new Date().getFullYear();
        console.log(core.date.getFullYear() === this.year);
    }
}
exports.CoreTest = CoreTest;
//# sourceMappingURL=Core.test.js.map