import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import { page1Page } from '../otherPage/page1';
import {chatPage} from '../chat/chat';
import {searchPage} from '../searchPage/search';



/*
/!*Component 组件
 selector 选择器
 *templateUrl  模版的地址
 * *!/
*/



//export 出口

//NavParams
  //constuctor 构造函数




@Component({
  templateUrl: 'home.html'
})
export class HomePage {
  items = [];
  chatPerson=[];
  constructor(public nav: NavController) {
    this.items = [
      {
        'title': '发起群聊',
        'icon': 'chatbubbles',
        'description': '<div style="width:50px;height: 50px; border:1px solid black">fdffd<ion-searchbar ></ion-searchbar></div>'
      },{
        'title': '添加朋友',
        'icon': 'person-add',
        'description': ''
      },{
        'title': '扫一扫',
        'icon': 'qr-scanner',
        'description': 'A powerful Javascript framework for building single page apps. Angular is open source, and maintained by Google.',

      },{
      'title': '收付款',
        'icon': 'checkmark',
        'description': 'A powerful Javascript framework for building single page apps. Angular is open source, and maintained by Google.',

    }];
    this.chatPerson=[{
      'personUrl':'header.jpg',
      'personName':'走了，走了',
      'personContent':'好的',
      'personDate':"18/12/1"

    },{
      'personUrl':'header1.jpg',
      'personName':'小先生',
      'personContent':'[语音聊天]',
      'personDate':"18/12/2"

    },{
      'personUrl':'header2.jpg',
        'personName':'老王',
        'personContent':'你厉害呀',
        'personDate':"18/12/2"

    },{
      'personUrl':'header4.jpg',
        'personName':'蓝调',
        'personContent':'今天双十一呀，单身快乐',
        'personDate':"18/11/11"

    },{
      'personUrl':'header5.jpg',
      'personName':'ToTo',
      'personContent':'库里今天逆天了',
      'personDate':"18/12/7"

    },{
      'personUrl':'orderTp.jpg',
      'personName':'订阅号',
      'personContent':'南京移动：头条|昨晚出现超级月亮......',
      'personDate':"下午12：07"

    },{
      'personUrl':'header.jpg',
      'personName':'走了，走了',
      'personContent':'好的',
      'personDate':"18/12/1"

    }]
  }
  openpage1Page(item) {
    this.nav.push(page1Page, { item: item });
  }
  openChatPage(chatPerson) {
    this.nav.push(chatPage,{chatPerson:chatPerson});
  }
  openSearchPage(){
    this.nav.push(searchPage);
  }
}






