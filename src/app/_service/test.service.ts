import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'
@Injectable({
  providedIn: 'root'
})
export class TestService {
  apikey:string
  constructor(private http:HttpClient) { }
   async listrev(params:any)
   {
    return await 
    this.http.get(environment.baseUrl+"/critics/"+params+".json?api-key=zkOqedJ7IlGvahz3WxCzsJgzSQ8ftiNh").toPromise();
    }
    async listStories(params:any)
    {
     return await 
     this.http.get(environment.StoriesUrl+params+".json?api-key=zkOqedJ7IlGvahz3WxCzsJgzSQ8ftiNh").toPromise();
     }
 
}
