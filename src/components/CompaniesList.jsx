import React from 'react';

import CompanyCard from './CompanyCard';


const CompaniesList = ({ timeslots }) =>  (
        <div className="companies-wrapper">
            {timeslots?.map(timeslot => (
               <CompanyCard timeslot={timeslot} />
            ))}
        </div>
);

export default CompaniesList;
