import { useState, useEffect } from 'react';
import { StyleSheet, SafeAreaView, View, StatusBar, Text } from 'react-native';
import Form from './components/Form';
import colors from './assets/colors'
import Footer from './components/Footer';
import ResultCalculation from './components/ResultCalculation'; cd

export default function App() {
  const [capital, setCapital] = useState(null);
  const [interest, setInterest] = useState(null)
  const [months, setMonths] = useState(null);
  const [total, setTotal] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [selectedValue, setSelectedValue] = useState(null);

  useEffect(() => {
    if (capital && interest && months) calculate();
    else reset()
  }, [capital, interest, months])

  const calculate = () => {
    reset();
    if (!capital) {
      setErrorMessage("Agrega la cantidad que quieres solicitar");
    } else if (!interest) {
      setErrorMessage("Agrega el interes del prestamo");
    } else if (!months) {
      setErrorMessage("Selecciona los meses a pagar");
    } else {
      const i = interest / 100
      const fee = capital / ((1 - Math.pow(i + 1, -months)) / i)
      setTotal({
        monthlyFee: fee.toFixed(2).replace('.', ','),
        totalPayable: (fee * months).toFixed(2).replace('.', ',')
      })
    }
  }

  const reset = () => {
    setErrorMessage('')
    setTotal(null)
  }

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.background}></View>
        <Text style={styles.titleApp}>Cotizador de prestamos</Text>
        <Form
          setCapital={setCapital}
          setInterest={setInterest}
          setMonths={setMonths}
          selectedValue={selectedValue} setSelectedValue={setSelectedValue}>
        </Form>
      </SafeAreaView>
      <ResultCalculation
        errorMessage={errorMessage}
        capital={capital}
        interest={interest}
        months={months}
        total={total} />
      <Footer
        calculate={calculate} />
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
    height: '100%'
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
  }

});
