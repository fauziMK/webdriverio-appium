import dotenv from 'dotenv'
dotenv.config()
import path from 'path'
import { config } from './wdio.shared.conf.js'

// ============
// Browserstack Credentials
// ============
config.user = process.env.BROWSERSTACK_USER
config.key = process.env.BROWSERSTACK_KEY

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
        platformName: 'Android',
        'appium:deviceName': 'Google Pixel 6',
        'appium:platformVersion': '12.0',
        'appium:automationName': 'UiAutomator2',
        'appium:app': 'bs://5dda749b624354695a5973ba6977d07d813f450d',
        'appium:autoGrantPermissions': true
    }
]

// Test runner services
// Services take over a specific job you don't want to take care of. They enhance
// your test setup with almost no effort. Unlike plugins, they don't add new
// commands. Instead, they hook themselves up into the test process.
config.services = ['browserstack']

export { config }