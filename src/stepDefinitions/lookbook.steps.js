const { Given, When, Then } = require('@cucumber/cucumber')
const LookBookPage = require('../pages/lookbook.page')
const lookBook = new LookBookPage()

When('I close {string} popup', async (title) => {
  console.log(`I close ${title}`)
  await lookBook.clickClose(title)
})

When('I click camera', async () => {
  console.log(`I click camera`)
  await lookBook.clickCamera()
})

When('I click allow', async () => {
  console.log(`I click allow`)
  await lookBook.clickAllow()
})

When('I accept image', async () => {
  console.log(`I accept image`)
  await lookBook.clickDone()
})

When('I click many select {string}', async (item) => {
  console.log(`I click many select ${item}`)
  await lookBook.clickManySelect(item)
})

When('I click plus button in {string}', async (item) => {
  console.log(`I click plus button at ${item}`)
  await lookBook.clickPlusButton(item)
})

When('I click favorite {string}', async (item) => {
  console.log(`I click favorite ${item}`)
  await lookBook.clickFavorite(item)
})

When('I select image in {string} with index {int}', async (item, i) => {
  console.log(`I select image in ${item} with index ${i}`)
  await lookBook.selectImageInItem(item, i)
})

Then('I can see {int} images in LookBook Editor', async (image) => {
  console.log(`I can see ${image} images in LookBook Editor`)
  await lookBook.imageUploaded(image)
})
