import * as React from 'react';
import { StyleSheet , View  , Image,  Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Splash_Screen() {
    return(
        <SafeAreaView>
        <View style = {Style.root}>
            <Image source={require("../img/Recipe.png")} style = {Style.logo} />
        </View>
        </SafeAreaView>
    );
}

const width=Dimensions.get("window").width;
const height=Dimensions.get("window").height;
const Style=StyleSheet.create({
    root:{
        flex:1,
        backgroundColor:'white',
        justifyContent:'center',
        alignItems:'center',
        
    },
    logo:{
        marginTop:10,
        height:height/2.8,
        width:width/2.4,
        resizeMode:'contain',
        alignItems:'center',
        justifyContent:'center',
    },
})