import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { IntroComponent } from './poems/intro/intro.component';
import { LoveLifeLiteratureComponent } from './poems/love-life-literature/love-life-literature.component';
import { GlassRoseComponent } from './poems/glass-rose/glass-rose.component';
import { ChristmasRapComponent } from './poems/christmas-rap/christmas-rap.component';
import { EdgarAllenPoemComponent } from './poems/edgar-allen-poem/edgar-allen-poem.component';
import { BabyGurlComponent } from './poems/baby-gurl/baby-gurl.component';
import { ClimbingComponent } from './poems/climbing/climbing.component';
import { TheProphecyComponent } from './poems/the-prophecy/the-prophecy.component';
import { UrMyDadComponent } from './poems/ur-my-dad/ur-my-dad.component';
import { SpeakEnglishComponent } from './poems/speak-english/speak-english.component';
import { FirstPoemComponent } from './poems/tinder-poems/first-poem/first-poem.component';
import { SecondPoemComponent } from './poems/tinder-poems/second-poem/second-poem.component';
import { HappyRideComponent } from './poems/happy-ride/happy-ride.component';
import { StyleService } from './style.service';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    IntroComponent,
    LoveLifeLiteratureComponent,
    GlassRoseComponent,
    ChristmasRapComponent,
    EdgarAllenPoemComponent,
    BabyGurlComponent,
    ClimbingComponent,
    TheProphecyComponent,
    UrMyDadComponent,
    SpeakEnglishComponent,
    FirstPoemComponent,
    SecondPoemComponent,
    HappyRideComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent, data: { animation: 'Welcome' }},
      { path: 'intro', component: IntroComponent, data: { animation: 'Short' }},
      { path: 'love-life-lit', component: LoveLifeLiteratureComponent, data: { animation: 'Long'}},
      { path: 'glass-rose', component: GlassRoseComponent, data: { animation: 'Long' }},
      { path: 'tinder-poems', component: FirstPoemComponent, data: { animation: 'Long' }},
      { path: 'tinder-poems-2', component: SecondPoemComponent, data: { animation: 'SecondPoem'}},
      { path: 'the-prophecy', component: TheProphecyComponent, data: { animation: 'Long' }},
      { path: 'happy-ride', component: HappyRideComponent, data: { animation: 'Long' }},
      { path: 'speak-english', component: SpeakEnglishComponent, data: { animation: 'Short' }},
      { path: 'ur-my-dad', component: UrMyDadComponent, data: { animation: 'Long' }},
      { path: 'edgar-allen-poem', component: EdgarAllenPoemComponent, data: { animation: 'Long' }},
      { path: 'christmas-rap', component: ChristmasRapComponent, data: { animation: 'Long' }},
      { path: 'baby-gurl', component: BabyGurlComponent, data: { animation: 'Short' }},
      { path: 'climbing', component: ClimbingComponent, data: { animation: 'Long' }},
      { path: '', redirectTo: 'welcome', pathMatch: 'full'},
      { path: '**', redirectTo: 'welcome', pathMatch: 'full'}
    ]),
    BrowserAnimationsModule,
    // AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private stylingService: StyleService) {
    this.stylingService.checkForMobileDevice();
  }
}
