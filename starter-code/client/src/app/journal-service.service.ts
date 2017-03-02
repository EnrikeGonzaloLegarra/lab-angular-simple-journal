import { Injectable } from '@angular/core';
import{Http, Response}from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class JournalServiceService {

  constructor(private http: Http) { }

  getEntries(){
    return this.http.get('http://localhost:3000/api/journal-entries').map((res)=>res.json());
  }

  getEntry(id){
    id = String(id);
    console.log('the ID is: ', `http://localhost:3000/api/journal-entries/${id}`);
    return this.http.get(`http://localhost:3000/api/journal-entries/${id}`).map((res)=>res.json());
  }


}
