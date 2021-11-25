import React from 'react';

import { Row, Col, Card, Collapse } from 'antd';
import AppointmentPicker from './AppointmentPicker';

const { Panel } = Collapse;

const CompaniesList = ({ timeslots }) => {
    return (
        <div className="companies-wrapper">
            {timeslots?.map(timeslot => (
                <>
                    <Collapse accordion>
                        <Panel header={timeslot.name} key={timeslot.id}>
                            <Card title={timeslot.name} key={timeslot.id}>
                                <AppointmentPicker timeslot={timeslot}  />
                            </Card>
                        </Panel>
                    </Collapse>

                </>
            ))}
        </div>
    )
}

export default CompaniesList;
