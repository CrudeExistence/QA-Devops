import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    await driver.get('http://localhost:3000/')
    await driver.sleep(4000)
})

afterAll(async () => {
    await driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test('Clicking the Draw button displays the div id "chocies', async () => {
    await driver.sleep(1000)
    const drawButton = await driver.findElement(By.id('draw'))
    await drawButton.click()
    await driver.sleep(2000)
    const botCard = await driver.findElement(By.className('bot-card outline'))
    expect(botCard).toBe(true)
})

test('Clicking "Add to Duo" button displays div is "player-duo"', async () => {
    await driver.sleep(1000)
    const addBtn = await driver.findElement(By.className('bot-btn'))
    await addBtn.click()
    const playerCard = await driver.findElement(By.id('player-duo'))
    expect(playerCard).toBe(true)
})


test('When selecting the See All Bots button it shows all the bots', async () => {
    await driver.sleep(1000)
    const seeAllBotsBtn = await driver.findElement(By.id('see-all'))
    await seeAllBotsBtn.click()
    const seeAll = await driver.findElement(By.id('all-bots'))
    expect(seeAll[1]).toBe(true)
})