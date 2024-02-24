import React, { useCallback, useState } from 'react';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
    PieChart,
    Pie,
    Sector
} from 'recharts';

const AdminHomeCharts = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const onPieEnter = useCallback(
        (_, index) => {
            setActiveIndex(index);
        },
        [setActiveIndex]
    );

    const ServiceData = [
        { name: "Web Devlopment", value: 400 },
        { name: "Mobile Design", value: 300 },
        { name: "Content Writer", value: 500 },
        { name: "UI/UX Design", value: 200 },
        { name: "Web Design", value: 400 },
        { name: "Graphic Design", value: 200 },
    ];

    const renderActiveShape = (props) => {
        const RADIAN = Math.PI / 180;
        const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, value } = props;
        const sin = Math.sin(-RADIAN * midAngle);
        const cos = Math.cos(-RADIAN * midAngle);
        const sx = cx + (outerRadius + 10) * cos;
        const sy = cy + (outerRadius + 10) * sin;
        const mx = cx + (outerRadius + 30) * cos;
        const my = cy + (outerRadius + 30) * sin;
        const ex = mx + (cos >= 0 ? 1 : -1) * 22;
        const ey = my;
        const textAnchor = cos >= 0 ? 'start' : 'end';

        return (
            <g>
                <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
                    {payload.name}
                </text>
                <Sector
                    cx={cx}
                    cy={cy}
                    innerRadius={innerRadius}
                    outerRadius={outerRadius}
                    startAngle={startAngle}
                    endAngle={endAngle}
                    fill={fill}
                />
                <Sector
                    cx={cx}
                    cy={cy}
                    startAngle={startAngle}
                    endAngle={endAngle}
                    innerRadius={outerRadius + 6}
                    outerRadius={outerRadius + 10}
                    fill={fill}
                />
                <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
                <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
                <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">{`PV ${value}`}</text>
                <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
                    {`(Rate ${(percent * 100).toFixed(2)}%)`}
                </text>
            </g>
        );
    };

    const data = [
        {
            name: 'Jan',
            value: 5000,
        },
        {
            name: 'Feb',
            value: 3000,
        },
        {
            name: 'Mar',
            value: 6000,
        },
        {
            name: 'Apr',
            value: 5500,
        },
        {
            name: 'May',
            value: 3000,
        },
        {
            name: 'Jun',
            value: 8000,
        },
        {
            name: 'Jul',
            value: 5000,
        },
        {
            name: 'Aug',
            value: 10000,
        },
        {
            name: 'Sep',
            value: 6000,
        },
        {
            name: 'Oct',
            value: 3500,
        },
        {
            name: 'Nv',
            value: 8500,
        },
        {
            name: 'Dec',
            value: 2500,
        }
    ];

    return (
        <div className='charts-section'>


            <div className='bg-light p-4'>
                <div className='border-bottom'>
                    <h1 style={{ fontFamily: "Roboto Condensed" }} className='fs-4'>Overview 2023 Year</h1>
                </div>
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart
                        height={300}
                        data={data}
                        margin={{
                            top: 25,
                            right: 0,
                            left: -10,
                            bottom: 5
                        }}
                        barSize={20}
                    >
                        <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <CartesianGrid strokeDasharray="3 3" />
                        <Bar dataKey="value" fill="#7AB259" background={{ fill: "#eee" }} />
                    </BarChart>
                </ResponsiveContainer>
            </div>





            <div className='bg-light p-4'>
                <div className='border-bottom'>
                    <h1 style={{ fontFamily: "Roboto Condensed" }} className='fs-4'>Service Sales Overview</h1>
                </div>
                <ResponsiveContainer width="100%" height={300}>
                    <PieChart width={400} height={300}>
                        <Pie
                            activeIndex={activeIndex}
                            activeShape={renderActiveShape}
                            data={ServiceData}
                            cx="50%"
                            cy="50%"
                            innerRadius={70}
                            outerRadius={90}
                            fill="#7AB259"
                            dataKey="value"
                            onMouseEnter={onPieEnter}
                        />
                    </PieChart>
                </ResponsiveContainer>
            </div>


        </div>
    );
};

export default AdminHomeCharts;