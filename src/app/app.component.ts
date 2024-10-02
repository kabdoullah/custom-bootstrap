import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  title = 'custom-bootstrap';

  ngOnInit(): void {
    console.log('AppComponent ngOnInit');
    document.documentElement.style.setProperty('--primary-color', 'green');
    document.documentElement.style.setProperty('--secondary-color', 'white');
  }

}
