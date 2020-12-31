import { BASE_URL } from './../../../environments/environment.prod';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public managerId:number =0;
  constructor(private client:HttpClient) { }

  //This method will retrieve the manger ID associated with the email address provided.
storeManagerIdFromServer(email:string)
{
  this.client.post<number>(`${BASE_URL}getmanager`,email).subscribe(
    data => {
      this.managerId = data
      console.log("Manager ID: " + this.managerId)
    }


  )
}


}
