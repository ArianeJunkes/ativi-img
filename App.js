import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text> Meus livros</Text>
      <View style={styles.livros}>
        <View style={styles.card}>
          <Image style={styles.image} source={require('./assets/61acdiPRZQL.jpg')}/>
          <Text style={styles.preco}>R$ 53,00</Text>
        </View>
        <View style={styles.card}>
          <Image style={styles.image} source={require('./assets/Fundamentos-do-React.png')}/>
          <Text style={styles.preco}>R$ 42,00</Text>
        </View>

      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  livros: {
    flexDirection: 'row'
  },
  card: {
    width: 110,
    height: 180,
    backgroundColor: "black",
    margin: 30,
    alignItems: 'center',
  },
  image:{
    height: 160,
    width: 110,
  },
  preco:{
    color: 'white',
  }
});
