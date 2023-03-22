import { StyleSheet, Text, View, Image } from "react-native";

function Card(props) {
  return (
    <View style={styles.card}>
      <Image style={styles.livro} source={{ uri: props.livro.capa }} />
      <Text style={{ color: "black" }}> {props.livro.titulo} </Text>
      <Text style={{ fontSize: 12 }}> R$: {props.livro.preco}</Text>
    </View>
  );
}

export default function App() {
  const livros = [
    {
      capa: "https://a-static.mlcdn.com.br/800x560/react-cookbook-packt-publishing/umlivro2/4919781783980727/f0ee70a81aec5f7aa936bfd8150f8086.jpeg",
      titulo: 'Livro 1',
      preco: 25.00,
    },
    {
      capa: "https://a-static.mlcdn.com.br/800x560/react-cookbook-packt-publishing/umlivro2/4919781783980727/f0ee70a81aec5f7aa936bfd8150f8086.jpeg",
      titulo: 'Livro 1',
      preco: 25.00,
    },
    {
      capa: "https://a-static.mlcdn.com.br/800x560/react-cookbook-packt-publishing/umlivro2/4919781783980727/f0ee70a81aec5f7aa936bfd8150f8086.jpeg",
      titulo: 'Livro 2',
      preco: 350.00,
    },
    {
      capa: "https://a-static.mlcdn.com.br/800x560/react-cookbook-packt-publishing/umlivro2/4919781783980727/f0ee70a81aec5f7aa936bfd8150f8086.jpeg",
      titulo: 'Livro 3',
      preco: 130.00,
    },
    {
      capa: "https://a-static.mlcdn.com.br/800x560/react-cookbook-packt-publishing/umlivro2/4919781783980727/f0ee70a81aec5f7aa936bfd8150f8086.jpeg",
      titulo: 'Livro 4',
      preco: 100.00,
    },
    {
      capa: "https://a-static.mlcdn.com.br/800x560/react-cookbook-packt-publishing/umlivro2/4919781783980727/f0ee70a81aec5f7aa936bfd8150f8086.jpeg",
      titulo: 'Livro 5',
      preco: 250.00,
    },
  ];
  return (
    <View>
      <View style={styles.texto}>
      <Text >Olá Querido</Text>
      </View>
      <View style={styles.conteudo}>
        { livros.map(livro => <Card livro={livro} />)}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0d0",
    alignItems: "center",
    paddingTop: 20,
    justifyContent: "center",
  },
  conteudo: {
    flex: 1,
    backgroundColor: "#ccc",
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
  },
  card: {
   backgroundColor: 'gray',
   width: '40%',
   height: 170,
   borderRadius: 10,
   margin: 20,
    },
  livro: {
    resizeMode: 'stretch',
    width: '100%',
    height: 140,
    borderRadius: 10,
  },
  texto: {
    justifyContent: "center",
    alignItems: 'center',
    fontSize: 100, 
    fontWeigth: 'bold',
    paddingTop: "20%"
  },
});
