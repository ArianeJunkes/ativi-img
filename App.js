import { StyleSheet, Text, View, Image } from "react-native";

function Card(props) {
  return (
    <View style={styles.card}>
      <Image style={styles.livro} source={{ uri: props.livro.capa }} />
      <Text style={{ color: "darkred" }}> {props.livro.titulo} </Text>
      <Text style={{ fontSize: 12 }}> R$ props.livro.preco</Text>
    </View>
  );
}

export default function App() {
  const livros = [
    {
      capa: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fs3.novatec.com.br%2Fcapas-ampliadas%2Fcapa-ampliada-9786586057393.jpg&tbnid=TV0at2hPMLEOFM&vet=12ahUKEwiw7pbL4-39AhVDNrkGHQ7jBxIQMygDegUIARDJAQ..i&imgrefurl=https%3A%2F%2Fnovatec.com.br%2Flivros%2Freact-aprenda-praticando%2F&docid=S9tf-fEAHgT6JM&w=292&h=419&q=capa%20react&ved=2ahUKEwiw7pbL4-39AhVDNrkGHQ7jBxIQMygDegUIARDJAQ",
      titulo: 'Livro 1',
      preco: 25.00,
    },
    {
      capa: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fs3.novatec.com.br%2Fcapas-ampliadas%2Fcapa-ampliada-9786586057393.jpg&tbnid=TV0at2hPMLEOFM&vet=12ahUKEwiw7pbL4-39AhVDNrkGHQ7jBxIQMygDegUIARDJAQ..i&imgrefurl=https%3A%2F%2Fnovatec.com.br%2Flivros%2Freact-aprenda-praticando%2F&docid=S9tf-fEAHgT6JM&w=292&h=419&q=capa%20react&ved=2ahUKEwiw7pbL4-39AhVDNrkGHQ7jBxIQMygDegUIARDJAQ",
      titulo: 'Livro 1',
      preco: 25.00,
    },
    {
      capa: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fs3.novatec.com.br%2Fcapas-ampliadas%2Fcapa-ampliada-9786586057393.jpg&tbnid=TV0at2hPMLEOFM&vet=12ahUKEwiw7pbL4-39AhVDNrkGHQ7jBxIQMygDegUIARDJAQ..i&imgrefurl=https%3A%2F%2Fnovatec.com.br%2Flivros%2Freact-aprenda-praticando%2F&docid=S9tf-fEAHgT6JM&w=292&h=419&q=capa%20react&ved=2ahUKEwiw7pbL4-39AhVDNrkGHQ7jBxIQMygDegUIARDJAQ",
      titulo: 'Livro 2',
      preco: 350.00,
    },
    {
      capa: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fs3.novatec.com.br%2Fcapas-ampliadas%2Fcapa-ampliada-9786586057393.jpg&tbnid=TV0at2hPMLEOFM&vet=12ahUKEwiw7pbL4-39AhVDNrkGHQ7jBxIQMygDegUIARDJAQ..i&imgrefurl=https%3A%2F%2Fnovatec.com.br%2Flivros%2Freact-aprenda-praticando%2F&docid=S9tf-fEAHgT6JM&w=292&h=419&q=capa%20react&ved=2ahUKEwiw7pbL4-39AhVDNrkGHQ7jBxIQMygDegUIARDJAQ",
      titulo: 'Livro 3',
      preco: 130.00,
    },
    {
      capa: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fs3.novatec.com.br%2Fcapas-ampliadas%2Fcapa-ampliada-9786586057393.jpg&tbnid=TV0at2hPMLEOFM&vet=12ahUKEwiw7pbL4-39AhVDNrkGHQ7jBxIQMygDegUIARDJAQ..i&imgrefurl=https%3A%2F%2Fnovatec.com.br%2Flivros%2Freact-aprenda-praticando%2F&docid=S9tf-fEAHgT6JM&w=292&h=419&q=capa%20react&ved=2ahUKEwiw7pbL4-39AhVDNrkGHQ7jBxIQMygDegUIARDJAQ",
      titulo: 'Livro 4',
      preco: 100.00,
    },
    {
      capa: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fs3.novatec.com.br%2Fcapas-ampliadas%2Fcapa-ampliada-9786586057393.jpg&tbnid=TV0at2hPMLEOFM&vet=12ahUKEwiw7pbL4-39AhVDNrkGHQ7jBxIQMygDegUIARDJAQ..i&imgrefurl=https%3A%2F%2Fnovatec.com.br%2Flivros%2Freact-aprenda-praticando%2F&docid=S9tf-fEAHgT6JM&w=292&h=419&q=capa%20react&ved=2ahUKEwiw7pbL4-39AhVDNrkGHQ7jBxIQMygDegUIARDJAQ",
      titulo: 'Livro 5',
      preco: 250.00,
    },
  ];
  return (
    <View>
      <Text style={{fontSize: 25, fontWeigth: 'bold'}}>Olá</Text>
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
   backgroundColor: 'orange',
   width: '40%',
   height: 215,
   borderRadius: 10,
   margin: 15,
    },
  livro: {
    resizeMode: 'stretch',
    width: '100%',
    height: 100,
  }
});
