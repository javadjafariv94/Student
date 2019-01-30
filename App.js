
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TextInput,Button} from 'react-native';



type Props = {};
export default class App extends Component<Props> {
  constructor(props){
    super(props);
    this.state={
      UserEmail:'',
      UserPassword:''
    }
  }

  UserLogin=()=>{
    const  {UserEmail , UserPassword}= this.state;
    fetch('http://192.168.55.73/student/user_login.php',{
      method:'POST',
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        email:UserEmail,
        password:UserPassword
      })
    }).then((response)=>response.json())
    .then((responseJson)=>{
      if(responseJson==='Data Matched')
      {
        alert(resposeJson);
      }
      else{
        alert(responseJson);
      }
    })
     .catch((error)=>{console.error(error)});
  }
  render() {
    return (

      

      <View style={styles.container}>
        <Text style={styles.textStyle}>LOGIN FORM</Text>
         <TextInput
             style={styles.InputStyle}
             placeholder="username"
             underlineColorAndroid="transparent"
             onChangeText={(UserEmail)=>this.setState({UserEmail})}
          />
          <TextInput
             style={styles.InputStyle}
             placeholder="password"
             underlineColorAndroid="transparent"
             secureTextEntry={true}
             onChangeText={(UserPassword)=>this.setState({UserPassword})}
          /> 
        {/* <Button title="Test Alert" onPerss={()=>alert('Alert Message ...')}/> */}

        {/* <Button title="login" color="#2196F3" onPerss={()=>alert('email:'+this.state.UserEmail+'password:'+this.state.UserPassword)}/> */}
         <Button title="login" color="#2196F3" onPerss={this.UserLogin}/>



      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    margin: 10,
    backgroundColor: '#F5FCFF',
  },
  textStyle: {
    fontSize: 20,
    color:'#000',
    textAlign: 'center',
    marginBottom: 10,
  },
  InputStyle:{
    height:40,
    marginBottom:8,
    borderWidth:1,
    borderColor:'#2196F3',
    borderRadius:5

  }
  
});
