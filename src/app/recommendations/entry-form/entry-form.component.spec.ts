import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { EntryFormComponent } from './entry-form.component';
import { RecommedationService } from '../services/recommendations.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { ListComponent } from 'src/app/products/list/list.component';

describe('EntryFormComponent', () => {
  let component: EntryFormComponent;
  let fixture: ComponentFixture<EntryFormComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule,ReactiveFormsModule],
      declarations: [ListComponent],
      providers: [
        FormBuilder,
        RecommedationService
      ]
      }).compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(EntryFormComponent);
        component = fixture.componentInstance;
      });
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  })


});
