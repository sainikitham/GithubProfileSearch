import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class GithubService{
  private username = "";
  private client_id= '1eea7ba7ac57c5069a17';
  private client_server= '6a150851a98bba91e3cda4693c5a0ffc60708a9a';

  constructor(private _http:Http){
   this.username = "sainikitham";
   console.log("service started...");
  }
  getUser(){
   return  this._http.get('https://api.github.com/users/'+this.username+'?client_id='+this.client_id+'&client_secret='+this.client_server)
    .map(res => res.json())
  }
  getRepos(){
    return  this._http.get('https://api.github.com/users/'+this.username+'/repos?client_id='+this.client_id+'&client_secret='+this.client_server)
     .map(res => res.json())
  }
  getNewUser(username:string){
    this.username = username;
  }
}
