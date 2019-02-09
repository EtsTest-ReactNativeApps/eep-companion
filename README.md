# EEP Companion
EEP Companion is a smartphone app companion for an *educational environmental path* located in Stoumont, Belgium. It is a proof-of-concept prototype created for the "ORA: Non Formal Environmental Education to enhance youth inclusion" project.

The goal of the project is to explore the options of using smartphone technology to solve specific problems of EEPs, and publish the resulting code and findings for use by other educational ecology organizations.

Environmental educational materials previously created by ORA:
http://oranetwork.eu/index.php/131.html
http://oracapacitybuilding.weebly.com/resources.html

## APP Documentation
During the development this app has been tested on Android physical device and emulator. The codebase should be able to run also on iOS, but due to having no iOS device to test with there might be bugs.

The following directions are written with Linux console in mind, but you should be able to adapt it to Windows or MacOS.

### Dev dependencies
For working with this code you will need:
* npm
* Android SDK (recommended install is through [Android Studio](https://developer.android.com/studio/))
	* SDK tools v. 26.1.1 or higher
* either a physical or an emulated device
	* Android 5.1 (Lollipop) or higher

### Instalation
1. Clone this repository.
1. From within the project folder, run `npm -i`

### Running the code
1. Connect the device with turned on debugging mode (see [React Native documentation](https://facebook.github.io/react-native/docs/running-on-device)), or run the emulator (see [Android SDK documentation](https://developer.android.com/studio/run/emulator))
1. In one console window, navigate to the project folder and run `react-native start`
1. In another console window, run `react-native run-android`

### Known issues
* Path step markers on MapScreen do not listen to touch events if remote debugger is active. This is a known bug in react-native-mapbox-gl; it might be possible to upgrade/downgrade the library to fix this, but proceed with caution - React Native version compatibility between modules is fragile.

### License
This project is distributed under the GNU GPLv3 license (for details see the `LICENSE` file).

### Screenshots

-----

## Credits
![EU logo](logos/EU_flag_yellow_high_200x133.jpg)

Co-funded by the  Erasmus+ programme of the European Union.

>The European Commission support for the production of this publication does not constitute an endorsement of the contents which reflects the views only of the authors, and the Commission cannot be held responsible for any use which may be made of the information contained therein.

### Creators
**Project facilitators:** Branislav Ristić, Alexander Marinov\
**Content creation (activities, text):** Jonida Hafizi, Inna Pavlova, Kristina Puvača, Dea Backer, Veronica Telese, Mariana Grațiela Dobre, Mariana Doicu\
**App design and development, photography:** Anna Franková\
**Path track design:** Le Fagotin A.S.B.L.


![logo ORA Network](logos/ORA_200x150.jpeg) ![logo Le Fagotin A.S.B.L.](logos/lefagotin_logo_transparent_200x86.png)
