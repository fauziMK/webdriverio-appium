import ListScreen from "../../screenobjects/ios/list.screen";
import ItemScreen from "../../screenobjects/ios/item.screen";


describe('Todo List', () => {
    it('Create todo list', async () => {
        // Make to do list name
        await ListScreen.createListBtn.click()
        await ListScreen.listNameInput("Things to do today")
        await ListScreen.createBtn.click()

        await expect(await ListScreen.listNameField('Things to do today')).toBeExisting()

        // Make item
        await ListScreen.listNameField('Things to do today').click()
        await ItemScreen.createItem.click()
        await ItemScreen.title.addValue("buy groceries")
        await ItemScreen.dueDate.click()
        await ItemScreen.getByAccessibility("Tuesday, 23 December").click()
        await ItemScreen.createBtn.click()

        // Assertion
        const todoTitle = await $('-ios class chain:**/XCUIElementTypeStaticText[`name == "buy groceries"`]');
        await expect(todoTitle).toBeDisplayed();
        await expect(todoTitle).toHaveText('buy groceries');
        await expect(await $('~Due Tomorrow')).toBeExisting()
    })
})