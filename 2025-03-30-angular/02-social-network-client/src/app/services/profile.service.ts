import { Injectable } from '@angular/core';
import { v4 } from 'uuid';
import { Post } from '../models/post/post.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  random = v4()

  constructor(
    public httpClient: HttpClient
  ) { }

  sayHi() {
    console.log(`hi!!! ${this.random}`)
  }

  async getProfile(): Promise<Post[]> {
    const observable = this.httpClient.get<Post[]>(`${environment.restServerUrl}/profile`)
    const profile = firstValueFrom(observable)
    return profile
  }

  async deletePost(id: string): Promise<boolean> {
    const observable = this.httpClient.delete<boolean>(`${environment.restServerUrl}/profile/${id}`)
    const isDeleted = firstValueFrom(observable)
    return isDeleted
  }
}
