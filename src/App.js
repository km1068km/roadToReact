import logo from './logo.svg';
import './App.css';

const list = [
    {
        title: 'React',
        url: 'https://reactjs.org/',
        author: 'Jordan Walke',
        points: 4,
        objectId: 0,
    },
    {
        title: 'Redux',
        url: 'https://redux.js.org/',
        author: 'Dan Abravoc, Andrew Clark',
        num_comments: 2,
        points: 5,
        objectId: 1,
    }
]

const App = () => (
    <div>
        <h1>My Hacker Stories</h1>
        <Search/>
        <hr/>

        {/* render the list here */}
        {/* and by the way: that's how you do comments in JSX */}

        <List/>
        <List/>
    </div>
)

const Search = () => {
    const handleChange = (event) => {
        console.log(event.target.value);
    };

    return (
        <div>

            <label htmlFor="search">Search: </label>
            <input id="search" type="text" onChange={handleChange}/>
        </div>
    )
}
const List = () => (
    <ul>
        {list.map((item) => (
            <li key={item.objectId}>
                            <span>
                                <a href={item.url}> {item.title}</a>
                            </span>
                <span>{item.author}</span>
                <span>{item.num_comments}</span>
                <span>{item.points}</span>
            </li>
        ))}
    </ul>
)

export default App;

// <div className="App">
//   <header className="App-header">
//     <img src={logo} className="App-logo" alt="logo" />
//     <p>
//       Edit <code>src/App.js</code> and save to reload.
//     </p>
//     <a
//       className="App-link"
//       href="https://reactjs.org"
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       Learn React
//     </a>
//   </header>
// </div>
