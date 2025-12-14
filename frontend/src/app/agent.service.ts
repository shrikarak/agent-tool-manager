
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:3000/api/agents';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'x-api-key': 'my-secret-api-key'
  })
};

@Injectable({
  providedIn: 'root'
})
export class AgentService {

  constructor(private http: HttpClient) { }

  getAgents(search: string = ''): Observable<any> {
    return this.http.get(`${API_URL}?search=${search}`, httpOptions);
  }

  getAgent(id: number): Observable<any> {
    return this.http.get(`${API_URL}/${id}`, httpOptions);
  }

  createAgent(agent: any): Observable<any> {
    return this.http.post(API_URL, agent, httpOptions);
  }

  updateAgent(id: number, agent: any): Observable<any> {
    return this.http.put(`${API_URL}/${id}`, agent, httpOptions);
  }

  deleteAgent(id: number): Observable<any> {
    return this.http.delete(`${API_URL}/${id}`, httpOptions);
  }
}
