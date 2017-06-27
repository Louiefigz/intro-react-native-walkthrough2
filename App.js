import React from 'react';
import { ScrollView, Text, StyleSheet, View, TextInput, ListView } from 'react-native';



export default class App extends React.Component {
  constructor(){
    super();


    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state={
      text:'',
      restaurants:[],
      dataSource: ds.cloneWithRows([
           'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin'
         ])
    }

    // in your constructor method
    this.onSubmitHandler = this.onSubmitHandler.bind(this);


  }

  // componentWillMount(){
  //   const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
  //   debugger
  //   this.setState({
  //     dataSource: ds.cloneWithRows(this.props.text)
  //   })
  // }

  // componentDidMount(){
  //   debugger
  // }



  onSubmitHandler(e){
    // Make a state change here 

  }


  render() {

    return (
      <View>



        <TextInput
          style={styles.input}
          placeholder="Feed Me"
          onChangeText={(text) => this.setState({text})}
          onSubmitEditing={this.onSubmitHandler}
        />



        <View style={styles.background}>

          <ListView
            dataSource={this.state.dataSource}
            renderRow={(rowData) => <Text style={styles.font}>{rowData}</Text>}
          />



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
  text: ['Burger King', 'McDonalds', 'Red Lobster',
  'Dennys', 'Wendys', 'White Castle', 'popeyes']
}
