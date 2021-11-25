//Custom components
import {CompaniesList, Navbar, Loader } from './components';
//Services
import { useGetTimeslotsQuery } from './services/aroundhomeApi';
//Styles
import './App.css'

const App = () => {

    const { data: timeslots, isLoading, error } = useGetTimeslotsQuery();

    if (isLoading) return <Loader />;

    return (
        <div className="main">
            <Navbar />
            <CompaniesList timeslots={timeslots} />
        </div>
    )
}

export default App;
