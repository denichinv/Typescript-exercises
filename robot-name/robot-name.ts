export class Robot {
  private static usedNames: Set<string> = new Set();
  private _name: string;

  constructor() {
    this._name = this.generateUniqueName();
  }

  public get name(): string {
    return this._name;
  }

  public resetName(): void {
    Robot.usedNames.delete(this._name);
    this._name = this.generateUniqueName(); 
  }

  public static releaseNames(): void {
    Robot.usedNames.clear(); 
  }

  private generateUniqueName(): string {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const digits = '0123456789';

    const randomChar = (str: string) =>
      str[Math.floor(Math.random() * str.length)];

    let name: string;
    let attemptCount = 0;
    const MAX_ATTEMPTS = 10000;

    do {
      name =
        randomChar(letters) +
        randomChar(letters) +
        randomChar(digits) +
        randomChar(digits) +
        randomChar(digits);

      attemptCount++;
      if (attemptCount > MAX_ATTEMPTS) {
        throw new Error('Unable to generate a unique robot name.');
      }
    } while (Robot.usedNames.has(name));

    Robot.usedNames.add(name);
    return name;
  }
}

