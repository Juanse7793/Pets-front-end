import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url = 'https://budget-back.vercel.app/api/pets';


  constructor(private httpClient: HttpClient) {}

  getPosts() {
    return this.httpClient.get(this.url);
  }
}
