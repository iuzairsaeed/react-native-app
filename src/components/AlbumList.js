import React , {Component} from 'react';
import { View } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumsList extends Component {

    state = { albums : [] };
    
    componentDidMount(){
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
        .then(response => this.setState({ albums: response.data }));
    }
     
    renderAlbums(){
        return  this.state.albums.map(album => 
            <AlbumDetail key={album.title} data={album} />
        );
        // return  this.state.albums.map(album => <Text key={album.id}>{album.title}</Text>); this is better way
    }
    render (){
        console.log(this.state);
        return (
            <View>
                {this.renderAlbums()}
            </View>
        );
    }
}

export default AlbumsList;