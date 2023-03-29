import {PropertyBusinessModel} from "./property.business-model";

export interface FixtureInventoryBusinessModel {
  id: string;
  arrivalFixtureInventoryDate: Date,
  exitFixtureInventoryDate: Date,
  arrivalComments: string,
  exitComments: string,
  property: PropertyBusinessModel;
}
