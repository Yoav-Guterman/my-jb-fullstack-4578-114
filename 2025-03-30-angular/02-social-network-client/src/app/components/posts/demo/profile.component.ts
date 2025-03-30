import { DatePipe } from '@angular/common';
import { Component, computed, OnDestroy, OnInit, signal } from '@angular/core';
import { AllcapsPipe } from '../../../pipes/allcaps.pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile',
  imports: [DatePipe, AllcapsPipe, FormsModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit, OnDestroy {
  intervalId: any
  name: string = 'Bob'
  currentTime = (new Date())
  address: string = 'hayarden 5'
  username = signal<string>('')
  email = computed(() => `${this.username()}@gmail.com`)
  isButtonDisabled = true

  sayHi() {
    alert('Hi!')
  }

  ngOnInit(): void {
    this.intervalId = setInterval(() => {
      this.currentTime = (new Date())
    }, 1000)
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId)
  }
}
