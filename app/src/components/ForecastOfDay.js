import React, { Component } from 'react';
import moment from 'moment';

class ForecastOfDay extends Component {

    getBackground = () => {
        
    }

    render() {
        let momentDate = moment(this.props.forecast.Date);
        let dayOfWeek = momentDate.format('ddd');
        let dayOfMonth = momentDate.format('DD');
        let month = momentDate.format('MMMM');

        return (
            <div style={{height: '100%', width: '100%', minHeight: '100%'}} >
                <div className="row">
                    <div className="col text-center">
                        <span className="d-block" style={{fontSize: '5vw'}}>{dayOfWeek}</span>
                        <span className="d-block" style={{fontSize: '7vw', margin: '-15px 0px'}}>{dayOfMonth}</span>
                        <span className="d-block" style={{fontSize: '2.2vw'}}>Agusxaz</span>
                    </div>
                </div>
            </div>
        );
    }

}

export default ForecastOfDay;