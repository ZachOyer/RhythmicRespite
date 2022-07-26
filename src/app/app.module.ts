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
import { TinderPoemsComponent } from './poems/tinder-poems/tinder-poems.component';
import { ChristmasRapComponent } from './poems/christmas-rap/christmas-rap.component';
import { EdgarAllenPoemComponent } from './poems/edgar-allen-poem/edgar-allen-poem.component';
import { BabyGurlComponent } from './poems/baby-gurl/baby-gurl.component';
import { ClimbingComponent } from './poems/climbing/climbing.component';
import { TheProphecyComponent } from './poems/the-prophecy/the-prophecy.component';
import { UrMyDadComponent } from './poems/ur-my-dad/ur-my-dad.component';
import { SpeakEnglishComponent } from './poems/speak-english/speak-english.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    IntroComponent,
    LoveLifeLiteratureComponent,
    GlassRoseComponent,
    TinderPoemsComponent,
    ChristmasRapComponent,
    EdgarAllenPoemComponent,
    BabyGurlComponent,
    ClimbingComponent,
    TheProphecyComponent,
    UrMyDadComponent,
    SpeakEnglishComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
