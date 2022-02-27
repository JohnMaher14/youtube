import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { YoutubeService } from 'src/app/services/youtube.service';

@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.scss']
})
export class YoutubeComponent implements OnInit {
  youtubeEmbedded ='https://www.youtube.com/embed/';
  YoutubeChannelStatistics:any;
  YoutubeGeneralStatistics:any;
  youtubePlayer:any;
  items:any[]= [];
  YoutubeChannelSnippet:any;
  YoutubeStatistics:any;
  YoutubeSnippet:any;
  YoutubeContent:any;
  channelDisplayed= false;
  searchDiv= true;

  statisticsDisplayed= false;
  youtubeDataDisplayed = false
  loading = false;
  savedDataFromYoutube: any[] =[];
  constructor(
    private _YoutubeService:YoutubeService,
    private _Router:Router
  ){}
  searchForm:FormGroup = new FormGroup({
    'search': new FormControl('', [Validators.required , Validators.pattern(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+){11}/)])
  })
  SavedVideosData(){
    this._YoutubeService.getYoutubeSavedData().subscribe(
      (response) => {
        this.savedDataFromYoutube = response.youtubeDataApis
      }
    )
  }
  onSubmit(searchForm:FormGroup){
    this.loading = true;
    // this._YoutubeService.getYoutubeApi(searchForm.value.search.slice(-11)).subscribe(
    //   (response) => {
    //     // if (response.items.id !== undefined) {

    //       this.loading = false;
    //       this.searchDiv = false;
    //       this.statisticsDisplayed = true;
    //       this.youtubeDataDisplayed = true;
    //       this.items = response.items;
    //       console.log(this.items);
    //       this.YoutubeGeneralStatistics = response.items[0].id;
    //       this.youtubePlayer = response.items[0].player;
    //       console.log(response.items[0].player.embedHtml);
    //       this.YoutubeStatistics = response.items[0].statistics;
    //       this.YoutubeSnippet = response.items[0].snippet;
    //       this.YoutubeContent = response.items[0].contentDetails;
    //       this._YoutubeService.getChannelDetails(this.YoutubeSnippet.channelId).subscribe(
    //         (response) => {
    //           this.loading = false;
    //           this.statisticsDisplayed = true;
    //           this.channelDisplayed = true;
    //           this.searchDiv = false;
    //           this.youtubeDataDisplayed = true;

    //           this.YoutubeChannelStatistics = response.items[0].statistics;
    //           this.YoutubeChannelSnippet = response.items[0].snippet;
    //         }
    //       )
    //     // }
    //     // else if(response.items.id === undefined){
    //     //   this.loading = false
    //     //   this._Router.navigate(['/youtube'])
    //     // }
    //   }
    // )
    this._Router.navigate(['youtube-details/',searchForm.value.search.slice(-11)])
    searchForm.reset()

  }

  onSave(saveYoutubeApi:NgForm){
    console.log(saveYoutubeApi.value);
    this._YoutubeService.sendYoutubeApi(saveYoutubeApi.value).subscribe(
      (response) => {
        if (response.success) {

          console.log(response);
        }
      }, error => {
        if (error.error) {

          console.log(error);
        }
      }
    )
  }
  // seeChannel(channel:NgForm){
  //   this.loading = true;
  //   this._YoutubeService.getChannelDetails(channel.value.channelId).subscribe(
  //     (response) => {
  //       this.loading = false;
  //       this.statisticsDisplayed = true;
  //       this.channelDisplayed = true;
  //       this.searchDiv = false;
  //       this.youtubeDataDisplayed = true;

  //       this.YoutubeChannelStatistics = response.items[0].statistics;
  //       this.YoutubeChannelSnippet = response.items[0].snippet;
  //     }
  //   )
  // }
  ngOnInit(): void {
    this.SavedVideosData()
  }

}
