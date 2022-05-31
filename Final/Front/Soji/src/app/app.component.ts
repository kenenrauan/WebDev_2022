import { Component } from '@angular/core';
import {ProductService} from './product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Sōji';
  logged = false;
  userName: string;
  constructor(private productService: ProductService) { }
  current = 'Log in'

  ngOnInit(): void {
    this.getUsername()
  }
  getUsername(): void{
    this.userName = localStorage.getItem('username');
   if(this.userName){
     this.logged = true;
     this.current = this.userName;
   }
   else {
     this.logged = false;
     this.current = 'Log in';

   }
  }
}
