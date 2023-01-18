import {
  Component,
  ElementRef,
  OnInit,
  VERSION,
  ViewChild,
} from '@angular/core';
import './hello-world';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  @ViewChild('foo', { static: true }) input: ElementRef;
  ngOnInit() {
    console.log(this.input);
  }

  onClick(event: any) {
    console.log(event);
    console.log('CALLED');
  }
}
