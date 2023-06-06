import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(
    private http: HttpClient
  ) { }
  GetData(limit: any, offset: number, collegeName: string, universityName: string){
    let queryParam = new HttpParams();
    queryParam = queryParam.append('limit', 0);
    queryParam = queryParam.append('offset', 0);
    const collegeValue = collegeName===null?"":collegeName;
    const universityValue = universityName===null?"":universityName;
    console.log(collegeValue, 'VAlueeeee')
    queryParam = queryParam.append('collegeName', collegeValue);
    queryParam = queryParam.append('universityName', universityValue);
    return this.http.get("http://localhost:3000/api/admin-user", {params: queryParam});
  }

  detail(id: string) {
    return this.http.get("http://localhost:3000/api/admin-user/"+id);
  }

  update(body: object, id: string){
    return this.http.put("http://localhost:3000/api/admin-user/"+id, body);
  }

  create(bodyData: any) {
    console.log(bodyData, 'data bodyyyyyyy')
    return this.http.post("http://localhost:3000/api/admin-user/",bodyData);
  }

  delete(id: string) {
    return this.http.delete("http://localhost:3000/api/admin-user/"+id)
  }
}
