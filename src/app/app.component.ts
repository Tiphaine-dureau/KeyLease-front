import {Component, OnDestroy} from '@angular/core';
import {LoginFormService} from "./features/login/services/login-form.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {

  constructor(private loginService: LoginFormService) {
  }

  public ngOnDestroy(): void {
    this.loginService.removeSession();
  }
}
