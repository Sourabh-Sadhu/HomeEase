import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeEaseComponent } from './home-ease.component';

describe('HomeEaseComponent', () => {
  let component: HomeEaseComponent;
  let fixture: ComponentFixture<HomeEaseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeEaseComponent]
    });
    fixture = TestBed.createComponent(HomeEaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
