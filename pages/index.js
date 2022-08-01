import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Typography from "../Funcss/Components/Typography"
import Container from "../Funcss/Components/Container"
import Breadcrumb from "../Funcss/Components/Breadcrumb"
import Button from "../Funcss/Components/Button"
import Icon from "../Funcss/Components/Icon"
import Card from "../Funcss/Components/Card";
import Input from '../Funcss/Components/Input';
import IconicInput from '../Funcss/Components/IconicInput';
import Div from '../Funcss/Components/Div';
import Section from '../Funcss/Components/Section';
import Grid from '../Funcss/Components/Grid';
import Col from '../Funcss/Components/Col';
export default function Home() {
  return (
    <div className="designBg home">
      <Head>
        {/* <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" /> */}
      </Head>

     
<Card funcss="width-400-max center white round-edge padding-20 form">
<Div funcss="row-flex">
<div className="padding">
    <Icon icon="fas fa-book" size={3} color="primary" />
</div>
<div className="padding">
<Typography heading="h1" text="Login Account" />
</div>
</Div>
<Grid>
<Col sm={12} md={12} lg={12} funcss="padding">
    <IconicInput funcss="section full-width" position="left" >
    <Icon icon="far fa-paper-plane" color="primary" />
<Input type="email" label="Email" funcss="full-width" bordered={true}  />
</IconicInput>
    </Col>
    <Col sm={12} md={12} lg={12} funcss="padding">
    <IconicInput funcss="section full-width" position="left" >
    <Icon icon="fas fa-lock" color="primary" />
<Input type="password" label="Password" funcss="full-width" bordered={true}  />
</IconicInput>
    </Col>
    <Col sm={12} md={12} lg={12} funcss="padding">
        <Button text="Login" color="white" bg="primary" funcss="full-width"
        onClick={()=>window.location.assign("/dashboard")}
        />
    </Col>
</Grid>

</Card>


    </div>
  )
}
