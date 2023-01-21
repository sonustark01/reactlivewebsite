import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';


function App() {
  return (
    <>
      {/* <div classNameName="main-c" >
        <Navbar title="utilis" aboutText="About mE" />
        {/* <Greet /> */}
      {/* <div classNameName="conatiner"> */}
      {/* <TextForm heading="Enter the text to analyse" /> */}
      {/* </div> */}
      {/* <div classNameName="container"><About /></div> */}
      {/* </div>  */}

      <Navbar title='sonuSTARK' aboutText="aboutUS"></Navbar>
      {/* <Navbar title='sonu'></Navbar> */}
      <div className="container">
        <TextForm title="Enter text below to analize"></TextForm>
      </div>

    </>
  );
}

export default App;
