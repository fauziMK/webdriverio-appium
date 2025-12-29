import path from 'path'
import { config } from './wdio.shared.conf.js'

// ============
// Runner Configuration
// ============
config.port = 4723;
import fs from 'fs'

console.log(
    'SPEC EXISTS:',
    fs.existsSync('./test/specs/ios/exercise.spec.js')
)


// ============
// Specs
// ============
config.specs = [
    // ToDo: define location for spec files here
    path.resolve(process.cwd(), './test/specs/ios/ios-todo-list-screen.spec.js')
];

// ============
// Capabilities
// ============
config.capabilities = [
    {
        'appium:platformName': 'ios',
        'appium:deviceName': 'iPhone 16',
        'appium:platformVersion': '18.6',
        'appium:automationName': 'XCUITest',
        'appium:app': path.join(process.cwd(), './app/ios/MVCTodo.app'),
    }
]

// Test runner services
// Services take over a specific job you don't want to take care of. They enhance
// your test setup with almost no effort. Unlike plugins, they don't add new
// commands. Instead, they hook themselves up into the test process.
config.services['appium']

export { config }