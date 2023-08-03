import './App.css';
import {useState} from 'react';

function Header(props) {
  return <header>
    <h1><a href="/" onClick={(event)=>{
      event.preventDefault();
      props.onChangeMode();
    }}>{props.title}</a></h1>
  </header>
}

function Nav(props) {
  const lis = [];
  for (let i = 0; i < props.topics.length; i++) {
    let t = props.topics[i];
    lis.push(<li key={t.id}>
      <a id={t.id} href={"/read/"+t.id} onClick={(event)=>{
        event.preventDefault();
        props.onChnageMode(Number(event.target.id));
      }}>{t.title}</a>
    </li>);
  }
  return <nav>
    <ol>
      <li><a href="/">HTML</a></li>
      <li><a href="/">CSS</a></li>
      <li><a href="/">JavaScript</a></li>
    </ol>
  </nav>
}

function Article(props) {
  return <article>
    <h2>{props.title}</h2>
    {props.body}
  </article>
}

function App() {
  const [mode, setMode] = useState('WELCOME');
  const [id, setId] = useState(null);
  const topics = [
    { id: 1, title: 'HTML', body: 'HTML is ...' },
    { id: 2, title: 'CSS', body: 'CSS is ...' },
    { id: 3, title: 'JavaScript', body: 'JavaScript is ...' }
  ];
  let content = null;
  if (mode === 'WELCOME') {
    content = <Article title="Welcome" body="Hello, WEB!"></Article>
  } else if (mode === 'READ') {
    let title, body = null;
    for (let i = 0; i < topics.length; i++) {
      if (topics[i].id === id) {
        title = topics[i].title;
        body = topics[i].body;
      }
    }
    content = <Article title={title} body={body}></Article>
  }
  return (
    <div>
      <Header title="REACT" onChangeMode={()=>{
        setMode('WELCOME');
      }}></Header>
      <Nav topics={topics} onChnageMode={(_id)=>{
        setMode('READ');
        setId(_id);
      }}></Nav>
      {content}
    </div>
  );
}

export default App;
