var SchoolType;
(function (SchoolType) {
    SchoolType["Primary"] = "Primary";
    SchoolType["Secondary"] = "Secondary";
    SchoolType["College"] = "College";
})(SchoolType || (SchoolType = {}));
function isValidSchoolType(type) {
    return Object.values(SchoolType).includes(type);
}
function validateSchoolType(type) {
    if (!isValidSchoolType(type)) {
        throw new Error("Invalid school type ".concat(type, ". Valid types are ").concat(Object.values(SchoolType).join(", ")));
    }
    return type;
}
var Car = /** @class */ (function () {
    function Car(brand, model) {
        this.brand = brand;
        this.model = model || "Unknown";
    }
    return Car;
}());
var car = new Car("Toyota");
car.brand = "Honda";
function main(args) {
    console.log("Hello, world!");
    var user = {
        name: "Alice",
        age: 30,
        hobbies: ["reading", "cooking"],
    };
    console.log(user);
    var school = {
        name: "ABC School",
        type: SchoolType.Primary,
        location: "XYZ City",
    };
    console.log(school);
    console.log(car);
}
main();
