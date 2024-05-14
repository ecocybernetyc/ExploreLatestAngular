import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username: string;

  constructor() {
    this.resetUserName();
  }

  onResetUsername() {
    this.resetUserName();
  }

  private resetUserName() {
    this.username = "";
  }
}
