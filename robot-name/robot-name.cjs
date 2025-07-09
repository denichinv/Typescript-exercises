"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Robot = void 0;
var Robot = /** @class */ (function () {
    function Robot(robotName) {
        if (robotName === void 0) { robotName = ''; }
        robotName = this.name;
    }
    Object.defineProperty(Robot.prototype, "name", {
        get: function () {
            var randomFunc = function (string) {
                return string[Math.floor(Math.random() * string.length)];
            };
            var letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
            var digits = '0123456789';
            var robotName = "".concat(randomFunc(letters)).concat(randomFunc(letters)).concat(randomFunc(digits)).concat(randomFunc(digits)).concat(randomFunc(digits));
            return robotName;
        },
        enumerable: false,
        configurable: true
    });
    Robot.prototype.resetName = function (oldName) {
        oldName = this.name;
    };
    Robot.releaseNames = function () {
    };
    return Robot;
}());
exports.Robot = Robot;
var robot1 = new Robot();
console.log(robot1.name); // Example output: "AB123"
