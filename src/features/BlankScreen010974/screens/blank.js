import React from "react";
import { connect } from "react-redux";
import { registrationandlogin_post_api_v1_login_read } from "../../../store/actions.js";
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet
} from "react-native";
class Blank extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }
  render = () => (
    <View style={styles.container}>
      <Text>Welcome to Crowdbotics</Text>
      <TextInput
        onChange={email => this.setState({ email: email })}
        style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
      />
      <TextInput
        onChange={password => this.setState({ password: password })}
        style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
      />
      <TouchableOpacity
        style={styles.button}
        onClick={() => this.props.register(this.state.email, this.state.password)}
      >
        <Text>Signup</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10
  }
});
function mapStateToProps(state) {
  return { state: state };
}
const mapDispatchToProps = dispatch => {
  return {
    register: (email, password) =>
      dispatch(registrationandlogin_post_api_v1_login_read(email, password))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Blank);