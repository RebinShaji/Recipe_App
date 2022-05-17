import React,{useState,useEffect} from "react";
import { StyleSheet, Text, TextInput, View, Image,FlatList, SafeAreaView, Dimensions } from "react-native";

const Egg_Recipe= () => {
    const[recipe, setRecipe] = useState([]);
    const[searchString,setSearchString] = useState('');
    const[filteredRecipe,setFilteredRecipe] = useState([]);

    useEffect(()=>{

    
    const getData=async()=>{
        try{
          const APP_ID= '4e2ebe50'; 
          const APP_KEY= '%20eb94f7e2af9765f6357b1389e13aa32a';
          const item = 'egg';
          const res=await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${item}&app_id=${APP_ID}&app_key=${APP_KEY}`, {
            method: 'GET',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json'
            },
          })

            const recipe = await res.json();
            // console.log('recipe:',recipe.hits[0]);
            // console.log('image:',recipe.hits[0].recipe.image);
            setRecipe(recipe);
            setFilteredRecipe([recipe]);
        }
        catch(err){
            console.error(err);

        }
        };
        getData();
        return()=>{}
    },[]);

    useEffect(()=>{
        let filteredRecipe = recipe.hits;
        console.log('searchString: ', searchString);
        if (searchString && recipe.hits.length>0){
            filteredRecipe=[];
        recipe.hits.map(chr=>{
            if(chr.recipe.label.toLowerCase().includes(searchString.toLowerCase())){
                filteredRecipe.push(chr);
            }
            return()=>{}
        })
            }
            setFilteredRecipe(filteredRecipe);
            return()=>{}

        },[searchString,recipe]);

        return(
            <SafeAreaView style={styles.container}>
                <View style={{
                    backgroundColor: "#6ACC00"
                }}>
                <Text style={{ fontWeight: 'bold', color: "white", fontSize:40, alignItems:'center' }}>Egg Recipes</Text>
                <TextInput
                type="text"
                name="searchBar"
                id="searchBar"
                color="white"
                placeholder="search for a recipe" 
                value={searchString} 
                onChangeText={ Text=> setSearchString(Text) } 
                /> 
                    
                    <FlatList 
                    data={filteredRecipe}
                    renderItem={({item}) => (
                        <View style ={{borderRadius: 14,
                            borderWidth: 2,
                            borderColor: "white",}} >
                            {/* {console.log('chr:', item.recipe.ingredientLines)} */}
                        
                        <Text style={{ fontWeight: 'bold', color: 'black', fontSize:15, alignItems:'center' }}>{item.recipe.label}</Text>
                        <Image source={{uri: item.recipe.image}} 
                        style={styles.image} />
                        <Text {...item.recipe.ingredientLines.map((label) => item.recipe.label) }
                         style={{ fontWeight: 'bold', color: 'white', fontSize:20, alignItems:'center' }}>{item.recipe.ingredientLines}</Text>
                    </View>
                    )}
                    />
                    </View>
                    </SafeAreaView>
                    );
                 };  

                export default Egg_Recipe;
         
                const width = Dimensions.get('window').width;
                const height = Dimensions.get('window').height;
               
                const styles = StyleSheet.create({
                  container: {
                     flex: 2,
                     alignItems: "center",
                     marginTop: 48,
                  },
                  recipe: {
                    textAlign: "center",
                    marginBottom: 18,
                    fontWeight: "200",
                    color: "green",
                  },
                  label: {
                    textAlign: "center",
                    marginBottom: 18,
                    fontWeight: "200",
                    color: "blue",
                  },
                  image: {
                    height: height / 1.5,
                    width: width / 1.0,
                    resizeMode: 'contain',
                    alignItems: 'center',
                    justifyContent: 'center',
                  },
                });