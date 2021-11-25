//Custom components
import { CompaniesList, Navbar, Loader } from './components';
//Icons
import { GiGluttonousSmile } from 'react-icons/gi';
//Services
import { useGetTimeslotsQuery } from './services/aroundhomeApi';
//Styles
import './App.css'

const App = () => {

    const { data: timeslots, isLoading, error } = useGetTimeslotsQuery();

    if (isLoading) return <Loader />;
    if (error) return <p>Error <GiGluttonousSmile /> </p>;

    return (
        <div className="main">
            <Navbar />
            <CompaniesList timeslots={timeslots} />
        </div>
    )
}

export default App;
