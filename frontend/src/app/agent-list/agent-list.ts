import { Component, OnInit } from '@angular/core';
import { AgentService } from '../agent.service';

@Component({
  selector: 'app-agent-list',
  templateUrl: './agent-list.html',
  styleUrls: ['./agent-list.css']
})
export class AgentListComponent implements OnInit {
  agents: any[] = [];
  search: string = '';

  constructor(private agentService: AgentService) { }

  ngOnInit(): void {
    this.loadAgents();
  }

  loadAgents(): void {
    this.agentService.getAgents(this.search).subscribe(data => {
      this.agents = data;
    });
  }

  onSearch(): void {
    this.loadAgents();
  }
}