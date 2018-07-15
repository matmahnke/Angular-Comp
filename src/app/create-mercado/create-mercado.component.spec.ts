import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMercadoComponent } from './create-mercado.component';

describe('CreateMercadoComponent', () => {
  let component: CreateMercadoComponent;
  let fixture: ComponentFixture<CreateMercadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateMercadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateMercadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
