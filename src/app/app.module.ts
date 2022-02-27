import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { SemorePipe } from './semore.pipe';
import { YoutubeComponent } from './components/youtube/youtube.component';
import { InstgramComponent } from './components/instgram/instgram.component';
import { FacebookComponent } from './components/facebook/facebook.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { LoadingComponent } from './components/loading/loading.component';
import { DetailsComponent } from './components/youtube/details/details.component';
import { NgxPaginationModule , PaginatePipe } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    SemorePipe,
    YoutubeComponent,
    InstgramComponent,
    FacebookComponent,
    NavbarComponent,
    FooterComponent,
    LoadingComponent,
    DetailsComponent,
    SemorePipe,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
