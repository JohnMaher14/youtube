import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { YoutubeService } from 'src/app/services/youtube.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  id!:string;
  loading = true;
  items: any;
  seeMore = false;
  p: any;
  readMore = false;
  readMoreDescription = false;

  YoutubeGeneralStatistics: any;
  youtubePlayer: any;
  YoutubeStatistics: any;
  YoutubeSnippet: any;
  YoutubeContent: any;
  seeMoreIndex: number = -1

  YoutubeChannelStatistics: any;
  YoutubeChannelSnippet: any;
  constructor(
    private _ActivatedRoute:ActivatedRoute,
    private _YoutubeService:YoutubeService
  ) { }
  stpPropagation(e:any){e.stopPropagation()}

  ngOnInit(): void {
    this.showYoutubeApi()
  }
  showYoutubeApi(){
    this.loading = true;
    this.id = this._ActivatedRoute.snapshot.params["id"];
    this._YoutubeService.getYoutubeApi(this.id).subscribe(
      (response) => {
        console.log(response.items);
        this.loading = false;

        this.items = response.items;
        this.YoutubeGeneralStatistics = response.items[0].id;
        this.youtubePlayer = response.items[0].player;
        this.YoutubeStatistics = response.items[0].statistics;
        this.YoutubeSnippet = response.items[0].snippet;
        this.YoutubeContent = response.items[0].contentDetails;
        this._YoutubeService.getChannelDetails(this.YoutubeSnippet.channelId).subscribe(
          (response) => {
            this.loading = false;

            this.YoutubeChannelStatistics = response.items[0].statistics;
            this.YoutubeChannelSnippet = response.items[0].snippet;
          }
        )
      }
    )
  }
}
