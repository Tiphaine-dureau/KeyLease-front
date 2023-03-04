import {Component, OnInit} from '@angular/core';
import {Logout} from "../../auth/logout";
import {Actions, ofActionDispatched, Store} from "@ngxs/store";
import {Router} from "@angular/router";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  constructor(
    private store: Store,
    private actions: Actions,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.actions.pipe(ofActionDispatched(Logout)).subscribe(() => {
      this.router.navigateByUrl('/login');
    })
  }

  public logout(): void {
    this.store.dispatch(Logout);
  }


}
