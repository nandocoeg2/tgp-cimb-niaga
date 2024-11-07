export enum Zodiac {
  Aries = "Aries",
  Taurus = "Taurus",
  Gemini = "Gemini",
  Cancer = "Cancer",
  Leo = "Leo",
  Virgo = "Virgo",
  Libra = "Libra",
  Scorpio = "Scorpio",
  Sagittarius = "Sagittarius",
  Capricorn = "Capricorn",
  Aquarius = "Aquarius",
  Pisces = "Pisces",
}

export enum Gender {
  Male,
  Female,
}

export class Person {
  name: string = "";
  age: number = 0;
  weight: number = 0;
  height: number = 0;
  gender?: Gender;
  zodiac?: Zodiac;
  isMarriage: boolean = false;
  isDating: boolean = false;

  calculateBMI(): number {
    return (this.weight / (this.height * this.height)) * 10_000;
  }
}
