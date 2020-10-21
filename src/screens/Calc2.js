import react from 'react';
import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Alert,
  StyleSheet,
} from 'react-native';
import style from './style';

export class Calc2 extends Component {
  constructor() {
    super();
    this.state = {
      calc: '',
      result: '',
    };
  }

  addCalc(char) {
    this.setState({calc: this.state.calc + char});
  }

  addOperator(char) {
    const str = this.state.calc;
    const addedStr = str.substring(0, str.length - 1) + char;
    if (str !== '') {
      if (
        str.endsWith('+') ||
        str.endsWith('-') ||
        str.endsWith('*') ||
        str.endsWith('/') ||
        str.endsWith('%')
      ) {
        this.setState({calc: addedStr});
      } else {
        this.addCalc(char);
        try {
          const result = eval(this.state.calc);
          this.setState({result: result});
        } catch (error) {
          Alert.alert('Error', error);
          this.clear();
        }
      }
    } else if (str == '' && this.state.result !== '') {
      this.setState({calc: this.state.result + char, result: ''});
    }
  }

  sum() {
    const str = this.state.calc;
    var sumStr = '';
    if (
      str.endsWith('+') ||
      str.endsWith('-') ||
      str.endsWith('*') ||
      str.endsWith('/') ||
      str.endsWith('%')
    ) {
      sumStr = str.substring(0, str.length - 1);
    } else {
      sumStr = str;
    }
    try {
      const result = eval(sumStr);
      this.setState({result: result});
      this.setState({calc: ''});
    } catch (error) {
      alert(error);
      this.clear();
    }
  }

  clear() {
    this.setState({calc: '', result: ''});
  }

  render() {
    return (
      <View style={styles.mainView}>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity onPress={() => this.addCalc('0')}>
            <View style={style.button}>
              <Text style={style.text}>0</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.addCalc('.')}>
            <View style={style.button}>
              <Text style={style.text}>.</Text>
            </View>
          </TouchableOpacity>
          <View style={style.button}>
            <Text style={style.text}></Text>
          </View>
          <TouchableOpacity onPress={() => this.addOperator('+')}>
            <View style={style.button2}>
              <Text style={style.text2}>+</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.sum()}>
            <View style={style.button}>
              <Text style={style.text2}>=</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity onPress={() => this.addCalc('1')}>
            <View style={style.button}>
              <Text style={style.text}>1</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.addCalc('2')}>
            <View style={style.button}>
              <Text style={style.text}>2</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.addCalc('3')}>
            <View style={style.button}>
              <Text style={style.text}>3</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.addOperator('-')}>
            <View style={style.button2}>
              <Text style={style.text2}>-</Text>
            </View>
          </TouchableOpacity>

          <View style={style.button}>
            <Text style={style.text}></Text>
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity onPress={() => this.addCalc('4')}>
            <View style={style.button}>
              <Text style={style.text}>4</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.addCalc('5')}>
            <View style={style.button}>
              <Text style={style.text}>5</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.addCalc('6')}>
            <View style={style.button}>
              <Text style={style.text}>6</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.addOperator('*')}>
            <View style={style.button2}>
              <Text style={style.text2}>x</Text>
            </View>
          </TouchableOpacity>
          <View style={style.button}>
            <Text style={style.text}></Text>
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity onPress={() => this.addCalc('7')}>
            <View style={style.button}>
              <Text style={style.text}>7</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.addCalc('8')}>
            <View style={style.button}>
              <Text style={style.text}>8</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.addCalc('9')}>
            <View style={style.button}>
              <Text style={style.text}>9</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.addOperator('/')}>
            <View style={style.button2}>
              <Text style={style.text2}>/</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.clear()}>
            <View style={style.button}>
              <Text style={style.text2}>C</Text>
            </View>
          </TouchableOpacity>
        </View>
        <Text style={styles.input}>{this.state.calc}</Text>
        <Text style={styles.input2}>{this.state.result}</Text>
      </View>
    );
  }
}

export default Calc2;

const styles = StyleSheet.create({
  mainView: {
    flexDirection: 'column-reverse',
    flex: 1,
  },
  input: {
    textAlign: 'right',
    fontSize: 30,
    padding: 10,
  },
  input2: {
    textAlign: 'right',
    padding: 10,
    fontSize: 60,
  },
});
