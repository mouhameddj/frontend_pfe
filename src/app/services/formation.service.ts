import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EndpointService } from './endpoint.service';

@Injectable({
  providedIn: 'root'
})
export class FormationService {

  constructor(private http : HttpClient, private endpoint:EndpointService) { }

  ajout(formation:any){
    return this.http.post(this.endpoint.url +'formation/ajout', formation);
 }
 getAll(){
  return this.http.get(this.endpoint.url+'formation/getall');
}
delete(id:any){
  return this.http.delete(this.endpoint.url+'formation/delete/'+id)
}
update(id:any,formation:any){
  return this.http.put(this.endpoint.url+'formation/update/'+ id, formation);
}
getById(id:any){
  return this.http.get(this.endpoint.url+'formation/getbyid/'+id);
}
getByformationbyidformateur(id:any){
  return this.http.get(this.endpoint.url+'formation/getformationbyformateur/'+id);
}
getformationbyetudiant(id:any){
  return this.http.get(this.endpoint.url+'formation/getformationbyetudiant/'+id);
}
getByIdforma(id:any){
  return this.http.get(this.endpoint.url+'formation/getbyformateur/'+id);
}
}
