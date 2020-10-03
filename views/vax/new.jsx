const React = require("react");
const Layout = require("../layout.jsx");

class New extends React.Component {
  render() {
    const { vax } = this.props;
    return (
      <Layout title="New Vaccine">
        <form action="/vax/" method="post">
          <input type="text" placeholder="vaccine name here" name="vaccine"/>
          <input type="date" placeholder="date vaccine given" name="date"/>
          <input type="text" placeholder="clinic/hospital name" name="location"/>
          <input type="submit" value="add vaccine"/>
        </form>
      </Layout>
    ); 
  }
}

module.exports = New;
