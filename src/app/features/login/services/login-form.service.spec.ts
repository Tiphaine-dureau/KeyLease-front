import {TestBed} from '@angular/core/testing';

import {LoginFormService} from './login-form.service';
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {LoginFormModel} from "../login-form/login-form.model";
import {LoginBusinessModel} from "../login-form/login-business.model";
import {environment} from "../../../../environments/environment";

describe('LoginFormService', () => {
  let service: LoginFormService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [LoginFormService]
    });
    service = TestBed.inject(LoginFormService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  })

  it('should connected a user', () => {
    const user: LoginFormModel = {
      email: 'keylease@example.com',
      password: 'azerty123'
    };

    service.postLogin(user).subscribe((data: LoginBusinessModel) => {
      expect(data.token).toEqual('qsd123');
    })
    const req = httpMock.expectOne(`${environment.apiUrl}/login`);
    expect(req.request.method).toBe('POST');
    req.flush({token: 'qsd123'});
  });
});
