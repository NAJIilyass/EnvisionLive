import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StreamService } from '../../services/stream/stream.service';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroUser, heroHeart } from '@ng-icons/heroicons/outline';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-stream',
  standalone: true,
  imports: [NgIconComponent, NgClass],
  templateUrl: './stream.component.html',
  styleUrl: './stream.component.css',
  providers: [StreamService],
  viewProviders: [provideIcons({ heroUser, heroHeart })],
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
