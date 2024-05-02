"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Core = void 0;
class Core {
    constructor() {
        this.initialized();
    }
    /**
     * Initialized local-date-translator core systems
     * @author Patouillard Franck
     * @version 0.0.1
     */
    initialized() {
        this.date = new Date();
    }
}
exports.Core = Core;
//# sourceMappingURL=Core.js.map