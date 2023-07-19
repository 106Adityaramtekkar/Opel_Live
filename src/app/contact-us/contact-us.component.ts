import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
  ngOnInit(){
    this.toggleShow() ;
  }

  showName = true ;

  toggleShow(){
    setTimeout(() =>{
    this.showName = !this.showName;
  },2000);
  }
}
