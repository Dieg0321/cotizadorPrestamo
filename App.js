import { StyleSheet, SafeAreaView, View, StatusBar, Text } from 'react-native';
import Form from './components/Form';
import colors from './assets/colors'

export default function App() {
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.background}></View>
        <Text style={styles.titleApp}>Cotizador de prestamos</Text>
        <Form style={styles.form}></Form>
      </SafeAreaView>
      <View style={styles.result}>
        <Text>    Resultado</Text>
      </View>

      <View style={styles.text}>
        <Text>    Footer</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    height: 290,
    width: '100%',
    alignItems: 'center'
  },
  container: {
    width: '100%',
  },
  background: {
    position: 'absolute',
    backgroundColor: colors.PRIMARY_COLOR,
    height: 200,
    width: '100%',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    zIndex: -1
  },
  titleApp: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 50,
  },
  result: {
  },
  text: {
  }

});
