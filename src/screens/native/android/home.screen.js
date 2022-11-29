class HomePageScreen {
  constructor() {
    this.skipTutorialButton = '//android.view.View[@index="2"]'
    this.searchProductField = '//android.widget.ImageView[@text="Looking for something?"]'
    this.buttonOnScreen = '//android.widget.Button'
    this.createLookBookBtn = '(//android.widget.ImageView[@index="3"])[2]'
  }
}

module.exports = new HomePageScreen()
