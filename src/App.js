//Custom components
import CompaniesList from './components/CompaniesList';
//Services
import { useGetTimeslotsQuery } from './services/aroundhomeApi';
//Styles
import './App.css'

const App = () => {

    const { data: timeslots, isLoading, error } = useGetTimeslotsQuery();

    return (
        <div className="main">
            <CompaniesList timeslots={timeslots} />
        </div>
    )
}

export default App;
