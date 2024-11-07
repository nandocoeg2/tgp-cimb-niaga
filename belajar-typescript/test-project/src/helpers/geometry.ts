namespace Geometry {
  export function shapes() {
    return {
      circle: "circle",
      rectangle: "rectangle",
      triangle: "triangle",
    };
  }

  export function calculateArea(shape: string, ...args: number[]): number {
    switch (shape) {
      case shapes().circle:
        return Math.PI * Math.pow(args[0], 2);
      case shapes().rectangle:
        return args[0] * args[1];
      case shapes().triangle:
        return (args[0] * args[1]) / 2;
      default:
        throw new Error("Invalid shape");
    }
  }
}

export default Geometry;
