import React from 'react';
import { View } from 'react-native';

const Card = (props) => {
    return (
        <View style={styles.containerStyle}>
            {props.chilssdren}
        </View>
    );
};

const styles = {

    containerStyle:{
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: 'Gray',
        shadowOffset: { width:0 , height:20},
        shadowOpacity:0.3,
        shadowRadius: 2,
        elevation: 2,
        position: 'relative',
        marginLeft: 5,
        marginRight: 5,
        marginTop: 20,
        
        
    }
};

export default Card;