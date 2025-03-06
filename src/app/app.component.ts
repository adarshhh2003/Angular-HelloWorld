import { Component } from '@angular/core';
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'HelloWorld';
  imgUrl = "assets/BridgeLabzLogo.jpg";
  url = "https://www.bridgelabz.com";
  userName: String = '';

  ngOnInit(): void {
    this.title = `Hello ${this.userName} from BridgeLabz.`;
  }

  onClick(event: Event) {
    console.log("Save button is clicked!", event);
    window.open(this.url, "_blank");
  }
}
