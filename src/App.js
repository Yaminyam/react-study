import './App.css';

function Header() {
  return <header>
    <h1><a href="/">WEB</a></h1>
  </header>
}

function Nav() {
  return <nav>
    <ol>
      <li><a href="/">HTML</a></li>
      <li><a href="/">CSS</a></li>
      <li><a href="/">JavaScript</a></li>
    </ol>
  </nav>
}

function Article() {
  return <article>
    <h2>Welcome</h2>
    Hello, WEB!
  </article>
}

function App() {
  return (
    <div>
      <Header></Header>
      <Nav></Nav>
      <Article></Article>
    </div>
  );
}

export default App;
