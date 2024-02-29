import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StreamService } from '../../services/stream/stream.service';

@Component({
  selector: 'app-stream',
  standalone: true,
  imports: [],
  templateUrl: './stream.component.html',
  styleUrl: './stream.component.css',
  providers: [StreamService]
})
export class StreamComponent implements OnInit {
  streamId!: string;
  stream : any;

  constructor(
    private route : ActivatedRoute,
    private streamService: StreamService
    ){}

  ngOnInit(){
    this.route.params.subscribe(params =>{
      this.streamId=params['id'];
      this.loadStreamById(this.streamId);
    })
  }

  loadStreamById(id: string){
    return this.streamService.loadStreamById(id).subscribe(response =>{
      this.stream = response;
    })
  }

}
