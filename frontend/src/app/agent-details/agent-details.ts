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

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AgentService } from '../agent.service';

@Component({
  selector: 'app-agent-details',
  templateUrl: './agent-details.html',
  styleUrls: ['./agent-details.css']
})
export class AgentDetailsComponent implements OnInit {
  agent: any;

  constructor(
    private route: ActivatedRoute,
    private agentService: AgentService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.agentService.getAgent(+id).subscribe(data => {
        this.agent = data;
      });
    }
  }
}