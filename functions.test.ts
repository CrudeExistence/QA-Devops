import { Driver } from "selenium-webdriver/chrome"
const {shuffleArray} = require('./utils')
const {bots} = require('./data')

// const {Builder, Capabilities, By} = require('selenium-webdriver')

// require('chromedriver')

// const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

// beforeAll(async () => {
//     await driver.get('http://localhost:3000')
// })


// afterAll(async () => {
//     await driver.quit()
// })





// beforeAll(async () => {
//     await Driver.get('http://localhost:3000')
// })

describe('shuffleArray should', async () => {
    // await Driver.sleep(2000)
    test('Should see if ShufflyArray returns an array', () => {
        expect(shuffleArray).toEqual('array')
    })

    //! skipping for now because I don't even know
    //! test('Should check that it returns an array of the same length as the argument sent in', () => {

    //! })


    test('Should check that all the same items are in the arrray', () => {
        expect(shuffleArray).toEqual(bots)
    })

    test('Should check that the items have been shuffled around', () => {
        expect(shuffleArray).not.toBe(bots)
    })

})