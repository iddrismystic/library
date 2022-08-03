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
import Navbar from './navBar';
import React, { PureComponent } from 'react';
export default function Books() {
return (
<div>
<div className="dashboard">
    <Navbar />
    <div className="main ">
        <div className="container">
            <Card funcss="round-edge padding">
                
<div className="horizontal-scroll">
  <table className="table text-small">
    <tr>
      <th>Image</th>
      <th>Title</th>
      <th>ISBN Number</th>
      <th>Category</th>
      <th>Author</th>
      <th>Book Code</th>
    </tr>
    <tr>
      <td>
        <div className="">
            <img src="/img/1.jpg" className='fit width-100-max' alt="" />
        </div>
      </td>
      <td>
      <Typography text="Romeo and Juliet" />
      </td>
      <td>BK-001</td>
      <td>Drama</td>
      <td>William Shakespeare</td>
      <td>CO-001</td>
    </tr>
  </table>
</div>

            </Card>
        </div>

    </div>
</div>
</div>
)
}
