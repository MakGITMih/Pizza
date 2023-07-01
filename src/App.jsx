
import './App.scss';

function AppTitle() {

  return (
    <h1 className="">
      HI
    </h1>
  );
}

function AppList() {
  
  const item = ['Первый','Второй','Третий']

  return (
    <div className="a">
      {item[0]} <br /> {item[1]}
      {item[2]}
    </div>
  );
}


function App() {
  return (
    <div className="app">
       <AppTitle ></AppTitle>
       
       <AppList></AppList>
    </div>
  );
}

export default App;
