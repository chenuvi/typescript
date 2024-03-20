export class Matrix {
  private input: string;
  constructor(input: string) {
    this.input = input;
  }

  get rows(): number[][] {
    return this.input
      .split("\n")
      .map((x) => x.split(" "))
      .map((x) => x.map((x) => Number(x)));
  }

  get columns(): number[][] {
    let matrix = this.rows;
    let columns: number[][] = [];
    for (let i = 0; i < matrix.length; i++) {
      columns[i] = matrix.map((x) => x[i]);
    }
    return columns;
  }
}
