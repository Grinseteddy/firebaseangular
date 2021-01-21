// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here. Other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/8.2.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.1/firebase-messaging.js');

// // Initialize Firebase

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object

var firebaseConfig = {
  apiKey: 'AIzaSyA3P4PzEziycoCNYhDCkCK6dvowPM-41kU',
  authDomain: 'pushtest-6eb22.firebaseapp.com',
  projectId: 'pushtest-6eb22',
  storageBucket: 'pushtest-6eb22.appspot.com',
  messagingSenderId: '86903917885',
  appId: '1:86903917885:web:4dd4ab2005869988e10954',
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

// If you would like to customize notifications that are received in the
// background (Web app is closed or not in browser focus) then you should
// implement this optional method.
// [START on_background_message]

messaging.onBackgroundMessage(function (payload) {
  // Customize notification here
  var notif = JSON.parse(payload.data.notification);
  const notificationTitle = 'Notif. title';
  const notificationOptions = {
    title: notif.title,
    body: notif.body,
    icon: '/firebase-logo.png',
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
