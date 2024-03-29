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
import { StyleService } from './services/style.service';
import { TheWorldComponent } from './poems/the-world/the-world.component';
import { FindItQuickComponent } from './poems/find-it-quick/find-it-quick.component';
import { MirroredGlassComponent } from './poems/mirrored-glass/mirrored-glass.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReasonsComponent } from './poems/reasons/reasons.component';
import { ChildComponent } from './poems/child/child.component';
import { ThirdPoemComponent } from './poems/tinder-poems/third-poem/third-poem.component';
import { MissedOpportunityComponent } from './poems/missed-opportunity/missed-opportunity.component';
import { OneTimeComponent } from './poems/one-time/one-time.component';
import { TheDanceComponent } from './poems/the-dance/the-dance.component';
import { BiggerHeartsBleedBetterComponent } from './poems/bigger-hearts-bleed-better/bigger-hearts-bleed-better.component';
import { PerfectionComponent } from './poems/perfection/perfection.component';
import { HowDidWeGetHereComponent } from './poems/how-did-we-get-here/how-did-we-get-here.component';

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
    HappyRideComponent,
    TheWorldComponent,
    FindItQuickComponent,
    MirroredGlassComponent,
    ReasonsComponent,
    ChildComponent,
    ThirdPoemComponent,
    MissedOpportunityComponent,
    OneTimeComponent,
    TheDanceComponent,
    BiggerHeartsBleedBetterComponent,
    PerfectionComponent,
    HowDidWeGetHereComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private stylingService: StyleService) {
    this.stylingService.checkForMobileDevice();
  }
}
