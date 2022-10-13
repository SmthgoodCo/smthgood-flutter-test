class AndroidInfo {
  static deviceName() {
    return "Pixel_5_API_31_x86"; // pass the udid or devicename
  }

  static platFormVersion() {
    return "12"; // pass the platform version
  }

  static appName() {
    return "app-release.apk"; // pass the apk name
  }
}

module.exports = AndroidInfo;
