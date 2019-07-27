import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JoivalidationsComponent } from './joivalidations.component';

describe('JoivalidationsComponent', () => {
  let component: JoivalidationsComponent;
  let fixture: ComponentFixture<JoivalidationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoivalidationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JoivalidationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
