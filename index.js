// /**
//  * @format
//  */

// import {AppRegistry} from 'react-native';
// import App from './App';
// import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => App);


//Import a library to help creaate component 
import React , {Component} from 'react';
import { AppRegistry , View} from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

//create component

const App = () => {
    return (
      <View>
          <Header headerText={'Albums'} />
          <AlbumList />
      </View>
    );
};

// const App = () => {
//     <Text>Some Text</Text>
// };

//render it to a device 
AppRegistry.registerComponent('albums', () => App);