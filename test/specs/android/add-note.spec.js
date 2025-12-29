describe('Add Notes', () => {
    it('Skip tutorial', async () => {
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/btn_start_skip"]').click();
        await expect($('//*[@text="Add note"]')).toBeDisplayed();
    })

    it('Add note, save change & verify note', async () => {
        await $('//*[@text="Add note"]').click()
        await $('//*[@text="Text"]').click()
        await expect($('//*[@text="Editing"]')).toBeDisplayed();

        // add note title
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_title"]')
            .setValue('Favourite Football Club')
        // *
        // setValue() clear the value before adding
        // addValue() just add the value directly
        //*//

        // add note body
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_note"]')
            .addValue('Persib\nChelsea\nPersikoci')

        // save the changes
        await driver.back()

        // assertion
        await expect($('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_btn"]')).toBeDisplayed();
        await expect($('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/view_note"]'))
            .toHaveText('Persib\nChelsea\nPersikoci');

        // Back to list data 
        await driver.back()
    })

    it('Delete Note & check on trash can', async () => {
        const note_title = await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]').getText()

        // Choose data on list data
        await $('//*[@text="Favourite Football Club"]').click()
        await expect($('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/view_note"]'))
            .toHaveText('Persib\nChelsea\nPersikoci');

        // click button action delete
        await $('~More').click()
        await $('//*[@text="Delete"]').click();
        await expect($('//*[@resource-id="android:id/message"]')).toHaveText('Are you sure you want to move the note to the trash can?')

        // click OK on confirmation modals delete
        await $('//*[@resource-id="android:id/button1"]').click()
        await expect($('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/note_list"]')).not.toHaveText('Favourite Football Club')

        // click navbar menu button
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/icon_nav"]').click()

        // click trash can menu
        await $('//*[@text="Trash Can"]').click();

        const trashCanItem = await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]').getText()
        await expect(trashCanItem).toEqual(note_title);

        // if use toHaveText = getText()
    })
})