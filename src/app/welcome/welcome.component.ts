import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faAlignLeft, faAlignRight, faDeleteLeft, faMagnifyingGlass, faMugSaucer, faPencil, faXmark } from '@fortawesome/free-solid-svg-icons';
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
  faClear = faDeleteLeft;

  searchTerm = '';
  filteredPoems: any;
  poems = [
    {
      id: 0,
      title: "Intro",
      length: "Medium",
      count: "170"
    },
    {
      id: 1,
      title: "Tinder Poems",
      length: "Short",
      count: "94 + 104"
    },
    {
      id: 2,
      title: "Christmas Rap",
      length: "Medium",
      count: "194"
    },
    {
      id: 3,
      title: "Love Life Literature",
      length: "Long",
      count: "326"
    },
    {
      id: 4,
      title: "Edgar Allen Poem",
      length: "Long",
      count: "255"
    },
    {
      id: 6,
      title: "Climbing",
      length: "Medium",
      count: "211"
    },
    {
      id: 7,
      title: "The Prophecy",
      length: "Long",
      count: "250"
    },
    {
      id: 8,
      title: "You're my Dad",
      length: "Long",
      count: "268"
    },
    {
      id: 9,
      title: "You Speak English?",
      length: "Short",
      count: "76"
    },
    {
      id: 10,
      title: "Glass Rose",
      length: "Medium",
      count: "184"
    },
    {
      id: 11,
      title: "You Must Be This Happy To Ride This Ride",
      length: "Long",
      count: "347"
    },
    {
      id: 12,
      title: "The World",
      length: "Long",
      count: "481"
    },
    {
      id: 13,
      title: "Find It Quick",
      length: "Medium",
      count: "144"
    },
    {
      id: 16,
      title: "Child",
      length: "Long",
      count: "418"
    },
  ]


  ngOnInit(): void {
    this.filterPoems();
  }

  filterPoems() {
    if (this.searchTerm === '') {
      this.filteredPoems = this.poems;
    } else if (this.searchTerm.toLowerCase() === 'baby gurl') {
      this.filteredPoems = [{
        id: 5,
        title: "Baby Gurl",
        length: "Short",
        count: '60'
      }]
    } else if (this.searchTerm.toLowerCase() === 'mirrored glass') {
      this.filteredPoems = [{
        id: 14,
        title: "Mirrored Glass",
        length: "Unknown",
        count: "0"
      }]
    } else if (this.searchTerm.toLowerCase() === 'reasons') {
      this.filteredPoems = [{
        id: 15,
        title: "Reasons",
        length: "Unknown",
        count: "0"
      }]
    } else {
      this.filteredPoems = this.poems.filter((poem: any) => {
        if (poem.title.toLowerCase().indexOf(this.searchTerm.toLowerCase()) !== -1) {
          return poem
        }
      })
      if (this.filterPoems.length < 1) {

      }
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
    } else if (id === 13) {
      this.router.navigateByUrl('find-it-quick');
    } else if (id === 14) {
      this.router.navigateByUrl('mirrored-glass');
    } else if (id === 15) {
      this.router.navigateByUrl('reasons');
    } else if (id === 16) {
      this.router.navigateByUrl('child');
    }
  }

  clearSearch() {
    this.searchTerm = '';
    this.filterPoems();
  }

}
