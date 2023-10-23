import {BrowserRouter, Route,} from 'react-router-dom';
import Greeting from './Greeting';  

const App = () => (
    <BrowserRouter>
        <Route  path='/' element={<Greeting/>} />
    </BrowserRouter>
)

export default App;