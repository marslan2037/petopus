import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'nearby',
  templateUrl: './nearby.component.html',
  styleUrls: ['./nearby.component.scss']
})

export class NearByComponent {

  constructor(
    private route: Router,
    

  ){}
  ngOnInit() {

  }
    
}
