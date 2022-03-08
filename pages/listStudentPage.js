import FlexWrapper from '../components/FlexWrapper';
import Header from '../components/Header';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Nav from '../components/Nav';
import Main from '../components/Main';
import Footer from '../components/Footer';

export default function ListStudentPage() {
  return (
    <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <FlexWrapper>
       <Header>Sam hill's Dicount Student App</Header>
       <Nav></Nav>
       <Main >main contentgoes Here</Main>
       <Footer></Footer>
    </FlexWrapper>
    </>
  )
}
