"use strict";
exports.__esModule = true;
exports.Rocket = void 0;
var Rocket = /** @class */ (function () {
    function Rocket(name, totalCapacityKg) {
        this.cargoItems = [];
        this.astronauts = [];
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }
    Rocket.prototype.sumMass = function (items) {
        var total = 0;
        for (var i = 0; i < items.length; i++) {
            total += items[i].massKg;
        }
        return total;
    };
    Rocket.prototype.currentMassKg = function () {
        var crew = this.sumMass(this.astronauts);
        var items = this.sumMass(this.cargoItems);
        var total = crew + items;
        return total;
    };
    Rocket.prototype.canAdd = function (item) {
        var currentWeight = this.currentMassKg() + item.massKg;
        if (currentWeight < this.totalCapacityKg) {
            return true;
        }
        return false;
    };
    Rocket.prototype.addCargo = function (cargo) {
        if (this.canAdd(cargo) === true) {
            this.cargoItems.push(cargo);
            return true;
        }
        return false;
    };
    Rocket.prototype.addAstronaut = function (astronaut) {
        if (this.canAdd(astronaut) === true) {
            this.astronauts.push(astronaut);
            return true;
        }
        return false;
    };
    return Rocket;
}());
exports.Rocket = Rocket;
