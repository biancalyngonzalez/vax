const React = require("react");
const Layout = require("../layout.jsx");

class Index extends React.Component {
  render() {
    const { vax } = this.props;
    return (
      <Layout title="Edit Vaccine">
        <form action=`/notes/edit/${vax._id}?_method=PUT` method="post">
          <input type="text" value={vax.name} placeholder="vaccine name here" name="vaccine"/>
          <input type="date" value={vax.date} placeholder="date vaccine given" name="date"/>
          <input type="text" value={vax.location} placeholder="clinic/hospital name" name="location"/>
          <input type="submit" value="edit vaccine"/>
        </form>
      </Layout>
    ); 
  }
}

module.exports = Index;
