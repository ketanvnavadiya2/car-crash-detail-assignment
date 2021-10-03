import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Car } from '../Models/Car';

@Injectable({
  providedIn: 'root'
})
export class CarCrashService {

baseURL = 'https://data.cityofnewyork.us/resource/h9gi-nx95.json';

  constructor(private http: HttpClient) { }

  getCars() {
    console.log("calling api")
      return this.http.get<Car[]>(this.baseURL)
  }

    getCarById(id:any) {
    console.log("calling api")
      return this.http.get<Car[]>(this.baseURL + '?collision_id=' + id)
  }

}
