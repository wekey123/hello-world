import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit{


  @Input('loader') loading: boolean = false;

   ngOnInit() {
     console.log(this.loading);
   }
}
