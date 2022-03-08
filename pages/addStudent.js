import FlexWrapper from '../components/FlexWrapper';
import Header from '../components/Header';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Nav from '../components/Nav';
import Main from '../components/Main';
import Footer from '../components/Footer';

const handleSubmit = (e) => {
    //Pull all the data form the form
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let program = document.getElementById("program").value;
    let currentStudents = [];
    // take the data and create a student object
    const student = {
        firstName: firstName,
        lastName: lastName,
        program: program
    }
    // Store the student object in the html5Storage
    if(localStorage.getItem('students')){
        currentStudents = JSON.parse(localStorage.getItem('students'));
    }

    currentStudents.push(student);
    localStorage.setItem("students", JSON.stringify(currentStudents))

        // check if the is local storage already, add the student,
        // otherwise initialize the local storage and add the first student
}


export default function addStudentPage() {



    return (
        <>
        <Head>
        
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
            <FlexWrapper>
            <Header>Sam hill's Dicount Student App</Header>
            <Nav></Nav>
            <Main >
                <table>
                    <tr>
                        <td>Firstname</td>
                        <td><input type='text' id="firstName" /></td>
                    </tr>
                    <tr>
                        <td>lastName</td>
                        <td><input type="text" id="lastName" /></td>
                    </tr>
                    <tr>
                        <td>program</td>
                        <td><select id="program" >
                            <option value="CSTP">Computer system technology</option>
                            <option value="ERT">Electronics Repair Technician</option>
                            <option value="FASH"> Fashion Design</option>
                            </select></td>
                    </tr>
                    <tr>
                        <td colSpan={2}>
                            <button onClick={(e)=>{handleSubmit(e)}}>add Student</button>
                        </td>
                    </tr>
                </table>
            </Main>
            <Footer></Footer>
        </FlexWrapper>
        </>
    )
}
