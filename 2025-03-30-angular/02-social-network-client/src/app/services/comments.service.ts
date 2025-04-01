import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(
    public httpClient: HttpClient
  ) { }

  async deleteComment(postId: string, commentId: string): Promise<boolean> {
    const observable = this.httpClient.delete<boolean>(`${environment.restServerUrl}/comments/${postId}/${commentId}`)
    return await firstValueFrom(observable)
  }
}
