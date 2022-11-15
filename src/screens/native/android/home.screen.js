class HomePageScreen {
  constructor() {
    this.skipTutorialButton = '//android.view.View[@index="2"]'
    this.searchProductField = '//android.widget.ImageView[@text="Looking for something?"]'
    this.buttonOnScreen = '//android.widget.Button'
  }
}

module.exports = new HomePageScreen()
