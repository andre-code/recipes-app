import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipesCollectionComponent } from './recipes-collection.component';

describe('RecipesCollectionComponent', () => {
  let component: RecipesCollectionComponent;
  let fixture: ComponentFixture<RecipesCollectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipesCollectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipesCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
