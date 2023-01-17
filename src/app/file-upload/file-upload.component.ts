import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { FileTreeComponent } from '../file-tree/file-tree.component';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css'],
})
export class FileUploadComponent {
  isDisabled = true;

  constructor() {}
  filePath = 'root/dir/dir/file3.ext';
  uploadClicked(): boolean {
    return true;
  }

  setProgressDelay(): void {
    setTimeout(() => {
      console.log('Upload Successful');
    }, 5000);
  }
}
