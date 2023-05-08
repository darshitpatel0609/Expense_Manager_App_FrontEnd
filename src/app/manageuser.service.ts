import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ManageuserService {

  constructor(private http:HttpClient) { }

  addUser(addUser:any):Observable<any>{
    let url = environment.apiUrl+"user"
    return this.http.post(url,addUser)
  }

  getAllUser():Observable<any>{
    return this.http.get(environment.apiUrl+"manageusers")
  }

  deleteUser(manageUserId:any):Observable<any>{
    return this.http.delete(environment.apiUrl+"byId/" +manageUserId)
  }
}
