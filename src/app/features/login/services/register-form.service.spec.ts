import {TestBed} from '@angular/core/testing';

import {RegisterFormService} from './register-form.service';
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {RegisterFormModel} from "../register-form/register-form.model";
import {LoginBusinessModel} from "../login-form/login-business.model";
import {environment} from "../../../../environments/environment";

describe('RegisterFormService', () => {
  let service: RegisterFormService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [RegisterFormService]
    });
    service = TestBed.inject(RegisterFormService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  })

  it('should created a user', () => {
    const user: RegisterFormModel = {
      firstName: 'John',
      lastName: 'Doe',
      email: 'johndoe@example.com',
      password: 'password123'
    };

    service.postRegister(user).subscribe((data: LoginBusinessModel) => {
      expect(data.token).toEqual('abc123');
    });
    const req = httpMock.expectOne(`${environment.apiUrl}/register`);
    expect(req.request.method).toBe('POST');
    req.flush({token: 'abc123'});
  });
});
