function randInt(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

class Action {

    constructor(description, output) {
        this.description = description;
        this.output = output;
    }

    doIt() {
        return new Promise(
            (resolve, reject) => {
                console.log("[INICIANDO]", this.description);
                this.startTime = new Date().getTime();
                setTimeout( () => {
                    let duration = new Date().getTime() - this.startTime;
                    console.log(`[TERMINADO] [${duration}ms] ${this.description}`);
                    resolve(this.output);
                }, randInt(500, 2000)
            )
        });
    }
}


module.exports = {
    // Bebida
    prepararBebida: function() {
        return new Action("Preparar bebida", "Bebida").doIt();
    },

    // Papas
    freirPapas: function() {
        return new Action("Freir Papas", "Papas fritas").doIt();
    },
    empaquetarPapas: function() {
        return new Action("Empaquetar Papas", "empaquetadas").doIt();
    },
    salarPapas: function() {
        return new Action("Salar Papas", "con sal").doIt();
    },

    // Hamburguesa
    tostarPanA: function() {
        return new Action("Tostar Pan A", "Pan A").doIt();
    },
    tostarPanB: function() {
        return new Action("Tostar Pan B", "Pan B").doIt();
    },
    cocinarCarneLadoA: function() {
        return new Action("Cocinar carne de un lado", "Carne semicocida").doIt();
    },
    cocinarCarneLadoB: function() {
        return new Action("Cocinar carne del otro lado", "Carne cocida").doIt();
    },
}