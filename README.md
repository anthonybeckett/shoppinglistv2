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

### Generating migrations
To generate migrations based on changes in the entity files run the following command
```
npx typeorm-ts-node-commonjs migration:generate ./src/migrations/migration -td ./src/config/database.ts
```

### Android
- Java JDK 11+

### iOS
- Homebrew
- XCode

To update after installing new packages run the following command   
```
npx pod-install ios
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


### To do
Update to Typescript - https://reactnative.dev/docs/typescript
Implement SQLite and an ORM - https://dev.to/vinipachecov/setup-typeorm-with-react-native-50c4

React Native TyeOrm Example - https://github.com/typeorm/react-native-example

