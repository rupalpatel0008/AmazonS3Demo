# AwsDemo
## This is a react native demo for AWS s3 in react native

## Dependencies
1. react-redux
    * npm install react-redux --save

2. redux
    * npm install redux --save

3. redux-thunk
    * npm install redux-thunk --save

4. react-native-image-picker
    * npm install react-native-image-picker@latest --save

    * react-native link react-native-image-picker

    ### Android Setup
    * Update the android build tools version to 2.2.+ in android/build.gradle:
        buildscript {
            ...
            dependencies {
                classpath 'com.android.tools.build:gradle:2.2.+' // <- USE 2.2.+ version
            }
            ...
        }

    * Update the gradle version to 2.14.1 in android/gradle/wrapper/gradle-wrapper.properties:

        ...
        distributionUrl=https\://services.gradle.org/distributions/gradle-2.14.1-all.zip

    * Add the required permissions in AndroidManifest.xml:

        <uses-permission android:name="android.permission.CAMERA" />
        <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE"/>

    ### IOS setup
    * For iOS 10+, Add the NSPhotoLibraryUsageDescription, NSCameraUsageDescription, and NSMicrophoneUsageDescription (if allowing video) keys to your Info.plist with strings describing why your app needs these permissions. Note: You will get a SIGABRT crash if you don't complete this step.
     Eg.
      NSPhotoLibraryUsageDescription = Uses Photo Library to get user's picture
      NSCameraUsageDescription = Uses Camera to get user's picture

5. Spinner
    * npm install --save react-native-loading-spinner-overlay@latest
    
