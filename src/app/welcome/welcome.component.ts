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
  showAll = false;
  poems = [
    {
      id: 0,
      title: "Intro",
      length: "Medium",
      complete: 'Yes',
      secretPoem: false
    },
    {
      id: 1,
      title: "Tinder Poems",
      length: "Short",
      complete: 'Yes',
      secretPoem: false
    },
    {
      id: 2,
      title: "Christmas Rap",
      length: "Medium",
      complete: 'Yes',
      secretPoem: false
    },
    {
      id: 3,
      title: "Love Life Literature",
      length: "Long",
      complete: 'Yes',
      secretPoem: false
    },
    {
      id: 4,
      title: "Edgar Allen Poem",
      length: "Long",
      complete: 'Yes',
      secretPoem: false
    },
    {
      id: 5,
      title: "Baby Gurl",
      length: "Short",
      complete: 'Yes',
      secretPoem: true
    },
    {
      id: 6,
      title: "Climbing",
      length: "Medium",
      complete: 'No',
      secretPoem: false
    },
    {
      id: 7,
      title: "The Prophecy",
      length: "Long",
      complete: 'Yes',
      secretPoem: false
    },
    {
      id: 8,
      title: "You're my Dad",
      length: "Long",
      complete: 'Yes',
      secretPoem: false
    },
    {
      id: 9,
      title: "You Speak English?",
      length: "Short",
      complete: 'Yes',
      secretPoem: false
    },
    {
      id: 10,
      title: "Glass Rose",
      length: "Long",
      complete: 'Yes',
      secretPoem: false
    },
    {
      id: 11,
      title: "You Must Be This Happy To Ride This Ride",
      length: "Long",
      complete: 'Yes',
      secretPoem: false
    },
  ]


  ngOnInit(): void {

  }

  filterPoems(): any[] {
    if (this.searchTerm === '' && !this.showAll) {
      return this.poems.filter((poem: any) => {
        return poem.secretPoem === false;
      })
    } else if (this.searchTerm === '' && this.showAll) {
      return this.poems;
    } else {
      let tempTerm = this.searchTerm.toLowerCase();
      return this.poems.filter((poem: any) => {
        if (poem.title.toLowerCase().indexOf(tempTerm) !== -1 && (poem.secretPoem === false || this.showAll === true)) {
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
    }
  }

  clearSearch() {
    this.searchTerm = '';
  }

}
