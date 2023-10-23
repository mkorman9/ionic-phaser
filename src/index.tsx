import Phaser from 'phaser';
import { initializeApp } from 'firebase/app';
import { FirebaseAuthentication } from '@capacitor-firebase/authentication';
import { Example } from './scenes/Example';
import { isPlatform } from '@ionic/react';

if (!isPlatform('capacitor')) {
  const firebase = {
    apiKey: "AIzaSyBGRQhxXTFc-z_UB81xGziP6YUajLhqT3E",
    authDomain: "my-playground-project-391323.firebaseapp.com",
    projectId: "my-playground-project-391323",
    storageBucket: "my-playground-project-391323.appspot.com",
    messagingSenderId: "71830756335",
    appId: "1:71830756335:web:150cf0a1413982178ff41a",
    measurementId: "G-ZHTLRTHHS2"
  };

  initializeApp(firebase);
}

// FirebaseAuthentication.removeAllListeners().then(() => {
//   FirebaseAuthentication.addListener('authStateChange', (change) => {
//     if (!change.user) {
//       FirebaseAuthentication.signInWithGoogle()
//         .then(result => console.log(result.user?.uid))
//         .catch(err => console.error(err));
//     } else {
//       console.log(change.user.displayName);
//     }
//   });
// });

const config = {
  type: Phaser.CANVAS,
  orientation: Phaser.Scale.PORTRAIT,
  width: 1080,
  height: 1920,
  autoRound: true,
  autoFocus: true,
  scale: {
    parent: 'root',
    autoCenter: Phaser.Scale.CENTER_BOTH,
    mode: Phaser.Scale.RESIZE
  },
  scene: Example,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 200 }
    }
  }
};

const game = new Phaser.Game(config);
