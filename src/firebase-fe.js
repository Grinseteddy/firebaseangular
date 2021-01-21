writeOut('Initializing firebase...');

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyA3P4PzEziycoCNYhDCkCK6dvowPM-41kU',
  authDomain: 'pushtest-6eb22.firebaseapp.com',
  projectId: 'pushtest-6eb22',
  storageBucket: 'pushtest-6eb22.appspot.com',
  messagingSenderId: '86903917885',
  appId: '1:86903917885:web:4dd4ab2005869988e10954',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Write out progress to page
writeOut('Successfully initialized firebase');

// Retrieve firebase messaging object
const messaging = firebase.messaging();

messaging.usePublicVapidKey(
  'BBRTIKHXJlPlRo4bX6BRrLx6yLbkJjcZkM3cxq-GFn_P9Ir62JCbSaxOuM7-b_sobDiqZbnPIuIgxAwfTsxETOo'
);

//register service worker
navigator.serviceWorker
  .register('firebase-messaging-sw.js')
  .then(function (registration) {
    writeOut('Successfully registered service worker');
    console.log('Service Worker Registered!', registration);
  })
  .catch(function (err) {
    writeOut('Service worker registration failed');
    console.error('Service Worker registration failed', err);
  });

messaging.requestPermission().then(function () {
  console.log('Notification permission granted.');
});

writeOut('Requesting token...');

// Get registration token. Initially this makes a network call, once retrieved
// subsequent calls to getToken will return from cache.
messaging
  .getToken()
  .then((currentToken) => {
    if (currentToken) {
      writeOut('');
      writeOut('');
      writeOut('Received Token:');
      writeOut(currentToken);
      // TODO: sendTokenToServer(currentToken);
    } else {
      // Show permission request.
      writeOut(currentToken);
      console.log(
        'No registration token available. Request permission to generate one.'
      );
      // TODO: setTokenSentToServer(false);
    }
  })
  .catch((err) => {
    console.log(
      'An error occurred while retrieving token. ',
      err
    );
    writeOut('Error retrieving registration token: ' + err);
    // TODO: setTokenSentToServer(false);
  });

messaging.onMessage((payload) => {
  var notif = JSON.parse(payload.data.notification);
  writeMessage(notif.title, notif.body);
//            console.log(payload);
});

function writeOut(text) {
  console.log('push_progress: '+text);
}

function writeMessage(title, body) {
  showBox('box');
  document.getElementById('message_title').innerHTML = title;
  document.getElementById('message_body').innerHTML = body;
  document.getElementById('msg_title').innerHTML = 'Received messages:';
  document.getElementById('msg_list').innerHTML += '<h2>' + title + '</h2><p>' + body + '</p><br>';
}

function showBox(id){
  var box = document.getElementById(id);
  box.style.display = "block";
}

function hideBox(id){
  var box = document.getElementById(id);
  box.style.display = "none";
}

function testButton(){
  showBox('box');
  writeMessage('title', 'body');
}

