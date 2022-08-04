import List from '../Funcss/Components/List';
import ListItem from '../Funcss/Components/ListItem';
import RowFlex from '../Funcss/Components/RowFlex';
import Div from '../Funcss/Components/Div';
import Icon from '../Funcss/Components/Icon';
import Card from '../Funcss/Components/Card';
import Avatar from '../Funcss/Components/Avatar';
import Typography from '../Funcss/Components/Typography';
import Middle from '../Funcss/Components/Middle';
import Hr from '../Funcss/Components/Hr';
import Section from '../Funcss/Components/Section';
import Link from 'next/link';
import dynamic from "next/dynamic"
import React, { PureComponent } from 'react';
// import  LineChart  from 'recharts/src/LineChart';
// import  Line  from 'recharts/src/Line';
// import  Tooltip  from 'recharts/src/Tooltip';
// import  Legend  from 'recharts/src/Legend';

// import { LineChart, Line, Tooltip, Legend } from "recharts"
// const { LineChart, Line, Tooltip, Legend } = dynamic(()=>import("recharts"),{ssr:false})
import Navbar from './navBar';

export default function Dashboard() {
    
const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  return (
    <div className="dashboard">
   <Navbar />
        <div className="main ">
            <div className="container">
            <div className="card padding round-edge ">
               <div className="row-flex space-between">
               <Typography text="Dashboard" heading="h2" funcss="padding"/>
               <div>
               <Typography text="Books" heading="h2" funcss="padding"/>
               </div>
               </div>
                <div className="section">
                    <div className="row-flex">
                       <div className='padding'>
                       <div className="padding card round-edge">
                            <Typography text="250" funcss="text-primary" heading="h2"/>
                            <Typography text="Total Books"/>
                        </div>
                       </div>
                       <div className='padding'>
                       <div className="padding card secondary round-edge">
                            <Typography text="2000" funcss="text-primary" heading="h2"/>
                            <Typography text="Total Students"/>
                        </div>
                       </div>
                       <div className='padding'>
                       <div className="padding card primary text-white round-edge">
                            <Typography text="250" funcss="text-white" heading="h2"/>
                            <Typography text="Books Borrowed"/>
                        </div>
                       </div>


                    </div>
                </div>
            </div>
            <div className="card padding round-edge margin-top-20">
            <div className="graph">
                {/* <LineChart
          width={700}
          height={200}
          data={data}
        >

          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart> */}
                    </div>
            </div>

            </div>
        </div>
    </div>
  )
}
