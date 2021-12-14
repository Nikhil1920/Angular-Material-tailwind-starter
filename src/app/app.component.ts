import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mat-tail-starter';
  dark_mode: boolean = this.readLocalStorage();
  toggleDarkMode() {
    this.dark_mode = !this.dark_mode;
    if (this.dark_mode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
    this.setLocalStorage(this.dark_mode);
  }
  readLocalStorage(): boolean {
    let key = localStorage.getItem("dark_mode");
    if (key == null) {
      return this.dark_mode;
    } else {
      return (key === 'true');
    }
  }
  setLocalStorage(current_dark_mode_state: boolean) {
    localStorage.setItem('dark_mode', current_dark_mode_state.toString());
  }
}
