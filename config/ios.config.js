const { config } = require("./wdio.conf");
const IosInfo = require("./ios.info");
const path = require("path");

// Appium capabilities
config.capabilities = [
  {
    platformName: "iOS",
    noReset: true,
    fullReset: false,
    maxInstances: 1,
    automationName: "XCUITest",
    deviceName: IosInfo.deviceName(),
    platformVersion: IosInfo.platFormVersion(),
    app: IosInfo.appName(),
    udid: IosInfo.udid(),
  },
];

config.cucumberOpts.tagExpression = "@iosApp"; // pass tag to run tests specific to ios

exports.config = config;
