import path from 'path'
import { config } from './wdio.shared.conf.js'

// ============
// Runner Configuration
// ============
config.port = 4723;


// ============
// Specs
// ============
config.specs = [
    // ToDo: define location for spec files here
    path.resolve(process.cwd(), './test/specs/android/add-note-screen*.js')
];


// ============
// Capabilities
// ============
config.capabilities = [
    {
        'appium:platformName': 'Android',
        'appium:deviceName': 'Pixel 4',
        'appium:platformVersion': '12.0',
        'appium:automationName': 'UiAutomator2',
        'appium:app': path.join(process.cwd(), './app/android/ColorNote+Notepad.apk'),
        'appium:autoGrantPermissions': true
    }
]

export { config }