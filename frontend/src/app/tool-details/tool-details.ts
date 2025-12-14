import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToolService } from '../tool.service';

@Component({
  selector: 'app-tool-details',
  templateUrl: './tool-details.html',
  styleUrls: ['./tool-details.css']
})
export class ToolDetailsComponent implements OnInit {
  tool: any;

  constructor(
    private route: ActivatedRoute,
    private toolService: ToolService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.toolService.getTool(+id).subscribe(data => {
        this.tool = data;
      });
    }
  }
}