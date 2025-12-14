import { Routes } from '@angular/router';
import { AgentListComponent } from './agent-list/agent-list';
import { AgentDetailsComponent } from './agent-details/agent-details';
import { ToolListComponent } from './tool-list/tool-list';
import { ToolDetailsComponent } from './tool-details/tool-details';

export const routes: Routes = [
  { path: 'agents', component: AgentListComponent },
  { path: 'agents/:id', component: AgentDetailsComponent },
  { path: 'tools', component: ToolListComponent },
  { path: 'tools/:id', component: ToolDetailsComponent },
  { path: '', redirectTo: '/agents', pathMatch: 'full' }
];
