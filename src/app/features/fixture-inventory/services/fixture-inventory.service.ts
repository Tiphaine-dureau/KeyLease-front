import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {FixtureInventoryBusinessModel} from "../../../common/business-models/fixture-inventory.business-model";
import {environment} from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class FixtureInventoryService {

  constructor(
    private http: HttpClient
  ) {
  }

  public getFixtureInventory(fixtureInventoryId: string): Observable<FixtureInventoryBusinessModel> {
    return this.http.get<FixtureInventoryBusinessModel>(`${environment.apiUrl}/fixtures-inventory/${fixtureInventoryId}`);
  }
}
