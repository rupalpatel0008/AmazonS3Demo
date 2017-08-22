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

6. react-native-s3
    * npm install react-native-s3 --save

    * Android

      1. Edit android/settings.gradle of your project:
          ...
          include ':react-native-s3'
          project(':react-native-s3').projectDir = new File(settingsDir, '../node_modules/react-native-s3/android')
      2. Edit android/app/build.gradle of your project:
          ...
          dependencies {
            ...
            compile project(':react-native-s3')
          }
      3. Add package to MainApplication.java
        ```java
        ......

        import com.mybigday.rns3.*;   // import

        public class MainApplication extends Application implements ReactApplication {
        private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
          ......

          @Override
          protected List<ReactPackage> getPackages() {
            return Arrays.<ReactPackage>asList(
              new MainReactPackage(),
              new RNS3Package(),  // add package
            );
          }
        };

        ......
        }
        ```
      4. Edit android/app/src/main/AndroidManifest.xml of your project:
        ```xml
        <service
          android:name="com.amazonaws.mobileconnectors.s3.transferutility.TransferService"
          android:enabled="true" />
        ```
    * iOS

        NOTE Only supported iOS ^8.0.

        In XCode, in the project navigator:

        1. Right click Libraries ➜ Add Files to [your project's name], Add node_modules/react-native-s3/ios/RNS3.xcodeproj.
        2. Add libRNS3.a to your project's Build Phases ➜ Link Binary With Libraries
        3. Add $(SRCROOT)/../node_modules/react-native-s3/ios to Header Search Paths, and mark it as recursive.
        4. Add $(SRCROOT)/../node_modules/react-native-s3/ios/Frameworks to your project's Build Settings ➜ Framework Search Paths
        5. Add
            node_modules/react-native-s3/ios/Frameworks/AWSCognito.framework ,
            node_modules/react-native-s3/ios/Frameworks/AWSCore.framework ,
            node_modules/react-native-s3/ios/Frameworks/AWSS3.framework
          to your project's General → Embedded Binaries
        6. Edit AppDelegate.m of your project
        ```objective-c
        #import "RNS3TransferUtility.h"
          ....
        	- (void)application:(UIApplication *)application handleEventsForBackgroundURLSession:(NSString *)identifier completionHandler:(void (^)())completionHandler {
                  [RNS3TransferUtility interceptApplication:application
                        handleEventsForBackgroundURLSession:identifier
                                          completionHandler:completionHandler];
                }
          ....
        ```
