import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EndpointService {

  constructor(){ }
  url= 'http://127.0.0.1:3000/';
}
