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
      complete: 'Yes'
    },
    {
      title: "Tinder Poems",
      length: "Short",
      complete: 'Yes'
    },
    {
      title: "Christmas Rap",
      length: "Medium",
      complete: 'Yes'
    },
    {
      title: "Love Life Literature",
      length: "Long",
      complete: 'Yes'
    },
    {
      title: "Edgar Allen Poem",
      length: "Long",
      complete: 'Yes'
    },
    {
      title: "Baby Gurl",
      length: "Short",
      complete: 'Yes'
    },
    {
      title: "Climbing",
      length: "Medium",
      complete: 'No'
    },
    {
      title: "The Prophecy",
      length: "Long",
      complete: 'Yes'
    },
    {
      title: "You're my Dad",
      length: "Long",
      complete: 'Yes'
    },
    {
      title: "You speak English?",
      length: "Medium",
      complete: 'Yes'
    },
    {
      title: "Glass Rose",
      length: "Long",
      complete: 'Yes'
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
      this.router.navigateByUrl('love-life-lit')
    }
  }

  clearSearch() {
    this.searchTerm = '';
  }

}
