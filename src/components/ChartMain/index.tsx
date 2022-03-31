import classes from './chart.module.css';
import ChartArea from '../AreChart/ChartArea';
import { AiOutlineCalendar } from 'react-icons/ai';
// import ChartPie from './ChartPie';


const Chart = () => {

    return (
        <div className={classes.chart}>
            <div>
                <h1>Thống kê</h1>
                <div className={classes.chartDT}>
                    <p>Doanh thu</p>
                    <div className={classes.chartCL} >
                        <input style={{ color: '#FF993C'}} type="date" />
                    </div>
                </div>
            </div>
            <div>
                <ChartArea />
            </div>
            <div>
                {/* <ChartPie /> */}
            </div>
        </div>

    );
};

export default Chart;