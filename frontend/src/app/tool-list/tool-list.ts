import { Component, OnInit } from '@angular/core';
import { ToolService } from '../tool.service';

@Component({
  selector: 'app-tool-list',
  templateUrl: './tool-list.html',
  styleUrls: ['./tool-list.css']
})
export class ToolListComponent implements OnInit {
  tools: any[] = [];
  search: string = '';

  constructor(private toolService: ToolService) { }

  ngOnInit(): void {
    this.loadTools();
  }

  loadTools(): void {
    this.toolService.getTools(this.search).subscribe(data => {
      this.tools = data;
    });
  }

  onSearch(): void {
    this.loadTools();
  }
}