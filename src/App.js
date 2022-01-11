import './App.css';
import unsplash from './api/unsplash'
import { Main, Header } from './components/index'
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
      let newPins = [...pins, ...result]
      newPins.sort((a, b) => {
        return 0.5 - Math.random();
      });
      setPins(newPins)
    })
  }
  const getNewPins = () => {
    let data = [], promises = []
    let pins = ["ocean", "tokyo", "uzbekistan", "football"]
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
      <Main pins={pins} />
    </>
  );
}

export default App;
