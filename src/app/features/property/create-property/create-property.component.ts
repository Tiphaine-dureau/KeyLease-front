import {Component, OnInit} from '@angular/core';
import {map, Observable} from "rxjs";
import {StepperOrientation} from "@angular/material/stepper";
import {FormBuilder} from "@angular/forms";
import {Router} from "@angular/router";
import {BreakpointObserver} from "@angular/cdk/layout";
import {PropertyService} from "../services/property.service";
import {PropertyBusinessModel} from "../../../common/business-models/property.business-model";

@Component({
  selector: 'app-create-property',
  templateUrl: './create-property.component.html',
  styleUrls: ['./create-property.component.scss']
})
export class CreatePropertyComponent implements OnInit {
  public isLoading = false;
  stepperOrientation: Observable<StepperOrientation>;

  constructor(
    private _formBuilder: FormBuilder,
    private propertyService: PropertyService,
    private router: Router,
    breakpointObserver: BreakpointObserver,
  ) {
    this.stepperOrientation = breakpointObserver
      .observe('(min-width: 800px)')
      .pipe(map(({matches}) => (matches ? 'horizontal' : 'vertical')));
  }

  ngOnInit(): void {
  }

  public onSubmit($event: PropertyBusinessModel): void {
    this.isLoading = true;
    this.propertyService.postProperty($event).subscribe({
      next: () => {
        this.isLoading = false;
        this.router.navigateByUrl('/biens')
      },
      error: () => {
        // TODO handle error
      }
    });
  }


}
