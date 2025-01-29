import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router'; // ✅ Import RouterOutlet

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet], // ✅ Ensure RouterOutlet is imported
  templateUrl: './app.component.html', // ✅ Correct file name
  styleUrls: ['./app.component.css'] // ✅ Correct file name
})
export class AppComponent {
  title = 'LoginPage';
}
