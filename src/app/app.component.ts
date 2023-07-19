import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Opel';

constructor ( private router:Router){}


home(){
    this.router.navigate(['/home'])
  }

  about(){
    this.router.navigate(['/about'])
  }

  contact(){
    this.router.navigate(['/contact'])
  }

  load(){
    this.router.navigate(['/loader'])
  }
}
