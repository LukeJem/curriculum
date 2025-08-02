import {Component, input} from '@angular/core';
import {Info} from '../../model/models';

@Component({
  selector: 'app-information',
  imports: [],
  templateUrl: './information.html',
  styleUrl: './information.css'
})
export class Information {

  info = input.required<Info>()

}
