import React from 'react';
import { Text } from 'react-native';
import Card from './Card';

const AlbumDetail = (props) => {
    return(
        <Card>
            <Text style={{ color: 'red'}}>{props.data.title}</Text> 
        </Card>
        
    );
}; 

export default AlbumDetail;