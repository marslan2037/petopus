import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class ComponentObservable {

   constructor(){}
   private IdChanged = new Subject<any>();
    getIdClicked = this.IdChanged.asObservable();
    PassIdClicked(value:any) {
       this.IdChanged.next(value);
       sessionStorage.setItem("pet_id", value);
       //console.log(value);
    }
}