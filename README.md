# How to set-up the project

## Install the React Native
You should follow the official documentation:
https://facebook.github.io/react-native/docs/getting-started

### By the end you need to have the following items(list updated in 09/2019):
- Java Development Kit (JDK 8)
- Nodejs (https://nodejs.org/en/download/)
- react-native cli
```
npm install -g react-native-cli
```
- Android Studio
    - Android SDK
    - Android SDK Platform
    - Android Virtual Device
    - Android SDK 9 (Pie)
    - Android SDK Platform 28
    - Intel x86 Atom_64 System Image or Google APIs Intel x86 Atom System Image

- The ANDROID_HOME environment variable
```
export ANDROID_HOME=$HOME/Android/Sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/tools/bin
export PATH=$PATH:$ANDROID_HOME/platform-tools
```

## How to run in a real device
If you do not has much RAM or want to run in a real device you should follow this:
https://facebook.github.io/react-native/docs/running-on-device

## How to run the development app in your mobile phone

### 1- Install app dependencies
After installing all the react-native dependencies you have to install the app dependencies. Enter in the root folder and run:
```
npm install
```
This command will get install all the dependencies listed in package.json file. (Every lib/plugin that we install in our app will be listed here). More information can be found in this url: https://www.npmjs.com/

This command should be running again every time that a new dependency is installed.

### 2- create the Keystore file
Enter in android/app/ directory:

```
cd android/app/
```

run:
```
keytool -genkey -v -keystore debug.keystore -storepass android -alias androiddebugkey -keypass android -keyalg RSA -keysize 2048 -validity 10000
```

This command should be run only once. After that you can come back to root project folder.

```
cd .. && cd ..
```

### 3- run the server
```
react-native start
```

The server will send all the information from our project to the app instaled in cellphone. After run this command keep this terminal tab open. If you close the server closes.

### 4- Install the development app in mobile phone
```
react-native run-android
```
This command will install the app in the connected device.

## How to make changes
- After install the development app keeping the server open. 

- You can now start to change the .js files of the project.

- To see the changes in your phone you must to shake it some times (left - right) to open the menu with options. In menu you can choose the "Reload" option. 

- If you don't want to shake the phone many times you can enable the Hot and Live Reload options. That way every time you update a file the app will update too.

## How to build
https://facebook.github.io/react-native/docs/signed-apk-android