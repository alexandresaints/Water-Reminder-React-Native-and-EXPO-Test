import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, buttonText, View, setState } from 'react-native';


type Props = {};
export default class App extends Component <Props> {

constructor(props) {
  super(props);
  this.state={idade:0, peso:0, resultado:0, resultadoText:""}
  this.calcular = this.calcular.bind(this)
}

 calcular(){

  let ml = this.state.peso * 35

  let s = this.state
  s.resultado = ml
  this.setState(s)

  s.resultadoText  = "MLs de água diariamente."

  
 }

  render(){
  return (
    <View style={styles.container}>
    <View style={styles.entradas}>
       <TextInput placeholder="Idade" keyboardType="numeric" style={styles.input} onChangeText={(idade)=>{this.setState({idade})}} />
       <TextInput placeholder="Peso" keyboardType="numeric" style={styles.input} onChangeText={(peso)=>{this.setState({peso})}} />
       </View>
       <TouchableOpacity style={styles.buttonText}  onPress={this.calcular}><Text style={styles.buttonText}>Calcular</Text></TouchableOpacity>
       <Text style={styles.resultado}>{this.state.resultado}</Text>
       <Text style={[styles.resultado, {fontSize:40}]}>{this.state.resultadoText}</Text>
    </View>
    );
  }
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    
  },
  entradas:{
    flexDirection:"row",
  
  },

  input:{
    height: 160,
    textAlign: "center",
    width:"50%",
    fontSize:50,
    marginTop:24,
    color: "gray"
  },
  buttonText:{
    alignSelf:"center",
    padding: 30,
    fontSize: 25,
    color:"#6dc4a4",
    fontWeight: "bold",

  },
  resultado:{
    alignSelf: "center",
    color: "gray",
    fontSize: 65,
    padding: 15,
    },
  },
);