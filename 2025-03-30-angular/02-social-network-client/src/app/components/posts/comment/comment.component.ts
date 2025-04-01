import { Component, input, output } from '@angular/core';
import { PostComment } from '../../../models/comment/comment.model';
import { CommentsService } from '../../../services/comments.service';

@Component({
  selector: 'app-comment',
  imports: [],
  templateUrl: './comment.component.html',
  styleUrl: './comment.component.css'
})
export class CommentComponent {

  constructor(
    public commentsService: CommentsService
  ) { }

  comment = input<PostComment>()
  postId = input<string>()

  deletedComment = output<string>()

  async deleteMe() {
    try {
      await this.commentsService.deleteComment(this.postId()!, this.comment()?.id!)
      this.deletedComment.emit(this.comment()!.id)
    } catch (e) {
      alert(e)
    }
  }

}
