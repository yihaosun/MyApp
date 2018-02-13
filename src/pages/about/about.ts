import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {searchPage} from '../searchPage/search';
import {chat1Page} from '../chat1/chat1';
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  phones = [];
  constructor(public nav: NavController) {
    this.phones = [{
      'Num': 'A',
      'Image': 'flower.jpg',
      'Name': '阿姨',
    },{
      'Num': 'L',
      'Image': 'header4.jpg',
      'Name': '蓝调',
    },{
      'Num': 'T',
        'Image': 'header5.jpg',
        'Name': 'ToTo'
    },{
      'Num': 'X',
      'Image': 'header1.jpg',
      'Name': '小先生',
    },{
      'Num': 'Z',
      'Image': 'header.jpg',
      'Name': '走了，走了',
    }]
  }

  openSearchPage() {
    this.nav.push(searchPage);
  }
  openPhonePage(phones) {
    this.nav.push(chat1Page,{phones:phones});
  }
}
