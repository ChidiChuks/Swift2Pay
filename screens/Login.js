import React, { Component } from 'react';
import { StyleSheet, ImageBackground, Text, View, TextInput, Image, Button, TouchableOpacity, ScrollView } from 'react-native';

import Card from '../components/Card';

export default class Login extends Component {

  constructor(props) {
    super(props)

    this.state = {
      message: ''
    }
  }

  static navigationOptions = {
    headerStyle: {
      backgroundColor: 'rgb(147, 43, 173)',
    },
    headerTintColor: '#fff',
    //Sets Header text color
    headerTitleStyle: {
      fontWeight: 'bold',
      //Sets Header text style
    },
  };

  state = {
    email: '',
    password: '',
  };

  componentDidMount(){
    
  }


  loginUsers = () => {
    
    console.log('User details',this.state.email, this.state.password)

    fetch('https://swift2pay.com/account/api/request.php?action=login&email='+this.state.email+'&password='+this.state.password+'&apiKey=JFJHFJJ38388739949HFGDJ', {
      method: 'GET',
    })
    .then(response => response.json())
    .then((json) => {
      user = JSON.stringify(json)
      console.log('Response: ' , user, json.message)
      this.setState({
        message: json.message,
      });

      if(json.status == 200){
        console.log(json.message)
        // alert('Please wait...')
        alert(json.message +': You have been logged in')
        // alert(json.userID) 
        this.props.navigation.navigate('Browse', {
          userId: json.userID
        })
      } else if (json.status == 400){
        alert('Please wait...')
        alert(json.message)
      }
    })
    .catch((error) => {
      console.error(error);
      alert(error)
    });
  }


 render() {
  const { navigate } = this.props.navigation;
  return (
      <ImageBackground source={require('../assets/images/bg/background.png')} style={styles.backgroundImage}>
        <View style={styles.screen}>
        <Text style={styles.login}>Login</Text>
          <Card style={styles.inputContainer}>

            <View style={styles.sectionStyle}>
              <Image style={styles.imageStyle} source={require('../assets/images/icons/login/email.png')} />
              <TextInput style={styles.textInput} placeholder="Email address" onChangeText={(email)=>this.setState({email})} value={this.state.email} />
            </View>
            
            <View style={styles.sectionStyle}>
              <Image style={styles.imageStyle} source={require('../assets/images/icons/login/password.png')} />
              <TextInput style={styles.textInput} placeholder="Password" secureTextEntry onChangeText={(password)=>this.setState({password})} value={this.state.password} />
            </View>
            
          </Card>

          <ScrollView >
            <TouchableOpacity style={styles.submit} onPress={this._login}>
              <Text style={styles.textTwo}>Submit</Text>
            </TouchableOpacity>
          </ScrollView>

        </View>

        <TouchableOpacity onPress={() => navigate('Register')}>
          <Text style={styles.signup} >SignUp</Text>
        </TouchableOpacity>

      </ImageBackground>
  
 )
 }
 _login = async() => {
   if (this.state.email === '' || this.state.password === '') {
     alert('Please insert email or password');
   } else {
     alert('Please wait...')
     this.loginUsers()
   }
 } 
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover'
   },
   screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center'
  },
  sectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyle: {
    padding: 5,
    margin: 2,
    height: 15,
    width: 15,
    resizeMode: 'stretch',
    alignItems: 'center',
  },
  textInput: {
    width: '90%', 
    height: 40, 
    borderColor: 'gray', 
    borderWidth: 1, 
    borderTopWidth: 0, 
    borderLeftWidth: 0, 
    borderRightWidth: 0, 
    alignItems: "center", 
    padding: 5, 
    margin: 5
  },
   login: {
    fontSize: 25,
    fontWeight: "500",
    position: "relative",
    paddingRight: 195,
    color: '#932BAD',
    marginTop: 95,
    marginBottom: 35
   },
   signup: {
    fontSize: 25,
    fontWeight: "500",
    position: "relative",
    marginVertical: 10,
    marginLeft: 195,
    marginBottom: 99,
    marginTop: 50
   },
   inputContainer: {
    width: 600,
    maxWidth: '80%',
    alignItems: 'center'
  },
  submit: {
    width: 180,
    height: 60,
    fontSize: 25,
    fontWeight: "500",
    color: "purple",
    borderWidth: 2,
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderRadius: 10,
    borderColor: "purple",
    alignContent: 'center',
    paddingTop: 15,
    paddingLeft: 45,
    padding: 5,
    marginTop: 35
   },
  textTwo: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'rgb(147, 43, 173)',
  },
});