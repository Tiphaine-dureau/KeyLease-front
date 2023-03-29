import {Component, Input, OnInit} from '@angular/core';
import {PropertyBusinessModel} from "../../business-models/property.business-model";
import {PropertyService} from "../../../features/property/services/property.service";
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.scss']
})
export class PropertyCardComponent implements OnInit {
  @Input() title!: string;
  @Input() subtitle!: string;
  @Input() propertyId!: string;
  public property$?: Observable<PropertyBusinessModel> | null;

  constructor(
    private activatedRoute: ActivatedRoute,
    private propertyService: PropertyService,
  ) {
  }

  ngOnInit(): void {
    this.property$ = this.propertyService.getProperty(this.propertyId);
  }
}
