const React = require("react");
const Layout = require("../layout.jsx");

class Index extends React.Component {
  render() {
    return (
      <Layout title="SIGNUP">
        <form id="sighupuserpassword" action="/auth/signup" method="post">
          <input class="username" type="text" name="username" placeholder="username" />
          <input class="password" type="text" name="password" placeholder="password" />
          <input type="submit" value="signup" />
        </form>
      </Layout>
    );
  }
}

module.exports = Index;
