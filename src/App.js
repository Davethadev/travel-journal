import logo from './logo.svg';
import './App.css';
import Journal from './Journal'
import data from './data';

function App() {
  const journals = data.map((journal) => {
    const {id, title, location, googleMapsUrl, startdate, endDate, description, imageUrl} = journal
    return (
      <Journal
         key={id}
         title={title}
         location={location}
         googleMapsUrl={googleMapsUrl}
         startdate={startdate}
         endDate={endDate}
         description={description}
         imageUrl={imageUrl}
        // {...journal}
      />
    )
  })
  return (
    <div className="App">
      <header className='heading'>
        {/* <img src="" alt="" /> */}
        <p>my travel journal.</p>
      </header>
      {journals}
    </div>
  );
}

export default App;
