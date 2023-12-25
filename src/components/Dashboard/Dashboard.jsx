import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
// import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';



const Dashboard = () => {

    const marksArray = [
        { "id": 1, "name": "Alice Johnson", "physics": 85, "chemistry": 90, "math": 78 },
        { "id": 2, "name": "Bob Smith", "physics": 92, "chemistry": 88, "math": 75 },
        { "id": 3, "name": "Charlie Brown", "physics": 78, "chemistry": 85, "math": 80 },
        { "id": 4, "name": "David Miller", "physics": 90, "chemistry": 92, "math": 85 },
        { "id": 5, "name": "Eva Martinez", "physics": 87, "chemistry": 94, "math": 79 },
        { "id": 6, "name": "Frank Wilson", "physics": 82, "chemistry": 79, "math": 88 },
        { "id": 7, "name": "Grace Turner", "physics": 95, "chemistry": 91, "math": 84 },
        { "id": 8, "name": "Henry Davis", "physics": 88, "chemistry": 85, "math": 92 },
        { "id": 9, "name": "Isabel Robinson", "physics": 91, "chemistry": 89, "math": 77 },
        { "id": 10, "name": "Jack Thompson", "physics": 86, "chemistry": 93, "math": 81 }
    ]

    return (
        <div>
            <LineChart
                width={1000}
                height={300}
                data={marksArray}
            >
                <Line dataKey="physics"></Line>
                <Line stroke="#82ca9d" dataKey="math"></Line>
                <Line stroke="#808000" dataKey="chemistry"></Line>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
            </LineChart>
            {/* <BarChart
                width={1400}
                height={300}
                data={marksArray}
            >
                <Bar dataKey="physics" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
                <Bar dataKey="math" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
            </BarChart> */}
        </div>
    );
};

export default Dashboard;