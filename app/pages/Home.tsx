import * as React from 'react';import { View, Text } from 'react-native';import { NavigationEvents } from 'react-navigation';import { connect } from 'react-redux'; class Home extends React.Component {  constructor(props) {    super(props);  }  public componentDidMount(): void {    console.log(this.props);  }  public render() {    return (      <View>        <Text>Home</Text>      </View>    );  }}export default connect((state) => {  console.log(state);  return { ...state };})(Home);