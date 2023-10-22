# ionic-firebase

Ionic project integrated with Phaser game engine and Firebase Sign in with Google.

## Use this project as a template

- Copy everything except `android` and `ios` folders
- Change bundle name and appId
- Run `npm ci`
- Add platforms

```sh
ionic capacitor add android
ionic capacitor add ios
```

- Follow Firebase integration steps from `Firebase integration` section

- Sync changes with

```sh
ionic capacitor sync android

# OR

ionic capacitor sync ios
```

- Build project with Android Studio or XCode

## Firebase integration

- Follow https://github.com/capawesome-team/capacitor-firebase/tree/main/packages/authentication
- Follow https://github.com/capawesome-team/capacitor-firebase/blob/main/docs/firebase-setup.md
- Follow https://github.com/capawesome-team/capacitor-firebase/blob/main/packages/authentication/docs/setup-google.md
