import { Component, computed, OnDestroy, OnInit, signal } from '@angular/core';
import { ProfileService } from '../../../services/profile.service';
import { PostComponent } from "../post/post.component";
import { NewComponent } from "../new/new.component";
import { Post } from '../../../models/post/draft.model';


@Component({
  selector: 'app-profile',
  imports: [PostComponent, NewComponent],
  // providers: [ProfileService], // if the components need its own ProfileService
  // it states here like so...
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit, OnDestroy {

  profile = signal<Post[]>([])


  constructor(
    public profileService: ProfileService
  ) { }

  ngOnDestroy(): void {
  }

  removePost(id: string) {
    this.profile.set(this.profile().filter(p => p.id !== id))
  }

  async ngOnInit(): Promise<void> {
    try {
      const profilePost = await this.profileService.getProfile()
      this.profile.set(profilePost)
    } catch (e) {
      console.log(e)
    }
  }

  removeComment(event: { postId: string, commentId: string }) {
    const { postId, commentId } = event
    const profile = this.profile()
    const post = profile.find(p => p.id === postId)
    if (post) {
      post.comments = post.comments.filter(c => c.id !== commentId)
    }
    this.profile.set(profile)
  }

  async addPost(post: Post) {
    try {
      this.profile.set([post, ...this.profile()])
    } catch (e) {

    }
  }

}
