import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditThoughtsComponent } from './edit-thoughts.component';

describe('EditThoughtsComponent', () => {
  let component: EditThoughtsComponent;
  let fixture: ComponentFixture<EditThoughtsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditThoughtsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditThoughtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
