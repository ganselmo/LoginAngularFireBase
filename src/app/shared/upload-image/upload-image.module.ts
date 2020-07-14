import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UploadImageRoutingModule } from './upload-image-routing.module';
import { UploadImageComponent } from './upload-image.component';
import { NgFilesDirective } from './directives/ng-files.directive';


@NgModule({
  declarations: [UploadImageComponent, NgFilesDirective],
  imports: [
    CommonModule,
    UploadImageRoutingModule
  ]
})
export class UploadImageModule { }
