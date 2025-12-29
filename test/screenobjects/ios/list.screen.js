class ListScreen {
    get createListBtn() {
        return $('//*[@name="Create list"]')
    }

    async listNameInput(value) {
        return $('//*[@value="List Name"]').addValue(value)
    }

    get createBtn() {
        return $('~Create')
    }

    listNameField(name) {
        return $(`~${name}`)
    }
}

export default new ListScreen();