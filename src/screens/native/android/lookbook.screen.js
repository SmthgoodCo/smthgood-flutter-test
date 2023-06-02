class LookBookPageScreen {
  constructor() {
    this.allowButton = '//android.widget.Button[@text="Allow"]'
    this.closeBtn = '//android.view.View[@content-desc="%s"]/..//android.widget.ImageView'
    this.cameraButton = '//android.view.View[@content-desc="No photo in your device"]/android.widget.ImageView'
    this.doneButton = '//android.widget.ImageButton[@content-desc="Done"]'
    this.imageUploaded = '//android.view.View[3]/android.view.View[2]'
    this.allowManySelectIcon = '//android.view.View[@content-desc="%s"]/following-sibling::android.widget.ImageView'
    this.plusButton = '//android.widget.ImageView[@content-desc="START CREATING "]/android.view.View[1]/android.view.View/android.view.View/android.widget.ImageView'
    this.imageInItem = '//android.view.View[@content-desc="%s"]/../../android.view.View[2]//android.widget.ImageView[@index="%s"]'
    this.favoriteIcon = '//android.view.View[contains(@content-desc,"%s")]/..//android.widget.ImageView[2]'
  }
}

module.exports = new LookBookPageScreen()
