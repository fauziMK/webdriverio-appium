import { $, $$, expect, driver } from "@wdio/globals"

describe('iOS Find Elements', () => {
    it('find element by accessibility id', async () => {
        await $('~Alert Views').click()
        await $('~Simple').click()
        await expect(await driver.getAlertText()).toContain('A Short Title Is Best')
    })

    it('find by tag name', async () => {
        // single elemen
        await $('XCUIElementTypeStaticText').getText()

        const textEls = await $$('XCUIElementTypeStaticText');
        for (const elemen of textEls) {
            console.log('MULTIPLE ELEMEN =' + await elemen.getText())
        }
    })

    it('find element by xpath', async () => {
        // XPATH - (//tagname[@attribute="value"])

        // await $('//XCUIElementTypeStaticText[@name="Alert Views"]').click()
        // await $('//XCUIElementTypeStaticText[@name="Simple"]').click()

        // Cara Simpel
        await $('//*[@name="Alert Views"]').click()
        await $('//*[@name="Simple"]').click()
        await expect(await driver.getAlertText()).toContain('A Short Title Is Best')
    })

    it('find element by class chain', async () => {
        const alertText = '**/XCUIElementTypeStaticText[`label CONTAINS "Alert"`]';
        await $(`-ios class chain:${alertText}`).click();
        await $('//*[@label="Simple"]').click();
        await expect(await driver.getAlertText()).toContain('A Short Title Is Best');
    })

    it('find element by predicate sting', async () => {
        // options 1
        // const alertText = 'name == "Alert Views"'

        // options 2
        const alertText = 'value BEGINSWITH[c] "alert"'
        await $(`-ios predicate string:${alertText}`).click()
        await $('//*[@label="Simple"]').click();
        await expect(await driver.getAlertText()).toContain('A Short Title Is Best');
    })

    it.only('Exercise: Enter Text in the search field', async () => {
        await $('~Search').click()
        await $('~Default').click()

        // Type search
        const searchBar = await $('-ios class chain:**/XCUIElementTypeSearchField');
        await searchBar.click();
        await searchBar.addValue('I love this course!');
        await expect(searchBar).toHaveAttr('value');

        // Clear search
        await $('~Clear text').click()
        await expect(searchBar).not.toHaveAttr('value')
    })
})