export class Core {
    date: Date;
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