import { Component, input } from '@angular/core';

@Component({
  selector: 'app-new-comment',
  imports: [],
  templateUrl: './new-comment.component.html',
  styleUrl: './new-comment.component.css'
})
export class NewCommentComponent {

  postId = input<string>()


}
