import React,  {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import Header from './components/ui/Header'
import CharacterGrid from './components/characters/CharacterGrid'

const App = () => {

  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios (
        `https://thronesapi.com/api/v2/Characters`
      )
      setItems(result.data);
      setIsLoading(false);
    }
    fetchItems();
  }, [])
  
  return (
    <div className="container">
      <Header />
      <CharacterGrid isLoading={isLoading} items={items} />
    </div>
  );
}

export default App;
