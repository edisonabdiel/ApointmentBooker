//Custom components
import {CompaniesList, Navbar} from './components';
//Services
import { useGetTimeslotsQuery } from './services/aroundhomeApi';
//Styles
import './App.css'

const App = () => {

    const { data: timeslots, isLoading, error } = useGetTimeslotsQuery();

    return (
        <div className="main">
            <Navbar />
            <CompaniesList timeslots={timeslots} />
        </div>
    )
}

export default App;
