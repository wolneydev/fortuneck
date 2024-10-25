import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Button,
  Image,
  TouchableOpacity,
} from 'react-native';

class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      textoFrase:'',
      img: require('./src/biscoito.jpeg')
    };
    this.frases = [
      "The only limit to our realization of tomorrow is our doubts of today. - Franklin D. Roosevelt",
      "Happiness is not something ready-made. It comes from your own actions. - Dalai Lama",
      "The best way to predict the future is to invent it. - Alan Kay",
      "Believe you can and you're halfway there. - Theodore Roosevelt",
      "The only thing we have to fear is fear itself. - Franklin D. Roosevelt",
      "Do not wait to strike till the iron is hot, but make it hot by striking. - William Butler Yeats",
      "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
      "The best time to plant a tree was 20 years ago. The second best time is now. - Chinese Proverb",
      "Keep your face always toward the sunshine—and shadows will fall behind you. - Walt Whitman",
      "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt"
    ];
    this.quebrarBiscoito =  this.quebrarBiscoito.bind(this);
  }
  quebrarBiscoito(){
    let numeroAleatorio = Math.floor(Math.random() * this.frases.length);
    this.setState({
      textoFrase: '"'+this.frases[numeroAleatorio]+'"',
      img: require('./src/biscoito_quebrado.jpeg')
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <Image source={this.state.img} style={styles.img} />
        <Text style={styles.textoFrase}>{this.state.textoFrase}</Text>
        <TouchableOpacity style={styles.botao} onPress={this.quebrarBiscoito}>
          <View style={styles.btnArea}>
            <Text style={styles.btnTexto}>Quebrar biscoito</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 250,
    height: 250,
  },
  textoFrase: {
    fontSize: 20,
    color: '#dd7b22',
    margin: 30,
    fontStyle: 'italic',
    textAlign: 'center',
  },
  botao: {
    width: 230,
    height: 50,
    borderWidth: 2,
    borderColor: '#dd7b22',
    borderRadius: 25,
  },
  btnArea:{
    flex: 1,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
  },
  btnTexto:{
    fontSize: 18,
    fontWeight:'bold',
    color: '#dd7b22',
  }
});
export default App;
