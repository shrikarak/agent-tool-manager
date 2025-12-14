
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:3000/api/tools';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'x-api-key': 'my-secret-api-key'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ToolService {

  constructor(private http: HttpClient) { }

  getTools(search: string = ''): Observable<any> {
    return this.http.get(`${API_URL}?search=${search}`, httpOptions);
  }

  getTool(id: number): Observable<any> {
    return this.http.get(`${API_URL}/${id}`, httpOptions);
  }

  createTool(tool: any): Observable<any> {
    return this.http.post(API_URL, tool, httpOptions);
  }

  updateTool(id: number, tool: any): Observable<any> {
    return this.http.put(`${API_URL}/${id}`, tool, httpOptions);
  }

  deleteTool(id: number): Observable<any> {
    return this.http.delete(`${API_URL}/${id}`, httpOptions);
  }
}
