describe('Android Native Feature Tests', () => {
    it('Access an Activity Directly', async () => {
        // Access activity
        await driver.startActivity("io.appium.android.apis", ".app.AlertDialogSamples");

        // pause 3s
        await driver.pause(3000)
        // Assertion
        await expect($('//*[@text="App/Alert Dialogs"]')).toExist();
    })

    it('Working with Dialog Box', async () => {
        // click on first 
        await $('//*[@resource-id="io.appium.android.apis:id/two_buttons"]').click()

        // accept alert
        // await driver.acceptAlert();

        // dismiss alert
        // await driver.dismissAlert();

        // get alert text
        console.log('ALERT TEXT -->', await driver.getAlertText());

        // click on OK button
        await $('//*[@resource-id="android:id/button1"]').click();

        // assertion - alert box is no longer visible
        await expect($('//*[@resource-id="android:id/alertTitle"]')).not.toExist();
    })

    it('Vertical Scrolling', async () => {
        // route to App > Activity
        await $('~App').click();
        await $('~Activity').click();

        // scroll to the end -> scrollToEnd(how many scroll allowed, speed) => not stable if element gets moved
        // await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)');

        // scrollTextIntoView - more stable
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Secure Surfaces")').click();
        // await $('~Secure Surfaces').click();

        // assertion
        await expect($('~Secure Dialog')).toExist()
    })

    it('Horizontal Scrolling', async () => {
        await driver.startActivity("io.appium.android.apis", ".view.Gallery1");

        // assertion page Gallery photo
        const classNameTitle = await $('android.widget.TextView');
        await expect(classNameTitle).toHaveText('Views/Gallery/1. Photos');

        // Horizontal Scroll
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()');
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollBackward()');
        await driver.pause(3000);
    })

    it.only('Case Study - Calender Scrolling', async () => {
        // redirect to date widget menu
        await $('~Views').click();
        await $('~Date Widgets').click();
        await $('~1. Dialog').click();
        await expect($('android.widget.TextView').toHaveText('Views/Date Widgets/1. Dialog'));

        const date = await $('//*[@resource-id="io.appium.android.apis:id/dateDisplay"]');
        const currentDate = await date.getText();

        // open calendar
        await $('~change the date').click();
        await expect($('//android:id/date_picker_header_year').toHaveText('2025'));

        // scroll and change date to 10 
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()');
        await $('//*[@text="10"]').click();
        await $('//*[@resource-id="android:id/button1"]').click();

        // assertion success change date
        await expect(await date.getText()).not.toEqual(currentDate);
    })
});