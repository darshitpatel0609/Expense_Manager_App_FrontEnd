import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class SingupService {

  constructor(private http:HttpClient) { }

  addUser(addUser:any):Observable<any>{
    let url = environment.apiUrl+"addUser"
    return this.http.post(url,addUser)
  }

  getAllUser():Observable<any>{
    return this.http.get(environment.apiUrl+"users")
  }

  deleteUser(userId:any):Observable<any>{
    return this.http.delete(environment.apiUrl+"user/byId/" +userId)
  }

  login(user:any):Observable<any>{
    let url = environment.apiUrl+"Login"
    return this.http.post(url,user)
  }

  public forgotPassword(email: any):Observable<any>{
    return this.http.get(environment.apiUrl+"forgotPassword/?email="+email);
  }
  public resetPassword(otp:any, password:any, conformpassword:any):Observable<any>{
    return this.http.get(environment.apiUrl+"ResetPassword/?otp="+otp+"&password="+password+"&conformpassword="+conformpassword);
  }
}
