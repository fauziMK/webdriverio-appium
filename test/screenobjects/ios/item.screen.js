class ItemScreen {
    get createItem() {
        return $('//*[@name="Create item"]')
    }

    get title() {
        return $('//*[@value="Title"]')
    }

    get dueDate() {
        return $('//*[@value="Due"]')
    }

    get createBtn() {
        return $('~Create')
    }

    getByAccessibility(accesibilityId) {
        return $(`~${accesibilityId}`)
    }
}

export default new ItemScreen()