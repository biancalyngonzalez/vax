const React = require("react");
const Layout = require("../layout.jsx");

class Index extends React.Component {
  render() {
    const { vax } = this.props;
    return (
      <Layout title="VAX - Vaccine Records">
        <h1>My Vaccines</h1>
        <a href="/vax/new">
          <button> Add Vaccine </button>
          </a>
        {vax.map((vax) => (
          <div>
        <h2>{vax.vax}</h2>
        <form action={`/vax/${vax._id}?_method=DELETE`} method="POST">
          <input type="submit" value="delete" />
        </form>
        <form action={`/vax/edit/${vax._id}?_method=DELETE`} method="GET">
          <input type="submit" value="edit" />
        </form>
        </div>
        ))}
       
      </Layout>
    ); 
  }
}

module.exports = Index;
