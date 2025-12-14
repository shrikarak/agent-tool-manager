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
