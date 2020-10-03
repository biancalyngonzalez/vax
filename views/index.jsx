const React = require("react");
const Layout = require("./layout.jsx");

class Index extends React.Component {
  render() {
    return (
      <Layout title="VAX - Vaccine Records">
        <h3>Welcome to VAX, a space to keep all your vaccinations</h3>
      </Layout>
    );
  }
}

module.exports = Index;
