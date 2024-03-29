import {Component, OnInit} from '@angular/core';
import {FixtureInventoryBusinessModel} from "../../../common/business-models/fixture-inventory.business-model";
import {ActivatedRoute, Router} from "@angular/router";
import {FixtureInventoryService} from "../services/fixture-inventory.service";
import {PostFixtureInventoryModel} from "../services/post-fixture-inventory.model";

@Component({
  selector: 'app-update-fixture-inventory',
  templateUrl: './update-fixture-inventory.component.html',
})
export class UpdateFixtureInventoryComponent implements OnInit {
  private fixtureInventoryId!: string;
  public fixtureInventory?: FixtureInventoryBusinessModel;
  public isLoading = false;
  public backRoute?: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private fixtureInventoryService: FixtureInventoryService,
  ) {
  }

  ngOnInit(): void {
    this.isLoading = true;
    this.fixtureInventoryId = this.activatedRoute.snapshot.params['id_etat-des-lieux'];
    this.backRoute = `/etats-des-lieux/${this.fixtureInventoryId}`;
    this.fixtureInventoryService.getFixtureInventory(this.fixtureInventoryId).subscribe({
      next: (fixtureBusinessModel: FixtureInventoryBusinessModel) => {
        this.isLoading = false;
        this.fixtureInventory = fixtureBusinessModel;
      }, error: () => {
        // TODO HANDLE ERROR
      }
    })
  }

  public onSubmit($event: PostFixtureInventoryModel): void {
    this.isLoading = true;
    this.fixtureInventoryService.updateFixtureInventory(this.fixtureInventoryId, $event).subscribe({
      next: () => {
        this.isLoading = false;
        this.router.navigateByUrl('/etats-des-lieux/' + this.fixtureInventoryId)
      }, error: () => {
        // TODO HANDLE ERROR
      }
    })
  }
}
