import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ImagePreviewComponent } from '../image-preview/image-preview.component';
import { MySubmissionComponent } from './my-submission.component';

describe('MySubmissionComponent', () => {
  let component: MySubmissionComponent;
  let fixture: ComponentFixture<MySubmissionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MySubmissionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MySubmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});