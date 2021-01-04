import { Injectable } from '@angular/core';
import { MapsAPILoader } from '@agm/core';
//import { Observable } from 'rxjs/Observable';
import { Subject, from } from 'rxjs';
import { of } from 'rxjs';
import { filter, catchError, tap, map, switchMap } from 'rxjs/operators';
//import { fromPromise } from 'rxjs/observable/fromPromise';
//import { from } from 'rxjs';
//import { fromPromise } from 'rxjs/observable/fromPromise';
import { Location } from './location-model';
import { Observable } from 'rxjs';
 

declare var google: any;

@Injectable()
//var observableFromPromise = fromPromise(promiseSrc);
export class GeocodeService {
  private geocoder: any;

  constructor(private mapLoader: MapsAPILoader) {}

  public initGeocoder() {
    this.mapLoader.load().then(() => {
        this.geocoder = new google.maps.Geocoder();
    });
    //console.log('Init geocoder!');
    
  }

  private waitForMapsToLoad(): Observable<boolean> {
    if(!this.geocoder) {
    //   return fromPromise(this.mapLoader.load())
    //   .pipe(
    //     tap(() => this.initGeocoder()),
    //     map(() => true)
    //   );
    }
    return of(true);
  }
  results = [];
  geoCodeAddress(location : string)
  {
    this.results = [];
    debugger;
    this.mapLoader.load().then(() => {
        this.geocoder = new google.maps.Geocoder();
        this.geocoder.geocode({'address': "London"}, (results, status) => {
          
          if (status == google.maps.GeocoderStatus.OK) {
            console.log('Geocoding complete!');
            debugger;
            
            // observer.next({
            //   lat: results[0].geometry.location.lat(), 
            //   lng: results[0].geometry.location.lng()
            // });
          } else {
              console.log('Error - ', results, ' & Status - ', status);
              debugger;
              return results;
              //observer.next({ lat: 0, lng: 0 });
          }
          //observer.complete();
        });
    });
  }
  geocodeAddress(location: string): Observable<Location> {
    console.log('Start geocoding!');
    this.mapLoader.load().then(() => {
        this.geocoder = new google.maps.Geocoder();
    });
    return this.waitForMapsToLoad().pipe(
      // filter(loaded => loaded),
      switchMap(() => {
        return new Observable(observer => {
            this.mapLoader.load().then(() => {
                this.geocoder = new google.maps.Geocoder();
                this.geocoder.geocode({'address': location}, (results, status) => {
                    if (status == google.maps.GeocoderStatus.OK) {
                    console.log('Geocoding complete!');
                    observer.next({
                        lat: results[0].geometry.location.lat(), 
                        lng: results[0].geometry.location.lng(),
                        address : location
                    });
                    } else {
                        console.log('Error - ', results, ' & Status - ', status);
                        observer.next({ lat: 0, lng: 0 ,address : location});
                    }
                    observer.complete();
                });
            });
          
        })        
      })
    )
  }
  
}