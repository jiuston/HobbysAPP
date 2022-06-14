import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileUploadMultipleComponent } from './file-upload-multiple.component';

describe('FileUploadMultipleComponent', () => {
  let component: FileUploadMultipleComponent;
  let fixture: ComponentFixture<FileUploadMultipleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FileUploadMultipleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FileUploadMultipleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
