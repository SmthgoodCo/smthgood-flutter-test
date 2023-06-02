class HomePageScreen {
  constructor() {
    this.skipTutorialButton = '//android.view.View[3]'
    this.searchProductField = '//android.widget.ImageView[@text="Looking for something?"]'
    this.createLookBookBtn = '(//android.widget.ImageView[@index="3"])[2]'
  }
}

module.exports = new HomePageScreen()
