import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faAlignLeft, faAlignRight, faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.sass']
})
export class WelcomeComponent implements OnInit {

  constructor(private router: Router) { }

  faSearch = faMagnifyingGlass;
  faRight = faAlignLeft;
  faLeft = faAlignRight;
  faClear = faXmark;

  searchTerm = '';
  showIncomplete = false;
  poems = [
    {
      title: "Intro",
      length: "Medium",
      complete: 'Yes',
      implemented: 'Yes'
    },
    {
      title: "Tinder Poems",
      length: "Short",
      complete: 'Yes',
      implemented: 'Yes'
    },
    {
      title: "Christmas Rap",
      length: "Medium",
      complete: 'Yes',
      implemented: 'No'
    },
    {
      title: "Love Life Literature",
      length: "Long",
      complete: 'Yes',
      implemented: 'Yes'
    },
    {
      title: "Edgar Allen Poem",
      length: "Long",
      complete: 'Yes',
      implemented: 'No'
    },
    {
      title: "Baby Gurl",
      length: "Short",
      complete: 'Yes',
      implemented: 'No'
    },
    {
      title: "Climbing",
      length: "Medium",
      complete: 'No',
      implemented: 'No'
    },
    {
      title: "The Prophecy",
      length: "Long",
      complete: 'Yes',
      implemented: 'Yes'
    },
    {
      title: "You're my Dad",
      length: "Long",
      complete: 'Yes',
      implemented: 'No'
    },
    {
      title: "You Speak English?",
      length: "Medium",
      complete: 'Yes',
      implemented: 'No'
    },
    {
      title: "Glass Rose",
      length: "Long",
      complete: 'Yes',
      implemented: 'Yes'
    },
    {
      title: "You Must Be This Happy To Ride This Ride",
      length: "Long",
      complete: 'Yes',
      implemented: 'Yes'
    },
  ]


  ngOnInit(): void {

  }

  filterPoems(): any[] {
    if (this.searchTerm === '') {
      return this.poems;
    } else {
      let tempTerm = this.searchTerm.toLowerCase();
      return this.poems.filter((poem: any) => {
        return poem.title.toLowerCase().indexOf(tempTerm) !== -1;
      })
    }
  }

  goToPoem(title: string) {
    if (title === 'Intro') {
      this.router.navigateByUrl('intro');
    } else if (title === 'Glass Rose') {
      this.router.navigateByUrl('glass-rose');
    } else if (title === 'Love Life Literature') {
      this.router.navigateByUrl('love-life-lit');
    } else if (title === 'Tinder Poems') {
      this.router.navigateByUrl('tinder-poems');
    } else if (title === 'The Prophecy') {
      this.router.navigateByUrl('the-prophecy');
    } else if (title === 'You Must Be This Happy To Ride This Ride') {
      this.router.navigateByUrl('happy-ride');
    }
  }

  clearSearch() {
    this.searchTerm = '';
  }

}
