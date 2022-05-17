import * as React from 'react';
import { View, Text, Pressable, ToastAndroid, Image, Alert, Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'; 
import { OutlinedTextField } from 'rn-material-ui-textfield';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Dimensions, StyleSheet } from 'react-native';

const SignUp =({ navigation }) =>{
  const password_field = React.useRef(null);

  const[firstname, setFirstname] = React.useState("");
  const[lastname, setLastname] = React.useState("");
  const[email, setEmail] = React.useState("");
  const[username, setUsername] = React.useState("");
  const[password, setPassword] = React.useState('');
  const[error_1, set_error_1] = React.useState('');
  const[error_2, set_error_2] = React.useState('');
  const[visibility, set_visibility] = React.useState(false);

  const verify = () => {
    if (!username || !password) {
        !username ? set_error_1('Please enter a valid username') : null;
        !password ? set_error_2('Please enter a valid password') : null;
    } else { signup(); }
  };

const signup =async () => {
  try {
    const res = await fetch('https://fake-authentication1.p.rapidapi.com/api/v1/authentication/register',  {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'content-type': 'application/json',
		    'X-RapidAPI-Host': 'fake-authentication1.p.rapidapi.com',
		    'X-RapidAPI-Key': 'af86e07f2dmshac190d0d7e4a59ep11b82ejsn7d180729c51e'
      },
      body: JSON.stringify({
          fName: firstname,
          lName: lastname,
          email: email,
          userName: username,
          password: password,
      }),
    })
    const response = await res.json();
    console.log(JSON.stringify(response));
    if (response.data === 'Success') {
      await AsyncStorage.setItem(
        '@credentials',
        JSON.stringify(response),
      );
      navigation.reset({
        index: 0,
        routes: [{ name: 'Drawer '}],
    });
    } else {
      ToastAndroid.show('The username or password you entered is incorrect', ToastAndroid.SHORT);
    }
  } catch { (e) => {
    Alert.alert('Oops',e.message ? e.message : 'An unexpected error has occured.Please confirm whether');
  }}
};
 
return (
  <SafeAreaView style={Styles.root}>
    <View style={{ flex: 1,justifyContent: 'center', alignItems: 'center' }}>
      <Image
        source={require("../img/Recipe1.png")}
        style={Styles.logo} />
    </View>
    < View style={{ flex: 2, width: '85%', alignSelf: 'center' }}>
    <OutlinedTextField
      label="firstname"
      baseColor={'black'}
      onFocus={() => set_error_1('')}
      tintColor={'green'}
      textColor={'black'}
      keyboardType={'name'}
      returnKeyType={'next'}
      onSubmitEditing={() => password_field.current.focus()}
      value={firstname}
      onChangeText={text => setFirstname(text)}
      error={error_1}
      />
      <OutlinedTextField
      label="lastname"
      baseColor={'black'}
      onFocus={() => set_error_1('')}
      tintColor={'green'}
      textColor={'black'}
      keyboardType={'name'}
      returnKeyType={'next'}
      onSubmitEditing={() => password_field.current.focus()}
      value={lastname}
      onChangeText={text => setLastname(text)}
      error={error_1}
      />
      <OutlinedTextField
      label="email"
      baseColor={'black'}
      onFocus={() => set_error_1('')}
      tintColor={'green'}
      textColor={'black'}
      keyboardType={'email-address'}
      returnKeyType={'next'}
      onSubmitEditing={() => password_field.current.focus()}
      value={email}
      onChangeText={text => setEmail(text)}
      error={error_1}
      />
      <OutlinedTextField
      label="Username"
      baseColor={'black'}
      onFocus={() => set_error_1('')}
      tintColor={'green'}
      textColor={'black'}
      keyboardType={'email-address'}
      returnKeyType={'next'}
      onSubmitEditing={() => password_field.current.focus()}
      value={username}
      onChangeText={text => setUsername(text)}
      error={error_1}
      />
      <OutlinedTextField
      label="Password"
      baseColor={'black'}
      onFocus={() => set_error_2('')}
      tintColor={'green'}
      textColor={'black'}
      returnKeyType={'next'}
      ref={password_field}
      containerStyle={{ marginTop: 10 }}
      value={password}
      onChangeText={text => setPassword(text)}
      error={error_2}
      onSubmitEditing={verify}
      secureTextEntry={visibility}
      renderRightAccessory={() => {
        return (
          <Pressable onPress={() => set_visibility(!visibility)} style={{ justifyContent: 'center', alignItems: 'center'}}>
            <Icon name={visibility ? 'visibility' : 'visibility-off'} color={'grey'} size={30} />
          </Pressable>
        );
      }}
      />
      <View>
        <Button
           title="Continue"
           onPress={() => verify()} />
        <Pressable style={StyleSheet.blank_button}>
          <Text style={StyleSheet.blank_button_text}>Sign Up</Text>
        </Pressable>
     </View>
    </View>
  </SafeAreaView>
  );
};  

export default SignUp;
 
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const Styles =StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: 'silver',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    height: height / 1.5,
    width: width / 1.15,
    resizeMode: 'contain',
    alignItems: 'center',
    justifyContent: 'center',
  },
  blank_button: {
    marginTop: height / 40,
    width: width / 2,
    alignSelf: 'center',
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  blank_button_text: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: width / 25,
  },
})