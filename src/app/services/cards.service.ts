import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface cards {
  avatar:string,
  id:number,
  first_name:string,
  last_name:string
}

@Injectable({
  providedIn: 'root'
})

export class CardsService {

  constructor(private http:HttpClient) { }

  getCardsInPageOne(){
    return this.http.get(`https://reqres.in/api/users?page=1`)
  }

  getCardsInPageTwo(){
    return this.http.get(`https://reqres.in/api/users?page=2`)
  }

  getCardByID(id:number) {
    return this.http.get(`https://reqres.in/api/users/${id}`)
  }
}
