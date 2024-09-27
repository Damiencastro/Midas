import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection(
      { eventCoalescing: true }), 
      provideRouter(routes), 
      provideFirebaseApp(() => initializeApp( {
        "projectId":"midas-app-239bc",
        "appId":"1:880947371935:web:1e02db79c3e04b0be567aa",
        "storageBucket":"midas-app-239bc.appspot.com",
        "apiKey":"AIzaSyBefPwnb0z3xR2KZrgQ11pLVaK4guxiwp8",
        "authDomain":"midas-app-239bc.firebaseapp.com",
        "messagingSenderId":"880947371935"
      }
      )), 
    provideAuth(() => getAuth()), provideFirestore(() => getFirestore())]
};
