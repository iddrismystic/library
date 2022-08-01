import List from '../Funcss/Components/List';
import ListItem from '../Funcss/Components/ListItem';
import RowFlex from '../Funcss/Components/RowFlex';
import Div from '../Funcss/Components/Div';
import Icon from '../Funcss/Components/Icon';
import Card from '../Funcss/Components/Card';
import Avatar from '../Funcss/Components/Avatar';
import Typography from '../Funcss/Components/Typography';
import Section from '../Funcss/Components/Section';
import Link from 'next/link';
import React, { PureComponent } from 'react';

export default function Navbar() {
  return (
    <div className="">
   <div className=" padding">
      <nav className="navBar card  white round-edge">
        <div>
        <Typography heading="h4" text="Books Library" funcss="text-primary"/>
          </div>
          <div>
            <Avatar height="40" width="40" funcss="secondary central card text-white pointer">
                G
            </Avatar>
          </div>
        </nav>
      </div>
        <div className="sideBar card white round-edge">
        <div className='sidebarContent'>
        <List>
        <ListItem>
       <Link href="/dashboard">
        <a>
        <RowFlex justify="">
        <Div>
        <Avatar width="40" height="40" bg="light">
        <Icon icon="icon-graph" color="indigo" />
        </Avatar>
        </Div>
        <Div funcss="padding">Dasboard</Div>
        </RowFlex>
        </a>
        </Link>
        </ListItem>
        <ListItem>
       <Link href="/books">
        <a>
        <RowFlex justify="">
        <Div>
        <Avatar width="40" height="40" bg="light">
        <Icon icon="icon-notebook" color="indigo" />
        </Avatar>
        </Div>
        <Div funcss="padding">Books</Div>
        </RowFlex>
        </a>
        </Link>
        </ListItem>
        <ListItem>
       <Link href="/add/book">
        <a>
        <RowFlex justify="">
        <Div>
        <Avatar width="40" height="40" bg="light">
        <Icon icon="icon-plus" color="indigo" />
        </Avatar>
        </Div>
        <Div funcss="padding">Add Book</Div>
        </RowFlex>
        </a>
        </Link>
        </ListItem>
        <ListItem>
       <Link href="/">
        <a>
        <RowFlex justify="">
        <Div>
        <Avatar width="40" height="40" bg="light">
        <Icon icon="icon-notebook" color="indigo" />
        </Avatar>
        </Div>
        <Div funcss="padding">Delete Book</Div>
        </RowFlex>
        </a>
        </Link>
        </ListItem>
        <ListItem>
       <Link href="/">
        <a>
        <RowFlex justify="">
        <Div>
        <Avatar width="40" height="40" bg="light">
        <Icon icon="icon-grid" color="indigo" />
        </Avatar>
        </Div>
        <Div funcss="padding">New Category</Div>
        </RowFlex>
        </a>
        </Link>
        </ListItem>

        </List>
              </div>
        </div>
    </div>
  )
}
