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
import React, { PureComponent, useEffect, useState } from 'react';
// import  LineChart  from 'recharts/src/LineChart';
// import  Line  from 'recharts/src/Line';
// import  Tooltip  from 'recharts/src/Tooltip';
// import  Legend  from 'recharts/src/Legend';

// import { LineChart, Line, Tooltip, Legend } from "recharts"
// const { LineChart, Line, Tooltip, Legend } = dynamic(()=>import("recharts"),{ssr:false})
import Navbar from './navBar';

export default function Dashboard() {
    
  const [borrows, setborrows] = useState([])
  const [user, setuser] = useState(null)
  const [books, setbooks] = useState([])
  useEffect(() => {

      if(localStorage.getItem("borrows")  ){
        setborrows(
            JSON.parse(
                localStorage.getItem("borrows") 
            )
        )
        setbooks(
          JSON.parse(
            localStorage.getItem("books") 
        )
        )
    }
  },[])
  return (
    <div className="dashboard">
   <Navbar />
        <div className="main ">
            <div className="container">
            <div className="card padding round-edge ">
              <div className='padding'>
              <Typography text="Dashboard" heading="h2" />
              <div>Book analytics</div>
              </div>
                <div className="section">
                    <div className="row-flex">
                       <div className='padding'>
                       <div className="padding card success round-edge">
                            <Typography text={books.length} funcss="text-white" heading="h1"/>
                            <div className="text-bold text-white">
                              Total Books
                            </div>
                        </div>
                       </div>
                       {/* <div className='padding'>
                       <div className="padding card secondary round-edge">
                            <Typography text="2000" funcss="text-primary" heading="h2"/>
                            <Typography text="Total Students"/>
                        </div>
                       </div> */}
                       <div className='padding'>
                       <div className="padding card primary text-white round-edge">
                            <Typography text={borrows.length} funcss="text-white" heading="h1"/>
                            <div className="text-bold">
                              Borrowed Books
                            </div>
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
