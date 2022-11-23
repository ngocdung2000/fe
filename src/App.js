import React from 'react';
import Row from './Row';
import './App.css';

function App() {
  const [arr, setArr] = React.useState([]);
  React.useEffect(() => {
    (async () => {
      const resp = await (
        await fetch('https://dung-be.onrender.com/api')
      ).json();
      if (resp.resp) {
        setArr(resp.resp);
      }
    })();
  }, []);
  return (
    <div className='container'>
      <header>
        <h1>Trạm sạc thiết bị điện.</h1>
      </header>
      <section>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Uid</th>
              <th>Wats</th>
              <th>Time</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {arr.length > 0 ? (
              arr.map(item => {
                return <Row key={item._id} item={item} />;
              })
            ) : (
              <tr>
                <td>Khong co du lieu</td>
              </tr>
            )}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default App;
