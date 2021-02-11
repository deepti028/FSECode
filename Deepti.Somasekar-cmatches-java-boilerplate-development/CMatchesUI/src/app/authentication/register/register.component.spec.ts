import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AppModule } from '../../app.module';
import { HttpClient } from '@angular/common/http';
import { APP_BASE_HREF } from '@angular/common';
import { componentRefresh } from '@angular/core/src/render3/instructions';
import { FormGroup, FormControlName, Validators, FormControl } from '@angular/forms';
import { of } from 'rxjs';
import { RegisterComponent } from './register.component';
import { AuthenticationService } from "../authentication.service";

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;
  let http: HttpClient;
  let service: AuthenticationService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports : [RouterTestingModule, HttpClientTestingModule, AppModule],
      providers: [{provide: APP_BASE_HREF, useValue: '/'}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    http = TestBed.get(HttpClient);
    service = TestBed.get(AuthenticationService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('register', () => {
    const token = {
      userName: "sample",
      password: "sample12",
      email: "sample@gmail.com"
    }
    spyOn(service, 'registerUser').and.returnValue(of(token));
    component.register();
    expect(service.registerUser).toHaveBeenCalled();
  });
});
