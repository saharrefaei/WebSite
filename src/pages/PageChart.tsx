import {
    Heading
} from '../assets/styles/styled'
import BarChart from './Charts/BarChart'
import PieChart from './Charts/PieChart'
export default function PageChart() {
    return <div style={{overflow: 'auto', padding: '5em'}}>
        <Heading style={{ textAlign: 'center' }}>Chart Page</Heading>
        <PieChart />
        <BarChart />
    </div>
}