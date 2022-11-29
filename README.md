# React Native Grocery Shopping App

This is a simple greocery shopping application built to help my life be a little easier when it comes to food shopping.

The app is built with Javascript with a SQLite database to store any data needed.

Some features and ideas
- User can create multiple shopping lists
- Each list has a new area with tabs on the bottom for ingredients to buy, a manual meal list where the user can click each meal and it adds the ingredients to the list. Possibly integrate some sort of Meals API which looks online for ideas and populates the ingredients needed.
- Area to keep a list of meals selected for the week. If chosen through the API, a link or pull in data on how to cook the meal if unknown.
- Built in google lens to scan hand written lists
- Settings page to alter size of list items and maybe a bit of customisation.

## Requirements and build tips

### Android
- Java JDK 11+

### iOS
- Homebrew
- XCode

To update after installing new packages run the following command   
```
npx pod-install ios
```

If build error are happening with the pod file after installing new packages run the following 
```
rm node_modules
npm i
cd ios
pod-install
cd ..
npx react-native start-ios
```
  
When building the app for iOS, if you get an error about glog check if Xcode is pointing at the right file and 
update with the following commands if not   

```bash
xcode-select -p

sudo xcode-select --switch /Applications/Xcode.app
```

### Libraries used
- React Native Elements - https://reactnativeelements.com/docs/
- React Navigation - https://reactnavigation.org/docs/getting-started/
- Expo - https://docs.expo.dev/versions/latest/
- Tailwind CSS/NativeWind - https://www.nativewind.dev/
- TypeORM - https://typeorm.io/
- React Native Swipeable Item - https://github.com/computerjazz/react-native-swipeable-item


### To do
- Fix refresh when adding items to a shopping list then not appearing
- Fix height of lists to not be 100% to stop going into the user zone at the bottom
- Update .env to set more development/production values
- Create an .env.example
- Implement updating shopping list items
- Maybe try upgrade to typescript again and use ts-syringe to implement dependency injection.
- Pull screen logic out into custom hooks to make it basically a view only component.
- Add development settings like refresh the database
- Improve migration system
- Implement a Makefile to run build commands and other useful options
- Implement a new style layout and design

