import logo from './logo.svg';
import './App.css';

function Header() {
  return <header>
    <h1><a href="/">WEB</a></h1>
  </header>
}

function App() {
  return (
    <div>
      <Header></Header>
      <nav>
        <ol>
          <li><a href="/">HTML</a></li>
          <li><a href="/">CSS</a></li>
          <li><a href="/">JavaScript</a></li>
        </ol>
      </nav>
      <article>
        <h2>Welcome</h2>
        Hello, WEB!
      </article>
    </div>
  );
}

export default App;
