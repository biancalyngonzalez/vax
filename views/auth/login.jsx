const React = require("react");
const Layout = require("../layout.jsx");

class Login extends React.Component {
  render() {
    return (
      <Layout title="LOGIN">
        <form id="loginuserpassword" action="/auth/login" method="post">
          <input class="username" type="text" name="username" placeholder="username"/>
          <input class="password" type="text" name="password" placeholder="password"/>
          <input type="submit" value="login"/>
        </form>
      </Layout>
    );
  }
}

module.exports = Login;
