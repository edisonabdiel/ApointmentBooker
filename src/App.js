import React from 'react';
import CompaniesList from './components/CompaniesList';
import AppointmentPicker from './components/AppointmentPicker';

import { useGetTimeslotsQuery } from './services/aroundhomeApi';

import './App.css'

const App = () => {

    const { data: timeslots, loading, error } = useGetTimeslotsQuery();

    return (
        <div className="app">
            <CompaniesList timeslots={timeslots} />
        </div>
    )
}

export default App;
