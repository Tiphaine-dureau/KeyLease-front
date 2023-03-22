import {Component, OnInit} from '@angular/core';
import {LeaseContractService} from "../services/lease-contract.service";
import {LeaseContractBusinessModel} from "../../../common/business-models/lease-contract.business-model";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-lease-contracts-dashboard',
  templateUrl: './lease-contract-detail.component.html',
  styleUrls: ['./lease-contract-detail.component.scss']
})
export class LeaseContractDetailComponent implements OnInit {

  public leaseContractId!: string
  public leaseContract?: LeaseContractBusinessModel;

  constructor(
    private leaseContractService: LeaseContractService,
    private activatedRoute: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
    this.leaseContractId = this.activatedRoute.snapshot.params['id_contrat-location']
    this.getLeaseContract();
  }


  private getLeaseContract(): void {
    this.leaseContractService.getLeaseContract(this.leaseContractId).subscribe({
      next: (leaseContract: LeaseContractBusinessModel) => {
        this.leaseContract = leaseContract;
      },
      error: () => {
        // Todo handle error
      }
    });
  }


}
