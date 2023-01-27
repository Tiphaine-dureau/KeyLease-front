import {Component, OnDestroy} from '@angular/core';
import {LoginService} from "./features/login/services/login.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
  title = 'key-lease-front';

  constructor(private loginService: LoginService) {
  }

  public ngOnDestroy(): void {
    this.loginService.removeSession();
  }

}
