import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { firstValueFrom } from 'rxjs';
import { Post } from '../models/post/draft.model';
import { Draft } from '../models/post/post.model';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(
    public httpClient: HttpClient
  ) { }

  async getProfile(): Promise<Post[]> {
    const observable = this.httpClient.get<Post[]>(`${environment.restServerUrl}/profile`)
    const profile = firstValueFrom(observable)
    return profile
  }

  async getPost(id: string): Promise<Post> {
    const observable = this.httpClient.get<Post>(`${environment.restServerUrl}/profile/${id}`)
    const post = firstValueFrom(observable)
    return post
  }

  async deletePost(id: string): Promise<boolean> {
    const observable = this.httpClient.delete<boolean>(`${environment.restServerUrl}/profile/${id}`)
    const isDeleted = firstValueFrom(observable)
    return isDeleted
  }

  async addPost(draft: Draft): Promise<Post> {
    const observable = this.httpClient.post<Post>(`${environment.restServerUrl}/profile`, draft)
    const isDeleted = firstValueFrom(observable)
    return isDeleted
  }

  async updatePost(postId: string, draft: Draft): Promise<Post> {
    const observable = this.httpClient.patch<Post>(`${environment.restServerUrl}/profile/${postId}`, draft)
    const updatedPost = firstValueFrom(observable)
    return updatedPost
  }
}
