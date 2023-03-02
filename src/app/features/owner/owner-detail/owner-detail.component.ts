import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {OwnerService} from "../services/owner.service";

@Component({
  selector: 'app-owner-details',
  templateUrl: './owner-detail.component.html',
  styleUrls: ['./owner-detail.component.scss']
})
export class OwnerDetailComponent implements OnInit {
  public ownerId!: string;
  public isLoading = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private ownerService: OwnerService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.ownerId = this.activatedRoute.snapshot.params['id_owner']
  }

  public deleteOwner(): void {
    this.isLoading = true;
    this.ownerService.deleteOwner(this.ownerId).subscribe({
      next: () => {
        this.isLoading = false;
        this.router.navigate(["/proprietaires"]);
      },
      error: () => {
        // TODO add Toast
      }
    })
  }
}
