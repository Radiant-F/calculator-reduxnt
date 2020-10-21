import React, {Component} from 'react';
import {Text, View, TouchableOpacity, TextInput} from 'react-native';
import style from '../../src/screens/style';

export class Calc extends Component {
  constructor() {
    super();
    this.state = {
      calc: '',
      result: '',
    };
  }

  render() {
    return (
      <View
        style={{
          flexDirection: 'column-reverse',
          flex: 1,
        }}>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity onPress={() => this.setState({calc: 0})}>
            <View style={style.button}>
              <Text style={style.text}>0</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={style.button}>
              <Text style={style.text}>.</Text>
            </View>
          </TouchableOpacity>
          <View style={style.button}>
            <Text style={style.text}></Text>
          </View>
          <TouchableOpacity>
            <View style={style.button}>
              <Text style={style.text}>+</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={style.button}>
              <Text style={style.text}>=</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity>
            <View style={style.button}>
              <Text style={style.text}>1</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={style.button}>
              <Text style={style.text}>2</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={style.button}>
              <Text style={style.text}>3</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={style.button}>
              <Text style={style.text}>-</Text>
            </View>
          </TouchableOpacity>

          <View style={style.button}>
            <Text style={style.text}></Text>
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity>
            <View style={style.button}>
              <Text style={style.text}>4</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={style.button}>
              <Text style={style.text}>5</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={style.button}>
              <Text style={style.text}>6</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={style.button}>
              <Text style={style.text}>x</Text>
            </View>
          </TouchableOpacity>
          <View style={style.button}>
            <Text style={style.text}></Text>
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity>
            <View style={style.button}>
              <Text style={style.text}>7</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={style.button}>
              <Text style={style.text}>8</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={style.button}>
              <Text style={style.text}>9</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={style.button}>
              <Text style={style.text}>/</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={style.button}>
              <Text style={style.text}>C</Text>
            </View>
          </TouchableOpacity>
        </View>
        <Text>{this.state.calc}</Text>
      </View>
    );
  }
}

export default Calc;
