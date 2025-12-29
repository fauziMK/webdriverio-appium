class AddNoteScreen {
    get skipBtn() {
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/btn_start_skip"]')
    }

    get addNoteTxt() {
        return $('//*[@text="Add note"]')
    }

    // if not using the getter function
    async addTextNote() {
        const addText = await $('//*[@text="Text"]')
        await addText.click()

        const editingTxt = await $('//*[@text="Editing"]')
        await expect(editingTxt).toBeDisplayed()
    }

    async inputTitle(text) {
        const title = await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_title"]')
        await title.setValue(text)
    }

    async inputBody(text) {
        const body = await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_note"]')
        body.addValue(text)
    }

    async save() {
        await driver.back()
        await driver.back()
    }

    get editButton() {
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_btn"]')
    }

    get noteContent() {
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/view_note"]')
    }
}

export default new AddNoteScreen();