import ReactDOM from 'react-dom';
import React from 'react';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyBt0keWAwz26vxFpY4dtfZ3BPmvtfjmpcQ';


const App = () => {
	return <SearchBar />;
}

ReactDOM.render(<App />, document.querySelector('.container'));
