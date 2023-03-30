import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Ranger extends Archetype {
  readonly _energyType: EnergyType;
  protected static _createdArchetypeInstances = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'stamina';
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    this._createdArchetypeInstances += 1;
    return this._createdArchetypeInstances;
  }
}
