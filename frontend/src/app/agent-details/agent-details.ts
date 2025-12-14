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