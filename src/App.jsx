import { useEffect, useState } from 'react';
import './App.css';

const App = () => {
  const [fake, setFake] = useState([]);

  useEffect(() => {
    fakestore();
  }, []);

  const fakestore = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const jsonData = await response.json();
    setFake(jsonData);
  };

  return (
    <>
      <h1>Fake API Store</h1>
      <div className="container">
        {fake.map((values) => (
          <div className="box" key={values.id}>
            <div className="content">
              <h5>{values.title}</h5>
              <p>{values.description}</p>
            </div>
            <img src={values.image} alt={values.title} />
          </div>
        ))}
      </div>
    </>
  );
};

export default App;



