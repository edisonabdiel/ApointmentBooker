import React, {useState, useCallback} from 'react';
import '@mobiscroll/react/dist/css/mobiscroll.min.css';
import { Datepicker, Page, setOptions, localeDe } from '@mobiscroll/react';

setOptions({
    locale: localeDe,
    theme: 'auto',
    themeVariant: 'dark'
});

const AppointmentPicker = ({ start, end }) => {


    const min = start[0];
    const max = end[1];


    console.log(start, end); 

    const [datetimeLabels, setDatetimeLabels] = useState([]);
    const [datetimeInvalid, setDatetimeInvalid] = useState([]);
    
    
    const onPageLoadingDatetime = useCallback((event, inst) => {
        getDatetimes(event.firstDay, (bookings) => {
            setDatetimeLabels(bookings.labels);
            setDatetimeInvalid(bookings.invalid);
        });
    }, []);

    
    const getDatetimes = () => {
        // a function that sets the labels and invalid dates for the datepicker based on the start and end times
        const labels = [];
        const invalid = [];
        for (let i = 0; i < start.length; i++) {
            labels.push(start[i] + ' - ' + end[i]);
            invalid.push({
                start: start[i],
                end: end[i]
            });
        }
        return {
            labels: labels,
            invalid: invalid
        };
    }

    return (
        <Page className="md-calendar-booking">
            <div className="mbsc-form-group">
                <div className="mbsc-form-group-title">Select date & time</div>
                <Datepicker 
                    display="inline"
                    controls={['calendar', 'timegrid']}
                    min={min}
                    max={max}
                    minTime="08:00"
                    maxTime="19:59"
                    stepMinute={60}
                    width={null}
                    labels={datetimeLabels}
                    invalid={datetimeInvalid}
                    onPageLoading={onPageLoadingDatetime}
                    cssClass="booking-datetime"
                />
            </div>
        </Page>
    );
}

export default AppointmentPicker;