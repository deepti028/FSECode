import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AppModule } from '../../app.module';
import { HttpClient } from '@angular/common/http';
import { APP_BASE_HREF } from '@angular/common';
import { componentRefresh } from '@angular/core/src/render3/instructions';
import { FormGroup, FormControlName, Validators, FormControl } from '@angular/forms';
import { of } from 'rxjs';
import { SquadComponent } from './squad.component';

describe('SquadComponent', () => {
  let component: SquadComponent;
  let fixture: ComponentFixture<SquadComponent>;
  let http: HttpClient;
  // let service: AuthenticationService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports : [RouterTestingModule, HttpClientTestingModule, AppModule],
      providers: [{provide: APP_BASE_HREF, useValue: '/'}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SquadComponent);
    component = fixture.componentInstance;
    http = TestBed.get(HttpClient);
    // service = TestBed.get(AuthenticationService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
