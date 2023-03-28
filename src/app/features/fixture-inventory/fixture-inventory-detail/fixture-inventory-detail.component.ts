import {Component, OnInit} from '@angular/core';
import {FixtureInventoryBusinessModel} from "../../../common/business-models/fixture-inventory.business-model";
import {FixtureInventoryService} from "../services/fixture-inventory.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-fixture-inventory-detail',
  templateUrl: './fixture-inventory-detail.component.html',
  styleUrls: ['./fixture-inventory-detail.component.scss']
})
export class FixtureInventoryDetailComponent implements OnInit {
  public fixtureInventory?: FixtureInventoryBusinessModel;
  public fixtureInventoryId!: string;

  constructor(
    private fixtureInventoryService: FixtureInventoryService,
    private activatedRoute: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
    this.fixtureInventoryId = this.activatedRoute.snapshot.params['id_etat-des-lieux']
    console.warn(this.fixtureInventoryId);
    this.getFixtureInventory();
  }

  private getFixtureInventory(): void {
    this.fixtureInventoryService.getFixtureInventory(this.fixtureInventoryId).subscribe({
      next: (fixtureInventory: FixtureInventoryBusinessModel) => {
        this.fixtureInventory = fixtureInventory;
      },
      error: () => {
        // TODO handle error
      }
    });
  }
}
