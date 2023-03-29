import {Component} from '@angular/core';
import {FixtureInventoryService} from "../services/fixture-inventory.service";
import {ActivatedRoute, Router} from "@angular/router";
import {PostFixtureInventoryModel} from "../services/post-fixture-inventory.model";

@Component({
  selector: 'app-create-fixture-inventory',
  templateUrl: './create-fixture-inventory.component.html',
  styleUrls: ['./create-fixture-inventory.component.scss']
})
export class CreateFixtureInventoryComponent {
  public isLoading = false;

  constructor(
    private fixtureInventoryService: FixtureInventoryService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {
  }

  public onSubmit(model: PostFixtureInventoryModel): void {
    this.isLoading = true;
    this.fixtureInventoryService.addFixtureInventory(model).subscribe({
      next: () => {
        this.isLoading = false;
        this.router.navigateByUrl(('/biens/' + this.activatedRoute.snapshot.params['id_bien']))
      }, error: () => {
        // TODO HANDLE ERROR
      }
    })
  }
}
