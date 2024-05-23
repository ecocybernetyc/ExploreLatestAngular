import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrl: './game-control.component.css'
})
export class GameControlComponent {
  actualNumber = 0;
  interval: any;
  startButtonDisabled = false;
  @Output() onNumberChanged = new EventEmitter<number>();

  onStart() {
    this.startButtonDisabled = true;
    this.interval = setInterval(() => {
      this.actualNumber++;
      this.onNumberChanged.emit(this.actualNumber);
    }, 1000);
  }

  onEnd() {
    clearInterval(this.interval);
    this.startButtonDisabled = false;
  }
}
