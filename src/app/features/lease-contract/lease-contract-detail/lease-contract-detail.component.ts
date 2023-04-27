import {Component, OnInit} from '@angular/core';
import {LeaseContractService} from "../services/lease-contract.service";
import {LeaseContractBusinessModel} from "../../../common/business-models/lease-contract.business-model";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-lease-contracts-dashboard',
  templateUrl: './lease-contract-detail.component.html'
})
export class LeaseContractDetailComponent implements OnInit {
  public leaseContractId!: string
  public leaseContract?: LeaseContractBusinessModel;
  public isLoading = false;
  public backRoute?: string;

  constructor(
    private router: Router,
    private leaseContractService: LeaseContractService,
    private activatedRoute: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
    this.leaseContractId = this.activatedRoute.snapshot.params['id_contrat-location']
    this.getLeaseContract();
  }


  private getLeaseContract(): void {
    this.isLoading = true;
    this.leaseContractService.getLeaseContract(this.leaseContractId).subscribe({
      next: (leaseContract: LeaseContractBusinessModel) => {
        this.isLoading = false;
        this.leaseContract = leaseContract;
        this.backRoute = `/biens/${leaseContract.property.id}`
      },
      error: () => {
        // Todo handle error
      }
    });
  }

  public modify(): void {
    this.router.navigate(['/contrats-location/' + this.leaseContractId + '/modification'])
  }

  public delete(): void {
    this.isLoading = true;
    this.leaseContractService.deleteLeaseContract(this.leaseContractId).subscribe({
      next: () => {
        this.isLoading = false;
        this.router.navigate(['/biens/' + this.leaseContract?.property.id]);
      },
      error: () => {
        // TODO handle error
      }
    })
  }

}
