import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { MinePage } from '../pages/mine/mine';
import { page1Page } from '../pages/otherPage/page1';
import { chatPage } from '../pages/chat/chat';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { searchPage } from '../pages/searchPage/search';
import { chat1Page} from '../pages/chat1/chat1';
@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    MinePage,
    TabsPage,
    page1Page,
    chatPage,
    searchPage,
    chat1Page,


  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,
      { backButtonText: '返回',})
    /*这里修改可以把ionic2/3 内置的 [back] [ok] [cancel] 等按钮替换成中文*/
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    MinePage,
    TabsPage,
    page1Page,
    chatPage,
    searchPage,
    chat1Page
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {

}
