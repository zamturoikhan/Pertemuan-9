class Mobil {

    constructor(type, color) {
        this.type = type
        this.color = color
        this.engineStatus = 'off'
    }

    engineStart() {
        this.engineStatus = 'on'
        console.log('engine start, mobilnya warna'+this.color+" typenya: "
        +this.type+" Status mesin : "+this.engineStatus)
    }

    engineStop() {
        this.engineStatus = 'off'
        console.log('engine start, mobilnya warna'+this.color+" typenya: "
        +this.type+" Status mesin : "+this.engineStatus)
    }
    static isEngineOn (mobil) {
        if (mobil.engineStatus === 'on') {
            console.log('Engine On')
    }   else {
        console.log('Engine Off')
    }
}
}

const m = new Mobil ('panther', 'hitam');

Mobil.isEngineOn(m);

class Car {
    constructor(color) {
        this.color = color;
    }
}

let a = new Car('merah')

console.log(a.color);

class Car2 { 
    constructor() {
        this.color = null
    }

get color () {
    return `Warna Mobilnya ${this._color}`
}

set color (color) {
    this._color = `$(color)keren`
}     
}


const car2 = new Car2()
car2.color = 'merah'
console.log(car2.color)