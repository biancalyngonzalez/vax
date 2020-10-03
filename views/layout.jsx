const React = require("react");

class Layout extends React.Component {
  render() {
    return (
      <html>
        <head>
          <title>{this.props.title}</title>
          <link rel="stylesheet" href="/css/style.css"/>
          <script src="/js/app.js"></script>
        </head>
        <body>    
          <header>
            <div id="topline">
            <h1>VAX</h1>

            <div id="auth">
            <button id="login"><a href="/auth/login">Login</a></button>
            <button id="signup"><a href="/auth/signup">Sign Up</a></button>
            <button id="logout"><a href="/auth/logout">Log Out</a></button>
            </div>
            
            <ul>
              <li><a class="active" href="#home">Home</a></li>
              <li><a href="#news">News</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#about">About</a></li>
            </ul>
            </div>
          </header>
         
    

          <main>{this.props.children}</main>
          <footer>
            <h5>Copyright © 2020 VAX</h5>
          </footer>
        </body>
      </html>
    );
  }
}

module.exports = Layout;