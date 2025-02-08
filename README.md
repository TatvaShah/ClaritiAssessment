This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli) for an assessment.

# Getting Started [Setup instructions]

> **Note**: Make sure you have completed the [Set Up Your Environment](https://reactnative.dev/docs/set-up-your-environment) guide before proceeding.

## Step 1: Start Metro

First, you will need to run **Metro**, the JavaScript build tool for React Native.

To start the Metro dev server, run the following command from the root of your React Native project:

```sh
# Using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Build and run your app

With Metro running, open a new terminal window/pane from the root of your React Native project, and use one of the following commands to build and run your Android or iOS app:

### Android

```sh
# Using npm
npm run android

# OR using Yarn
yarn android
```

### iOS

For iOS, remember to install CocoaPods dependencies (this only needs to be run on first clone or after updating native deps).

The first time you create a new project, run the Ruby bundler to install CocoaPods itself:

```sh
bundle install
```

Then, and every time you update your native dependencies, run:

```sh
bundle exec pod install
```

For more information, please visit [CocoaPods Getting Started guide](https://guides.cocoapods.org/using/getting-started.html).

```sh
# Using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up correctly, you should see your new app running in the Android Emulator, iOS Simulator, or your connected device.

This is one way to run your app — you can also build it directly from Android Studio or Xcode.

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

## Architecture of assessment

The project structure is organized as follows:

### `tests/`
- Contains all unit, integration, and UI tests.

### `android/`
- Android-specific configurations and code.

### `ios/`
- iOS-specific configurations and code.

### `App.tsx`
- Main entry point for the app, where the root component and navigation container are defined.

### `src/`
Contains the main source code for the app, organized into the following directories:

- **assets/**
  - Contains app assets like icons.

- **common/**
  - `CommonStyle`: Shared styles across the app.
  - `Theme`: Theme definitions to manage light/dark modes.
  - `Utils`: Helper functions and utilities.

- **component/**
  - Reusable UI components:
    - `BatteryHeader`: A component displaying battery status.
    - `Button`: Custom button component.
    - `Card`: Reusable card component.
    - `ErrorBoundary`: Error boundary for handling runtime errors.
    - `OfflineHandler`: Manages the app's offline behavior.

- **navigation/**
  - Contains the app's navigation logic, including the app container setup.

- **screens/**
  - `FeedScreen`: Displays the feed screen.
  - `SettingsScreen`: Contains settings-related functionality.

- **context/**
  - Context API for managing global app state, such as the theme state.

- **redux/**
  - Redux-related code for state management:
    - Store setup.
    - Slices for managing different pieces of state.
    - Actions for dispatching state updates.

- **types/**
  - TypeScript type definitions for the app.

---

## Packages & Libraries

This project uses the following packages and libraries:

### Core Libraries:
- **react-native-reanimated**: For handling animations.
- **react-native-gesture-handler**: For gesture-based navigation and interactions.
- **react-native-screens**: For optimizing navigation and screen management.
- **react-native-vector-icons**: For using vector icons in the app.

### Navigation:
- **react-navigation/native-stack**: Stack navigation for navigating between screens.
- **react-navigation/native**: Core navigation library for React Native.

### State Management:
- **react-redux**: For managing global state using Redux.
- **reduxjs/toolkit**: Provides a standard way to write Redux logic.
- **axios**: For making API calls.
- **react-query**: For handling data fetching, caching, and synchronization.

### Utilities:
- **react-native-community/netinfo**: For detecting network status (online/offline).
- **react-native-mmkv**: For fast storage and key-value data management.

### Testing:
- **@testing-library/jest-native**: Jest matchers for React Native.
- **@testing-library/react-native**: For testing React Native components in a way that mimics user behavior.

---
## Performance Optimization Strategies Used

### 1. Efficient State Management
- Utilized **Redux** for managing app-wide state and **Context** for managing global theme, which minimizes unnecessary re-renders by efficiently updating only relevant components.

### 2. FlatList Optimization
- Implemented **onEndReachedThreshold**, **refreshControl**, **keyExtractor**, and avoided inline functions to enhance **FlatList** scrolling performance and reduce render times.

### 3. Lazy Loading & Memoization
- Used **lazy loading** for images and **cached data** for offline mode, reducing unnecessary API calls and improving load times.

### 4. Event-Driven Updates
- Battery level changes are handled using a **native event listener**, preventing unnecessary polling and improving app performance by only updating the state when required.

### 5. Component Memoization with React.memo
- Used **React.memo(Card)** to memoize the `Card` component, preventing unnecessary re-renders when the props remain unchanged. This helps improve performance by ensuring that the `Card` component only re-renders when necessary, especially when rendering lists of cards.

---

## Assumptions & Trade-offs

### 1. Offline Handling Assumption
- The app assumes a stable **offline data storage** mechanism, but **data consistency** across sessions isn't fully guaranteed. Further improvements can be made in synchronizing offline and online data.

### 2. Native Module Simplicity
- The **BatteryModule** listens for battery events but doesn’t debounce updates on specific time interval.

### 3. Limited Accessibility Enhancements
- While accessibility labels are added to improve usability, full **WCAG compliance** was not prioritized during assessment, leaving room for improvement in this area.

### 4. Dependency on Sample API Data
- The **title**, **description**, **image** data displayed in the app are dependent on sample data from **JSONPlaceholder.com**. This assumption limits data variability and is used only for assessment purposes.

---

## Ideas for Future Improvements

### 1. Improve Offline Syncing
- Implement **background sync** to merge offline and online data seamlessly, providing a better user experience when switching between offline and online modes.

### 2. Enhance Test Coverage
- Improve **Jest setup** to cover more components and edge cases, ensuring that the app is thoroughly tested and more reliable over time.

### 3. Enhance Error Handling
- Improve the **ErrorBoundary** component to catch and handle more types of errors, including **network failures** or **component-specific issues**. Adding **user-friendly error messages** and a **fallback UI** could improve the user experience compared to global error handling UI.
  
---

# Troubleshooting

If you're having issues getting the above steps to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.
