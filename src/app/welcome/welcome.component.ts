import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faAlignLeft, faAlignRight, faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons';
import { StyleService } from '../style.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.sass']
})
export class WelcomeComponent implements OnInit {

  constructor(private router: Router,
              public styleService: StyleService) { }

  faSearch = faMagnifyingGlass;
  faRight = faAlignLeft;
  faLeft = faAlignRight;
  faClear = faXmark;

  searchTerm = '';
  poems = [
    {
      id: 0,
      title: "Intro",
      length: "Medium",
      complete: 'Yes'
    },
    {
      id: 1,
      title: "Tinder Poems",
      length: "Short",
      complete: 'Yes'
    },
    {
      id: 2,
      title: "Christmas Rap",
      length: "Medium",
      complete: 'Yes'
    },
    {
      id: 3,
      title: "Love Life Literature",
      length: "Long",
      complete: 'Yes'
    },
    {
      id: 4,
      title: "Edgar Allen Poem",
      length: "Long",
      complete: 'Yes'
    },
    {
      id: 6,
      title: "Climbing",
      length: "Medium",
      complete: 'No'
    },
    {
      id: 7,
      title: "The Prophecy",
      length: "Long",
      complete: 'Yes'
    },
    {
      id: 8,
      title: "You're my Dad",
      length: "Long",
      complete: 'Yes'
    },
    {
      id: 9,
      title: "You Speak English?",
      length: "Short",
      complete: 'Yes'
    },
    {
      id: 10,
      title: "Glass Rose",
      length: "Long",
      complete: 'Yes'
    },
    {
      id: 11,
      title: "You Must Be This Happy To Ride This Ride",
      length: "Long",
      complete: 'Yes'
    },
  ]


  ngOnInit(): void {

  }

  filterPoems(): any[] {
    if (this.searchTerm === '') {
      return this.poems;
    } else if (this.searchTerm.toLowerCase() === 'baby gurl') {
      return [{
        id: 5,
        title: "Baby Gurl",
        length: "Short",
        complete: 'Yes'
      }]
    } else if (this.searchTerm.toLowerCase() === 'the world') {
      return [{
        id: 12,
        title: "The World",
        length: "Long",
        complete: 'No'
      }]
    } else {
      let tempTerm = this.searchTerm.toLowerCase();
      return this.poems.filter((poem: any) => {
        if (poem.title.toLowerCase().indexOf(tempTerm) !== -1) {
          return poem
        }
      })
    }
  }

  goToPoem(id: number) {
    if (id === 0) {
      this.router.navigateByUrl('intro');
    } else if (id === 1) {
      this.router.navigateByUrl('tinder-poems');
    } else if (id === 2) {
      this.router.navigateByUrl('christmas-rap');
    } else if (id === 3) {
      this.router.navigateByUrl('love-life-lit');
    } else if (id === 4) {
      this.router.navigateByUrl('edgar-allen-poem');
    } else if (id === 5) {
      this.router.navigateByUrl('baby-gurl');
    } else if (id === 6) {
      this.router.navigateByUrl('climbing');
    } else if (id === 7) {
      this.router.navigateByUrl('the-prophecy');
    } else if (id === 8) {
      this.router.navigateByUrl('ur-my-dad');
    } else if (id === 9) {
      this.router.navigateByUrl('speak-english');
    } else if (id === 10) {
      this.router.navigateByUrl('glass-rose');
    } else if (id === 11) {
      this.router.navigateByUrl('happy-ride');
    } else if (id === 12) {
      this.router.navigateByUrl('the-world');
    }
  }

  clearSearch() {
    this.searchTerm = '';
  }

}
