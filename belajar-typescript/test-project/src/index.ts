import Geometry from "./helpers/geometry";
import { BaseResponse } from "./models/base_response";
import { Zodiac, Gender, Person } from "./models/person";

function main() {
  const person: Person = new Person();
  person.name = "Nando";
  person.age = 30;
  person.weight = 65;
  person.height = 165;
  person.zodiac = Zodiac.Gemini;
  person.gender = Gender.Male;
  person.isDating = false;
  person.isMarriage = false;
  console.log(person.calculateBMI());

  console.log(Geometry.calculateArea(Geometry.shapes().circle, 7));
  console.log(Geometry.calculateArea(Geometry.shapes().rectangle, 7, 5));
  console.log(Geometry.calculateArea(Geometry.shapes().triangle, 7, 5));

  const response: BaseResponse<Person> = new BaseResponse<Person>();
  response.status = 200;
  response.message = "Success";
  response.data = person;
  console.log(response);
}

main();
