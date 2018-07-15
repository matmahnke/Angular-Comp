import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileMercadoComponent } from './profile-mercado.component';

describe('ProfileMercadoComponent', () => {
  let component: ProfileMercadoComponent;
  let fixture: ComponentFixture<ProfileMercadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileMercadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileMercadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
