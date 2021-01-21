import { BrowserModule } from '@angular/platform-browser';
import {NgModule, OnInit} from '@angular/core';

import { AppComponent } from './app.component';
import {AngularFireMessagingModule} from '@angular/fire/messaging';
import {AngularFireModule} from '@angular/fire';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp({ /* See project settings in Firebase Console for this information */
      apiKey: 'AIzaSyA3P4PzEziycoCNYhDCkCK6dvowPM-41kU',
      authDomain: 'pushtest-6eb22.firebaseapp.com',
      projectId: 'pushtest-6eb22',
      storageBucket: 'pushtest-6eb22.appspot.com',
      messagingSenderId: '86903917885',
      appId: '1:86903917885:web:4dd4ab2005869988e10954'
    }),
    AngularFireMessagingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule implements OnInit {

  ngOnInit() {
    console.log('Initializing');

  }

}


