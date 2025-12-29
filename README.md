# Appium WebdriverIO Mobile Automation

## Overview

This repository is a portfolio-oriented research project focused on mobile automation testing using **WebdriverIO (WDIO)** with **Appium**. The project demonstrates best practices in scalable test automation, cloud device execution, CI/CD integration, and reporting.

## Tech Stack

* **WebdriverIO** – Test automation framework
* **Appium** – Mobile automation for iOS & Android
* **JavaScript (ES Modules)**
* **BrowserStack** – Cloud real device testing
* **GitHub Actions** – CI/CD pipeline
* **Allure Report** – Test reporting and analytics

## Project Architecture

The project follows the **Page Object Model (POM)** design pattern to ensure:

* High maintainability
* Clear separation of test logic and UI interaction
* Reusability of page components

```
project-root/
│── test/
│   ├── specs/
│   │   └── ios/
│   ├── pageobjects/
│   └── utils/
│── config/
│── .github/workflows/
│── wdio.conf.js
│── package.json
```

## Features

* Mobile automation using WDIO + Appium
* Page Object Model implementation
* Parallel execution on real devices via BrowserStack
* CI execution using GitHub Actions
* Rich test reports with Allure

## Running Tests Locally

```bash
npm install
npx wdio run wdio.conf.js
```

## Running Tests on BrowserStack

Make sure the following environment variables are set:

```bash
BROWSERSTACK_USERNAME=your_username
BROWSERSTACK_ACCESS_KEY=your_access_key
```

Then run:

```bash
npx wdio run wdio.browserstack.conf.js
```

## CI/CD

This project integrates **GitHub Actions** to automatically:

* Install dependencies
* Execute automation tests
* Generate Allure reports
