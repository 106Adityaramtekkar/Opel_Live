import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent {
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
