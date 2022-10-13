
# :iphone: SmthGood Mobile Automation :iphone:

A brief description of what this automation scripts do and how to run it


## Required	:key:

 - [Java - Setup environment variable](https://confluence.atlassian.com/doc/setting-the-java_home-variable-in-windows-8895.html)
 - [Android Studio - For simulator and environment variables](https://github.com/matiassingers/awesome-readme)
 - [Appium Server GUI - Hosting Appium](https://github.com/appium/appium-desktop)
 - [Appium Inspector - Inspect elements](https://github.com/appium/appium-inspector)
 - [NodeJS](https://nodejs.org/en/)
 - [WebdriverIO - Does not need installation](https://webdriver.io/)


## Installation :hammer_and_wrench:

Open terminal in the project location and run:

```bash
  npm install
```

There might be some conflict between the WebdriverIO version and NPM. If you encounter any issue while installing, try:
- Remove the "node_modules" folder and rerun the Installation.
- If the first option does not work, try lowering the Nodejs verison. This is the verisons of Node and Npm I use.

```bash
  npm: '8.5.4'
  node: '16.8.0'
```
## Running Tests :running:

:point_right: To run tests, you need to config the Android/iOS configuration in the config files:

```
└───config
    ├───android.config.js
    ├───android.info.js
    ├───androidBrowser.config.js
    ├───ios.config.js
    ├───ios.info.js
    ├───iosBrowser.config.js
    └───wdio.conf.js
```
Open android.info.js for example:
```javascript
class AndroidInfo {
  static deviceName() {
    return "Your device's name"; // pass the udid or devicename
  }

  static platFormVersion() {
    return "Your device's platform version"; // pass the platform version
  }

  static appName() {
    return "app-release.apk"; // pass the apk name
  }
}

module.exports = AndroidInfo;
```
From there, you can change the device's information into yours.

:point_right: After that, you need to open Appium Server and start it.

![image](https://user-images.githubusercontent.com/102946158/168244724-9d3a0af5-6b7f-44fe-a773-3a487316ae7a.png)

:point_right: Now run the script

```bash

  npm run android

```

Then you can see the script is running: 

![image](https://user-images.githubusercontent.com/102946158/168246551-da3a72d8-9065-4e84-bdf1-fb9ebd5be2b0.png)


## :bangbang: IMPORTANT NOTE :bangbang:

:red_circle: On Android, you can change the app version by changing the APK file in the apps folder. But on iOS, you need to manually install the new version of the app on your devices.

:red_circle: When you need changing credentials, just jump into that feature file and change in the step:
![image](https://user-images.githubusercontent.com/102946158/168245927-7e95ecdf-8f1d-433f-bf7e-728a30b23a15.png)

:red_circle: On the Sign up case, please move Chrome/Safari icon to the front of your screen so that the scripts can locate the browser after closing the app.

![image](https://user-images.githubusercontent.com/102946158/168258567-3f18e9de-f011-4b82-9379-f02c1a432d2b.png)


Also, since there is no way to reuse one email address after signing up, whenever you run the case, please change the email address in the feature file:

![image](https://user-images.githubusercontent.com/102946158/168246159-c59d4a01-4945-480b-a5d4-0450411335d0.png)

Remember to replace all email in Sign up feature file too 🙂
## Generate report :clipboard:

You can generate your own report using [Allure Reporter](https://webdriver.io/docs/allure-reporter):

```bash
  allure generate allure_results
  allure open
```

Then you can see the report opening in browser:

![image](https://user-images.githubusercontent.com/102946158/168246758-95f9e64a-ce31-4102-840a-eae178b09a84.png)

