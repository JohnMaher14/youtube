import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FacebookComponent } from './components/facebook/facebook.component';
import { InstgramComponent } from './components/instgram/instgram.component';
import { DetailsComponent } from './components/youtube/details/details.component';
import { YoutubeComponent } from './components/youtube/youtube.component';

const routes: Routes = [
  {path: '' , redirectTo:'/youtube' , pathMatch:'full'},
  {path: 'facebook' , component:FacebookComponent},
  {path: 'instgram' , component:InstgramComponent},
  {path: 'youtube' , component:YoutubeComponent},
  {path: 'youtube-details/:id' , component:DetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes , {useHash:true , scrollPositionRestoration:'top'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
