class DashboardScreen {
  constructor() {
    this.skipTutorialButton = '//android.view.View[@index="2"]'
    this.sectionOnDashboard = '//android.widget.ImageView[@content-desc="%s"]'
    this.searchProductField = '//android.widget.ImageView[@text="Looking for something?"]'
    this.productName = '//android.widget.ImageView[contains(@content-desc, "%s")]'
    this.buttonOnScreen = '//android.widget.Button'
  }
}

module.exports = new DashboardScreen()
