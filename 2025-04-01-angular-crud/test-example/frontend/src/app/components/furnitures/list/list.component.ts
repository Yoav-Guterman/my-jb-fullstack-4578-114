import { Component, signal } from '@angular/core';
import { Furniture } from '../../../models/furnitures/furniture.model';
import { FurnituresService } from '../../../services/furnitures.service';
import { SingleComponent } from "../single/single.component";

@Component({
  selector: 'app-list',
  imports: [SingleComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  list = signal<Furniture[]>([])

  constructor(
    public furnituresService: FurnituresService
  ) { }

  ngOnDestroy(): void {
  }

  async ngOnInit(): Promise<void> {
    try {
      const list = await this.furnituresService.getAll()
      this.list.set(list)
    } catch (e) {
      console.log(e)
    }
  }

  async addPost(furniture: Furniture) {
    try {
      this.list.set([furniture, ...this.list()])
    } catch (e) {
      alert(e)
    }
  }
}
