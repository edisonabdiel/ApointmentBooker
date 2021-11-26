// Custom Components
import {CompanyCard} from './';

const CompaniesList = ({ timeslots }) =>  (
        <div className="companies-wrapper">
            {timeslots?.map(timeslot => (
               <CompanyCard timeslot={timeslot} />
            ))}
        </div>
);

export default CompaniesList;
