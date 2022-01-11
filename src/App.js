import './App.css';
import Header from './components/Header'
import MainBoard from './components/MainBoard';
import unsplash from './api/unsplash'
import { useState, useEffect } from 'react';
function App() {
  const [pins, setPins] = useState([])
  const getPhotos = (term) => {
    return unsplash.get("https://api.unsplash.com/search/photos", {
      params: { query: term }
    })
  }
  const onSubmit = (e) => {
    getPhotos(e).then((res) => {
      let result = res.data.results;
      let newPins = [...result, ...pins]
      newPins.sort((a, b) => {
        return 0.5 - Math.random();
      });
      setPins(newPins)
    })
  }
  const getNewPins = () => {
    let data = []
    let promises = []
    let pins = ["ocean", "Tokyo", "Uzbekistan", "Football"]
    pins.map(pin => {
      promises.push(getPhotos(pin).then((res) => {
        let result = res.data.results;
        data = data.concat(result)
        data.sort((a, b) => {
          return 0.5 - Math.random();
        });
      }));
    })
    Promise.all(promises).then(() => setPins(data))
  }
  useEffect(() => {
    getNewPins()
  }, [])
  return (
    <>
      <Header onSubmit={onSubmit} />
      <MainBoard pins={pins} />
    </>
  );
}

export default App;
