class DeleteNoteScreen {
    get labelNoteTitle() {
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]')
    }

    // Data note on list data
    async noteData(text, content) {
        await $(`//*[@text="${text}"]`).click()
        await expect($('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/view_note"]'))
            .toHaveText(content);
    }

    // Action More Component
    async clickMoreBtn() {
        await $('~More').click();
    }

    async clickDeleteBtn() {
        await $('//*[@text="Delete"]').click();

    }

    get confirmMessageDelete() {
        return $('//*[@resource-id="android:id/message"]')
    }

    async clickMenuNavbar() {
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/icon_nav"]').click()
    }

    async clickMenuTrashCan() {
        await $('//*[@text="Trash Can"]').click();
    }
    // End of Action More Component
}

export default new DeleteNoteScreen();