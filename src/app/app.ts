import {Component} from '@angular/core';
import {RouterModule} from '@angular/router';
import {Navbar} from './component/navbar/navbar';

@Component({
  selector: 'app-root',
  imports: [RouterModule, Navbar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}
