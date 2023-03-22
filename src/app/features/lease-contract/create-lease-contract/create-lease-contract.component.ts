import {Component} from '@angular/core';
import {LeaseContractService} from "../services/lease-contract.service";
import {ActivatedRoute, Router} from "@angular/router";
import {PostLeaseContractModel} from "../services/post-lease-contract.model";

@Component({
  selector: 'app-create-lease-contract',
  templateUrl: './create-lease-contract.component.html',
  styleUrls: ['./create-lease-contract.component.scss']
})
export class CreateLeaseContractComponent {
  public isLoading = false;

  constructor(
    private leaseContractService: LeaseContractService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {
  }

  public onSubmit(model: PostLeaseContractModel): void {
    this.isLoading = true;
    this.leaseContractService.postLeaseContract(model).subscribe({
      next: () => {
        this.isLoading = false;
        this.router.navigateByUrl('/biens/' + this.activatedRoute.snapshot.params['id_bien'])
      }, error: () => {
        // TODO handle error
      }
    })
  }
}
