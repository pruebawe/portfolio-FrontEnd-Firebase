import { Injectable } from '@angular/core';
import { Storage, ref, uploadBytes, list, getDownloadURL } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  url: string = "";

  constructor(private storage:Storage) { }

  public uploadImage($event: any, name:string){
    const file = $event.target.file[0];
    const imRef = ref(this.storage, `imagen/` + name)
    uploadBytes(imRef, file)
    .then(response => {this.getImages()})
    .catch(error => console.log(error))
  }

  getImages(){
    const imagesRef = ref(this.storage, 'imagen');
    list(imagesRef)
    .then(async response => {
      for (let item of response.items) {
        this.url = await getDownloadURL(item);
      }
    })
    .catch(error => console.log(error))
  }
}
