import AddNoteScreen from "../../screenobjects/android/add-note.screen";
import DeleteNoteScreen from "../../screenobjects/android/delete-note.screen";

describe('Add Notes & Delete Notes - Using Page Object Models', () => {
    it('Skip tutorial', async () => {
        await AddNoteScreen.skipBtn.click()
        await expect(AddNoteScreen.addNoteTxt).toBeDisplayed()
    })

    it('Add note, save change & verify note', async () => {
        // route to text editor
        await AddNoteScreen.addNoteTxt.click()
        await AddNoteScreen.addTextNote()

        // add title & body content
        await AddNoteScreen.inputTitle('Favourite Football Club')
        await AddNoteScreen.inputBody('Persib\nChelsea\nPersikoci')
        await AddNoteScreen.save();
        await expect(AddNoteScreen.editButton).toBeDisplayed();
        await driver.pause(3000)

        // back to list data
        await driver.back()
    })

    it('Delete Note & check on trash can', async () => {
        const note_title = await DeleteNoteScreen.labelNoteTitle.getText();

        // Choose data on list data
        await DeleteNoteScreen.noteData('Favourite Football Club', 'Persib\nChelsea\nPersikoci')

        // click button action delete
        await DeleteNoteScreen.clickMoreBtn()
        await DeleteNoteScreen.clickDeleteBtn()
        await expect(DeleteNoteScreen.confirmMessageDelete)
            .toHaveText('Are you sure you want to move the note to the trash can?')
        await driver.acceptAlert()

        // click navbar menu button
        await DeleteNoteScreen.clickMenuNavbar()
        await DeleteNoteScreen.clickMenuTrashCan()

        // Assert make sure data has been deleted on Trash Can
        const trashCanItem = await DeleteNoteScreen.labelNoteTitle
        await expect(trashCanItem).toHaveText(note_title)
    })
})