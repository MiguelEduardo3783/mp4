import { Component } from '@angular/core';
import { VideoPlayer, VideoOptions } from '@ionic-native/video-player/ngx'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  videoOptions: VideoOptions;
  videoUrl: string;

  constructor( private videoPlayer: VideoPlayer ) {}

  async playVideo(){
    try{
      this.videoOptions = {
        volume: 0.7
      }
      this.videoUrl = "https://www.youtube.com/watch?v=dyhXSngGTA8&t=797s.mp4"
      this.videoPlayer.play(this.videoUrl, this.videoOptions)
    }
    catch(e){
      console.error(e);
    }
  }
}