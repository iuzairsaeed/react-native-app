// Import library for making a coponent
import React from 'react';
import {Text , View} from 'react-native';

// make a component
const Header = (props) =>{
    const {textStyle , viewStyle} = Styles;
    return (
      <View style={viewStyle}>  
          <Text style={textStyle}>{props.headerText}</Text>
      </View>
    );
};

const Styles = {

    viewStyle:{
        backgroundColor:'#F0F0F0',
        justifyContent: 'center',
        alignItems: 'center',
        height:60,
        paddingTop:15,
        shadowColor: '#F9F9F9',
        shadowOffset: {width:0 , height:2},
        shadowOpacity: 0.2,
        elevation:2,
        position: 'relative'
    },
    textStyle:{
        fontSize:20
    }
}

// make the component availaible to othr part of app
export default Header;