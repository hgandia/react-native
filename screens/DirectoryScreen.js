//import { useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import { Tile } from 'react-native-elements';
//import { CAMPSITES } from '../shared/campsites';
import { useSelector } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';
import Loading from '../components/LoadingComponent';

const DirectoryScreen = ({ navigation }) => {
    //This is how we used to get the campsites data, while updating the local state variable.
    //const [campsites, setCampsites] = useState(CAMPSITES);

    const campsites = useSelector((state) => state.campsites);

    if(campsites.isLoading){
        return <Loading />;
    }
    
    if(campsites.errMess){
        return(
            <View>
                <Text>{campsites.errMess}</Text>
            </View>
        );
    }


    const renderDirectoryItem =({item: campsite}) => {
        return(
            <Tile 
                title={campsite.name}
                caption={campsite.desciption}
                featured
                onPress={() => navigation.navigate('CampsiteInfo', { campsite } )} 
                imageSrc={{ uri: baseUrl + campsite.image }}
            
            />
                        
            //     <Avatar source={{ uri: baseUrl + campsite.image }} rounded />
            //     <ListItem.Content>
            //         <ListItem.Title>{campsite.name}</ListItem.Title>
            //         <ListItem.Subtitle>
            //             {campsite.description}
            //         </ListItem.Subtitle>
            //     </ListItem.Content>
            // </ListItem>
        )
    }

    return(
        <FlatList
            data={campsites.campsitesArray}
            renderItem={renderDirectoryItem}
            keyExtractor={(item) => item.id.toString()}
        />
    );
}
export default DirectoryScreen;