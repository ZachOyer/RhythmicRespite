import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faAlignLeft, faAlignRight, faDeleteLeft, faMagnifyingGlass, faMugSaucer, faPencil, faXmark } from '@fortawesome/free-solid-svg-icons';
import { StyleService } from '../services/style.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.sass'],
  animations: [
    trigger('flyInOutRight', [
      transition('* => void', [
        animate('0.4s ease-in'),
        style({ transform: 'translateX(20%)', opacity: 0})
      ]),
      transition('void => *', [
        style({ transform: 'translateX(20%)', opacity: 0}),
        animate('0.4s ease-out'),
        style({ transform: 'translateX(0%)', opacity: 1})
      ])
    ]),
  ]
})
export class WelcomeComponent implements OnInit {

  constructor(private router: Router,
              public styleService: StyleService) { }

  timer = setInterval(this.incrementCounter.bind(this), 3000);
  counter = 0;

  faSearch = faMagnifyingGlass;
  faRight = faAlignLeft;
  faLeft = faAlignRight;
  faClear = faDeleteLeft;

  filterBy = 'None';
  sortingDirection = 0;
  longestPoem = 0;

  searchTerm = '';
  filteredPoems: any;
  poems = [
    {
      id: 0,
      title: "Intro",
      length: ["Medium"],
      wordCount: [170],
      date: new Date('Apr 2022'),
      url: 'intro'
    },
    {
      id: 1,
      title: "Tinder Poems",
      length: ["Short", "Short", "Medium"],
      wordCount: [94, 104, 173],
      date: new Date("Jun 2021"),
      url: 'tinder-poems'
    },
    {
      id: 2,
      title: "Christmas Rap",
      length: ["Medium"],
      wordCount: [192],
      date: new Date("Dec 2021"),
      url: 'christmas-rap'
    },
    {
      id: 3,
      title: "Love Life Literature",
      length: ["Long"],
      wordCount: [326],
      date: new Date("5 Nov 2021"),
      url: 'love-life-lit'
    },
    {
      id: 4,
      title: "Edgar Allen Poem",
      length: ["Long"],
      wordCount: [255],
      date: new Date("Oct 2021"),
      url: 'edgar-allen-poem'
    },
    {
      id: 6,
      title: "Climbing",
      length: ["Medium"],
      wordCount: [211],
      date: new Date("Feb 2022"),
      url: 'climbing'
    },
    {
      id: 7,
      title: "The Prophecy",
      length: ["Long"],
      wordCount: [249],
      date: new Date("10 Nov 2021"),
      url: 'the-prophecy'
    },
    {
      id: 8,
      title: "You're my Dad",
      length: ["Long"],
      wordCount: [268],
      date: new Date("15 Nov 2021"),
      url: 'youre-my-dad'
    },
    {
      id: 9,
      title: "You Speak English?",
      length: ["Short"],
      wordCount: [76],
      date: new Date("May 2022"),
      url: 'speak-english'
    },
    {
      id: 10,
      title: "Glass Rose",
      length: ["Medium"],
      wordCount: [184],
      date: new Date("Jun 2022"),
      url: 'glass-rose'
    },
    {
      id: 11,
      title: "You Must Be This Happy To Ride This Ride",
      length: ["Long"],
      wordCount: [347],
      date: new Date("Jul 2022"),
      url: 'happy-ride'
    },
    {
      id: 12,
      title: "The World",
      length: ["Long"],
      wordCount: [485],
      date: new Date("5 Aug 2022"),
      url: 'the-world'
    },
    {
      id: 13,
      title: "Find It Quick",
      length: ["Medium"],
      wordCount: [144],
      date: new Date("10 Aug 2022"),
      url: 'find-it-quick'
    },
    {
      id: 16,
      title: "Child",
      length: ["Long"],
      wordCount: [420],
      date: new Date("Oct 2022"),
      url: 'child'
    },
    {
      id: 17,
      title: "Missed Opportunity",
      length: ["Medium"],
      wordCount: [152],
      date: new Date("April 2023"),
      url: 'missed-opportunity'
    },
    {
      id: 19,
      title: "The Dance",
      length: ["Long"],
      wordCount: [386],
      date: new Date("July 2023"),
      url: 'the-dance'
    },
    {
      id: 20,
      title: "Bigger Hearts Bleed Better",
      length: ["Long"],
      wordCount: [324],
      date: new Date("Oct 2023"),
      url: 'bigger-hearts-bleed-better'
    },
    // {
    //   id: 21,
    //   title: "Perfection",
    //   length: ['Medium'],
    //   wordCount: [139],
    //   date: new Date("Nov 2023"),
    //   url: 'perfection'
    // },
    {
      id: 22,
      title: "How Did We Get Here",
      length: ['Short'],
      wordCount: [55],
      date: new Date("Nov 2023"),
      url: 'how-did-we-get-here'
    },
  ]


