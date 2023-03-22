import {Component, OnInit} from '@angular/core';
import {map, Observable} from "rxjs";
import {StepperOrientation} from "@angular/material/stepper";
import {BreakpointObserver} from "@angular/cdk/layout";
import {OwnerService} from "../services/owner.service";
import {OwnerBusinessModel} from "../../../common/business-models/owner.business-model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-owner',
  templateUrl: './create-owner.component.html',
  styleUrls: ['./create-owner.component.scss']
})
export class CreateOwnerComponent implements OnInit {
  public isLoading = false;
  stepperOrientation: Observable<StepperOrientation>;

  constructor(
    private ownerService: OwnerService,
    private router: Router,
    breakpointObserver: BreakpointObserver,
  ) {
    this.stepperOrientation = breakpointObserver
      .observe('(min-width: 800px)')
      .pipe(map(({matches}) => (matches ? 'horizontal' : 'vertical')));
  }

  ngOnInit(): void {

  }

  public onSubmit($event: OwnerBusinessModel): void {
    this.isLoading = true;
    this.ownerService.postOwner($event).subscribe({
      next: () => {
        this.isLoading = false;
        this.router.navigateByUrl('/proprietaires');
      },
      error: () => {
        // TODO handle error
      }
    });
  }
}
