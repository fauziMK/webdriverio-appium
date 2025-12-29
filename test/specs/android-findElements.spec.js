describe('Android Elements Tests', () => {
    it('Find Element by accessibility id', async () => {
        // Find element by accesibility id
        const appOption = await $('~App');

        // click on element
        await appOption.click();

        // assertion
        const actionBar = await $('~Action Bar');
        await expect(actionBar).toBeExisting();
    });

    it('Find element by class name', async () => {
        // find element by class name
        const className = await $('android.widget.TextView');

        // console.log(await className.getText());

        // assertion 
        await expect(className).toHaveText("API Demos");
    });

    xit('Find Elements by Xpath', async () => {
        // xpath - (//tagname[@attribute=value])
        await $('//android.widget.TextView[@content-desc="Alert Dialogs"]').click();
        // await driver.pause(5000);

        // find by resourceId
        await $('//android.widget.Button[@resource-id="io.appium.android.apis:id/select_button"]').click();

        // find element by text
        await $('//android.widget.TextView[@text="Command two"]').click();

        // find by class -> assertion 
        const textAssertion = await $('//android.widget.TextView');
        await expect(textAssertion).toHaveText("You selected: 1 , Command two");
    });

    it('Find elements by UiAutomator', async () => {
        // find by text contains
        await $('android=new UiSelector().textContains("Alert")').click()
    })

    it('Find multiple elements', async () => {
        const expectedList = [
            'API Demos', "Access'ibility", 'Accessibility', 'Animation', 'App',
            'Content', 'Graphics', 'Media', 'NFC', 'OS', 'Preference', 'Text', 'Views'
        ]
        const actualList = []

        // find multiple element
        const textList = await $$('android.widget.TextView');

        // loop through them
        for (const element of textList) {
            actualList.push(await element.getText());
        }

        // assert the list
        await expect(actualList).toEqual(expectedList);
    });

    it.only('Working with text input field', async () => {
        const expectedList = [
            'API Demos', 'Animation', 'Auto Complete', 'Buttons', 'Chronometer',
            'Controls', 'Custom', 'Date Widgets', 'Drag and Drop', 'Expandable Lists', 'Focus', 'Gallery', 'Game Controller Input',
            'Grid', 'Hover Events', 'ImageButton'
        ]
        const actualList = []

        // VIEWS
        // click menu Views
        const viewOption = await $('~Views');
        await viewOption.click();

        // assert list menu View
        const textList = await $$('android.widget.TextView');
        for (const element of textList) {
            actualList.push(await element.getText());
        }
        await expect(actualList).toEqual(expectedList);

        // AUTO COMPLETE
        // click menu Auto Complete
        const autoCompleteOption = await $('//*[@text="Auto Complete"]');
        await autoCompleteOption.click();

        // assert list menu Auto Complete
        const textListAutoComplete = await $$('android.widget.TextView')
        const actualListMenuAutoComplete = []
        const expectedListMenuAutoComplete = [
            'API Demos', '1. Screen Top', '2. Screen Bottom', '3. Scroll', '4. Contacts', '5. Contacts with Hint',
            '6. Multiple items'
        ]
        for (const element of textListAutoComplete) {
            actualListMenuAutoComplete.push(await element.getText());
        }
        await expect(actualListMenuAutoComplete).toEqual(expectedListMenuAutoComplete);

        // SCREEN TOP
        // click 1. Screen Top
        const screenTopOption = await $('~1. Screen Top');
        await screenTopOption.click();

        // Assert page screen top
        const titleMenu = await $('//android.widget.TextView[@text="Views/Auto Complete/1. Screen Top"]');
        await expect(titleMenu).toHaveText('Views/Auto Complete/1. Screen Top');

        // input 
        const textField = await $('//*[@resource-id="io.appium.android.apis:id/edit"]')
        await textField.addValue('Indonesia')

        // verify text has been added
        await expect(textField).toHaveText('Indonesia')
    });
})
