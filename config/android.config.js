const { config } = require("./wdio.conf");
const AndroidInfo = require("./android.info");
const path = require("path");

// Appium capabilities
config.capabilities = [
  {
    platformName: "Android",
    noReset: false,
    fullReset: false,
    maxInstances: 1,
    // appPackage: "com.zimplistic.rotimaticmobile",
    // appActivity: "com.zimplistic.rotimaticmobile.v1.activity.SplashActivity",
    // uid: "emulator-5554",
    automationName: "uiautomator2",
    deviceName: AndroidInfo.deviceName(),
    platformVersion: AndroidInfo.platFormVersion(),
    app: path.resolve(`./apps/android/${AndroidInfo.appName()}`),
  },
];

config.cucumberOpts.tagExpression = "@androidApp"; // pass tag to run tests specific to android

exports.config = config;
