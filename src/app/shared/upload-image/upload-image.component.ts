import { Component } from '@angular/core';
import { FileItem } from './models/file-item';
import { StorageService } from './services/storage.service';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.scss'],
  providers: [StorageService]
})
export class UploadImageComponent {

  files: FileItem[] = []

  isOverDrop = false;
  constructor(private storageService: StorageService) { }



  onUpload() {

   
    this.storageService.uploadImage(this.files)
  }

}
