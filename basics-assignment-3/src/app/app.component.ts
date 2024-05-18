import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  displayPassword = false;
  clicks = [];

  onToggleDisplayPassword() {
    this.displayPassword = true;
    this.clicks.push(this.clicks.length + 1);
  }

  getBackgroundColor(item: number): string {
    return item > 4 ? 'rgb(0,0,255)' : 'rgb(255,255,255)';
  }
}
