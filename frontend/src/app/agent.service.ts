// Copyright 2025 Shrikara Kaudambady
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

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
