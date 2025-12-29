import { describe, it, expect } from '@wdio/globals'

describe('Todo List', () => {
    it('Create todo list', async () => {
        // Make to do list name
        await $('//*[@name="Create list"]').click()
        await $('//*[@value="List Name"]').addValue("Things to do today")
        await $('~Create').click()

        await expect(await $('~Things to do today')).toBeExisting()

        // Make item
        await $('~Things to do today').click()
        await $('//*[@name="Create item"]').click()
        await $('//*[@value="Title"]').addValue("buy groceries")
        await $('//*[@value="Due"]').click()
        await $('~Tuesday, 23 December').click()
        await $('~Create').click()

        // Assertion
        const todoTitle = await $('-ios class chain:**/XCUIElementTypeStaticText[`name == "buy groceries"`]');
        await expect(todoTitle).toBeDisplayed();
        await expect(todoTitle).toHaveText('buy groceries');
        await expect(await $('~Due Tomorrow')).toBeExisting()
    })
})