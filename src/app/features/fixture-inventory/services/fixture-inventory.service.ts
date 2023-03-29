import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {FixtureInventoryBusinessModel} from "../../../common/business-models/fixture-inventory.business-model";
import {environment} from "../../../../environments/environment";
import {PostFixtureInventoryModel} from "./post-fixture-inventory.model";

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

  public addFixtureInventory(model: PostFixtureInventoryModel): Observable<FixtureInventoryBusinessModel> {
    return this.http.post<FixtureInventoryBusinessModel>(`${environment.apiUrl}/fixtures-inventory`, model);
  }

  public updateFixtureInventory(fixtureInventoryId: string, model: PostFixtureInventoryModel): Observable<FixtureInventoryBusinessModel> {
    return this.http.put<FixtureInventoryBusinessModel>(`${environment.apiUrl}/fixtures-inventory/${fixtureInventoryId}`, model);
  }

  public delete(fixtureInventoryId: string): Observable<void> {
    return this.http.delete<void>(`${environment.apiUrl}/fixtures-inventory/${fixtureInventoryId}`);
  }
}
