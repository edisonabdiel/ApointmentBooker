import React from 'react';

import { Row, Col, Card, Collapse } from 'antd';
import AppointmentPicker from './AppointmentPicker';
import CompanyCard from './CompanyCard';

const { Panel } = Collapse;

const CompaniesList = ({ timeslots }) => {
    return (
        <div className="companies-wrapper">
            {timeslots?.map(timeslot => (
               <CompanyCard timeslot={timeslot} />
            ))}
        </div>
    )
}

export default CompaniesList;
