import { Component, input, OnDestroy, OnInit, output, signal } from '@angular/core';
import { CommentComponent } from "../comment/comment.component";
import { PostComment } from '../../../models/comment/comment.model';
import { NewCommentComponent } from "../new-comment/new-comment.component";

@Component({
  selector: 'app-comments',
  imports: [CommentComponent, NewCommentComponent],
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.css'
})

export class CommentsComponent implements OnInit, OnDestroy {

  comments = input<PostComment[]>()
  postId = input<string>()
  deletedComment = output<string>()



  removeComment(id: string) {
    this.deletedComment.emit(id)
  }

  ngOnDestroy(): void {
  }

  ngOnInit(): void {
  }
}
