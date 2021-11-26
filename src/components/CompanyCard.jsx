// Ant Design Components
import { Collapse, Card } from 'antd';
// Custom Components
import {AppointmentPicker} from './';

const { Panel } = Collapse;

const CompanyCard = ({ timeslot }) => {

    const start = timeslot.time_slots.map(time => time.start_time);
    const end = timeslot.time_slots.map(time => time.end_time);

    return (
        <div>
             <>
                    <Collapse accordion>
                        <Panel header={timeslot.name} key={timeslot.id}>
                            <Card title={timeslot.name} key={timeslot.id}>
                            <AppointmentPicker start={start} end={end} />
                            </Card>
                        </Panel>
                    </Collapse>
                </>
        </div>
    )
}

export default CompanyCard;
