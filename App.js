import React from 'react';
import { ScrollView, Text, StyleSheet, View, TextInput } from 'react-native';

export default class App extends React.Component {
  render() {

    return (
      <View>
        <TextInput
          style={styles.input}
          placeholder="Feed Me"
          onChangeText={(text) => this.setState({text})}
        />
        <View style={styles.background}>

          <ScrollView >
            {this.props.text.map((item)=>
                <Text style={styles.font}>{item}</Text>
            )}
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  background:{
    alignItems: 'center'

  },
  font:{
    fontSize: 30,
  },
  input:{
    height: 40, marginTop:30, borderColor: 'gray', borderWidth: 1, textAlign: 'center'
  }
})

App.defaultProps = {
  text: ['Burger King', 'McDonalds', 'Red Lobster', 'Dennys', 'Wendys', 'White Castle', 'popeyes']
}
