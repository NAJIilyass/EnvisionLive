import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-stream',
  standalone: true,
  imports: [],
  templateUrl: './stream.component.html',
  styleUrl: './stream.component.css'
})
export class StreamComponent implements OnInit {
  streamId!: string;

  constructor(private route : ActivatedRoute){}

  ngOnInit(){
    this.route.params.subscribe(params =>{
      this.streamId=params['id'];
    })
  }

}
