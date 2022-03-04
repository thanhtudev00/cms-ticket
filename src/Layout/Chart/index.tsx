import classes from './chart.module.css';
import ChartArea from './ChartArea';
import { AiOutlineCalendar } from 'react-icons/ai';


const Chart = () => {

    return (
        <div className={classes.chart}>
            <div>
                <h1>Thống kê</h1>
                <div className={classes.chartDT}>
                    <p>Doanh thu</p>
                    <div className={classes.chartCL} >
                        <p>Tháng 4, 2021</p>
                        <AiOutlineCalendar />
                    </div>
                </div>
            </div>
            <div>
                <ChartArea />
            </div>
        </div>

    );
};

export default Chart;