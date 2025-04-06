import { Component, input } from '@angular/core';
import { Furniture } from '../../../models/furnitures/furniture.model';

@Component({
  selector: 'app-single',
  imports: [],
  templateUrl: './single.component.html',
  styleUrl: './single.component.css'
})
export class SingleComponent {
  furniture = input<Furniture>()
}
