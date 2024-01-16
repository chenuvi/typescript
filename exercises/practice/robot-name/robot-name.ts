export class Robot {
  private identity: string;
  public static identities = new Set<string>();
  constructor() {
    this.identity = this.generateName();
  }

  public generateName(): string {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const getRandom = (num: number): number => {
      return Math.floor(Math.random() * num);
    };
    const name =
      letters[getRandom(26)] +
      letters[getRandom(26)] +
      numbers[getRandom(10)] +
      numbers[getRandom(10)] +
      numbers[getRandom(10)];
    if (Robot.identities.has(name)) {
      return this.generateName();
    }
    Robot.identities.add(name);
    return name;
  }

  public get name(): string {
    return this.identity;
  }

  public resetName(): void {
    this.identity = this.generateName();
  }

  public static releaseNames(): void {
    this.identities = new Set<string>();
  }
}
