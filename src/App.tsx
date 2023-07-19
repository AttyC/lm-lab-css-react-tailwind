import './App.css'
import { PropertiesDisplay } from './components/properties-display'

function App() {
  return (
    <section>
      <h1>Welcome to Marvelous Mansions</h1>
      <h2 className='font-medium uppercase p-4'>
        A one stop shop to your dream property!
      </h2>
      <h3 className='text-left font-bold'>Current property listings:</h3>
      <PropertiesDisplay />
    </section>
  );
}

export default App
