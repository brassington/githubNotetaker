var React = require('react-native');

var {
  View,
  StyleSheet,
} = React;

class Separator extends React.Component{
  render() {
    return (
      <View style={styles.separator} />
    )
  }
}

var styles = StyleSheet.create({
  separator: {
    height: 1,
    backgroundColor: '#e4e4e4',
    flex: 1,
    marginLeft: 15
  }
});

module.exports = Separator;
