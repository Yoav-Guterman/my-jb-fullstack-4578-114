import { Component, input, output, signal } from '@angular/core';
import { ProfileService } from '../../../services/profile.service';
import { CommentsComponent } from "../comments/comments.component";
import { PostComment } from '../../../models/comment/comment.model';
import { Post } from '../../../models/post/draft.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post',
  imports: [CommentsComponent],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent {

  constructor(
    public profileService: ProfileService,
    public router: Router
  ) { }
  post = input<Post>()
  deletedPost = output<string>()
  deletedComment = output<{ postId: string, commentId: string }>()

  removeComment(id: string) {
    this.deletedComment.emit({ postId: this.post()!.id, commentId: id })
  }

  async editMe() {
    try {
      this.router.navigate([`/edit/${this.post()!.id}`])
    } catch (e) {
      alert(e)
    }
  }

  async deleteMe() {
    try {
      await this.profileService.deletePost(this.post()!.id)
      this.deletedPost.emit(this.post()!.id)
    } catch (e) {
      alert(e)
    }
  }
}
