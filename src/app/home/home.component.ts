import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  ngOnInit(){
    this.toggleShow() ;
  }

  showName = true ;

  toggleShow(){
    setTimeout(() =>{
    this.showName = !this.showName;
  },1800);
  }

  
}
