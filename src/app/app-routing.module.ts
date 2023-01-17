import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FileTreeComponent } from './file-tree/file-tree.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { FileHistoryComponent } from './file-history/file-history.component';
import { ModalComponent } from './modal/modal.component';

const routes: Routes = [
  {
    path: 'files',
    component: FileTreeComponent,
    children: [{ path: 'browse', component: ModalComponent }],
  },
  { path: 'upload', component: FileUploadComponent },
  { path: 'history', component: FileHistoryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
