import {Component, OnInit} from '@angular/core';
import {FixtureInventoryBusinessModel} from "../../../common/business-models/fixture-inventory.business-model";
import {FixtureInventoryService} from "../services/fixture-inventory.service";
import {ActivatedRoute, Router} from "@angular/router";

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
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    this.fixtureInventoryId = this.activatedRoute.snapshot.params['id_etat-des-lieux']
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

  public goToModification() {
    this.router.navigate(['/etats-des-lieux/' + this.fixtureInventoryId + '/modification'])
  }

  public delete() {
    this.fixtureInventoryService.delete(this.fixtureInventoryId).subscribe({
      next: () => {
        this.router.navigate(['/biens/' + this.fixtureInventory?.property.id])
      }, error: () => {
        // TODO HANDLE ERROR
      }
    })
  }
}