  ngOnInit(): void {
    if (!this.styleService.getIsMobile()) {
      this.poems.push(
        {
          id: 18,
          title: "One Time",
          length: ["Short"],
          wordCount: [156],
          date: new Date("July 2023"),
          url: 'one-time'
        })
    }
    this.poems.forEach(poem => {
      poem.wordCount.forEach(count => {
        if (count > this.longestPoem) {
          this.longestPoem = count
        }
      })
    })
    this.filterPoems();
  }

  sortPoems(sorting: number) {
    this.sortingDirection = sorting;
    this.filterPoems();
  }

  filterPoems(filtering?: string) {
    if (filtering) {
      this.filterBy = filtering;
    }
    if (this.searchTerm === '') {
      if (this.filterBy !== 'None') {
        this.filteredPoems = this.poems.filter((poem) => poem.length.includes(this.filterBy)).sort((a, b) => {
          if (this.sortingDirection !== 0) {
            if (a.date.getTime() > b.date.getTime()) {
              return this.sortingDirection;
            } else {
              return -this.sortingDirection;
            }
          } else {
            return (a.id > b.id) ? 1 : -1;
          }
        });
      } else {
        this.filteredPoems = this.poems.sort((a, b) => {
          if (this.sortingDirection !== 0) {
            if (a.date.getTime() > b.date.getTime()) {
              return this.sortingDirection;
            } else {
              return -this.sortingDirection;
            }
          } else {
            return (a.id > b.id) ? 1 : -1;
          }
        });
      }
    } else if (this.searchTerm.toLowerCase() === 'baby gurl') {
      this.filteredPoems = [{
        id: 5,
        title: "Baby Gurl",
        length: ["Short"],
        wordCount: [60],
        date: new Date("Nov 2021"),
        url: 'baby-gurl'
      }]
    } else if (this.searchTerm.toLowerCase() === 'mirrored glass') {
      this.filteredPoems = [{
        id: 14,
        title: "Mirrored Glass",
        length: ["Unknown"],
        wordCount: [0],
        date: new Date("Nov 2022"),
        url: 'mirrored-glass'
      }]
    } else if (this.searchTerm.toLowerCase() === 'reasons') {
      this.filteredPoems = [{
        id: 15,
        title: "Reasons",
        length: ["Unknown"],
        wordCount: [0],
        date: new Date("Nov 2022"),
        url: 'reasons'
      }]
    } else {
      this.filteredPoems = this.poems
      .filter((poem: any) => {
        if (this.filterBy !== 'None') {
          if ((poem.title.toLowerCase().indexOf(this.searchTerm.toLowerCase()) !== -1) && (poem.length === this.filterBy)) {
            return poem
          }
        } else {
          if (poem.title.toLowerCase().indexOf(this.searchTerm.toLowerCase()) !== -1) {
            return poem
          }
        }
      })
      .sort((a, b) => {
        if (this.sortingDirection !== 0) {
          if (a.date.getTime() > b.date.getTime()) {
            return this.sortingDirection;
          } else {
            return -this.sortingDirection;
          }
        } else {
          return (a.id > b.id) ? 1 : -1;
        }
      })
    }
  }

  goToPoem(url: string) {
    this.router.navigateByUrl(url);
  }

  clearSearch() {
    this.searchTerm = '';
    this.filterPoems();
  }

  formatDate(date: Date): string {
    return date.toUTCString().split(' ')[2] + ' ' + date.toUTCString().split(' ')[3]
  }

  incrementCounter() {
    this.counter = this.counter + 1;
    if (this.counter >= 90) {
      this.counter = 0
    }
  }

}
