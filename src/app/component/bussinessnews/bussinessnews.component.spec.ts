import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BussinessnewsComponent } from './bussinessnews.component';

describe('BussinessnewsComponent', () => {
  let component: BussinessnewsComponent;
  let fixture: ComponentFixture<BussinessnewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BussinessnewsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BussinessnewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
