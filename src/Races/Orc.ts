import Race from './Race';

export default class Orcs extends Race {
  protected static _createdRacesInstances = 0;
  protected readonly _maxLifePoints: number; // readonly cannot be changed, protected can only be accessible inside class or extented. and private only inside the class 
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 74;
  }

  static createdRacesInstances(): number {
    this._createdRacesInstances += 1;
    return this._createdRacesInstances;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}