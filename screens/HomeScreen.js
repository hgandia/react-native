//import { useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { Card } from 'react-native-elements';
//import { CAMPSITES } from '../shared/campsites';
// import { PROMOTIONS } from '../shared/promotions';
// import { PARTNERS } from '../shared/partners';
import { useSelector } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';

const FeaturedItem = ({ item }) => {
    if(item) {
        return (
            <Card containerStyle={{ padding: 0 }}>
                <Card.Image source={{ uri: baseUrl + item.image }}>
                    <View style={{ justifyContent:'center', flex: 1 }}>
                        <Text 
                            style={{
                                color:'white',
                                textAlign:'center',
                                fontSize: 20
                            }}
                        >
                            {item.name}
                        </Text>
                    </View>
                </Card.Image>
                <Text style={{ margin: 20 }}>{item.description}</Text>
            </Card>
        );
    }
    return <View />;
}

const HomeScreen = () => {

// This is how we first updated our state, using useState to update local state.  
// That has changed now since we're pulling our data from our simulated json-server now.    
// const [campsites, setCampsites] = useState(CAMPSITES);
// const [promotions, setPromotions] = useState(PROMOTIONS);
// const [partners, setPartners] = useState(PARTNERS);

const campsites = useSelector((state) => state.campsites);
const promotions = useSelector((state) => state.promotions);
const partners = useSelector((state) => state.partners);

const featCampsite = campsites.campsitesArray.find((item) => item.featured);
const featPromotion = promotions.promotionsArray.find((item) => item.featured);
const featPartner = partners.partnersArray.find((item) => item.featured);

    return(
        <ScrollView>
                <FeaturedItem item={featCampsite} />
                <FeaturedItem item={featPromotion} />
                <FeaturedItem item={featPartner} />
        </ScrollView>
    );
}
export default HomeScreen;