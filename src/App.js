import logo from './logo.svg';
import './App.css';
import React from "react";


const App = () => {
    const stories = [
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
    ];
    const [searchTerm, setSearchTerm] = React.useState('React');

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    }

    const searchedStories = stories.filter((story) => story.title.toLowerCase().includes(searchTerm.toLowerCase()))

    return (
        <div>
            <h1>My Hacker Stories</h1>


            <Search search={searchTerm} onSearch={handleSearch}/>
            <hr/>

            {/* render the list here */}
            <List list={searchedStories}/>
        </div>
    )
}

const Search = ({search, onSearch}) => (
    <div>
        <label htmlFor="search">Search: </label>
        <input id="search" type="text" value={search} onChange={onSearch}/>
    </div>
)
const List = ({list}) => (
    <ul>
        {list.map(({objectId, ...item}) => (
            <Item key={objectId} {...item} />
        ))}
    </ul>
)

const Item = ({title, url, author, num_comments, points}) => (
    <li>
        <span>
            <a href={url}> {title}</a>
        </span>
        <span>{author}</span>
        <span>{num_comments}</span>
        <span>{points}</span>
    </li>
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
