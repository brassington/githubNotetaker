var React = require('react-native');
var Profile = require('./Profile');
var Repositories = require('./Repositories');
var api = require('../Utils/api');

var {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableHighlight
} = React;

class Dashboard extends React.Component{
  makeBackground(btn){
    var style = {
        flexDirection: 'row',
        alignSelf: 'stretch',
        justifyContent: 'center',
        flex: 1
    }

    if (btn === 0) {
      style.backgroundColor = '#48BBEC';
    } else if (btn == 1) {
      style.backgroundColor = '#E77AAE';
    } else {
      style.backgroundColor = '#7588F4'
    }
    return style;
  }

  goToProfile(){
    console.log('Going to profile page');
    this.props.navigator.push({
      title: "Profile Page",
      component: Profile,
      passProps: {userInfo: this.props.userInfo}
    });
  }
  goToRepos(){
    console.log('Going to repos page');
    api.getRepos(this.props.userInfo.login)
      .then((response) => {
        this.props.navigator.push({
          title: "Repos",
          component: Repositories,
          passProps: {
            userInfo: this.props.userInfo,
            repos: response
          }
        })
      })
  }
  goToNotes(){
    console.log('Going to notes page')
  }

  render(){
    return (
      <View style={styles.container}>
        <Image source={{uri: this.props.userInfo.avatar_url}}
          style={styles.image}/>
        <TouchableHighlight
          style={this.makeBackground(0)}
          onPress={this.goToProfile.bind(this)}
          underlayColor='#88D4f5'>
            <Text style={styles.buttonText}> View Profile </Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={this.makeBackground(1)}
          onPress={this.goToRepos.bind(this)}
          underlayColor='#88D4f5'>
            <Text style={styles.buttonText}> View Repos </Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={this.makeBackground(2)}
          onPress={this.goToNotes.bind(this)}
          underlayColor='#88D4f5'>
            <Text style={styles.buttonText}> View Notes </Text>
        </TouchableHighlight>
      </View>
    )
  }
}

var styles = StyleSheet.create({
  container: {
    marginTop: 65,
    flex: 1
  },
  image: {
    height: 350,
  },
  buttonText: {
    fontSize: 24,
    color: 'white',
    alignSelf: 'center'
  }
});

module.exports = Dashboard;
