import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from 'react-bootstrap/Form';
import Lomake from '../Lomake';
import Lomake6 from '../Lomake6';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Lomake7 from '../Lomake7'
// todo tyylittely
class Lomakesivu extends React.Component {

    render() {
        return (
            <div className="align-middle">
                <h1>Lomakesivu</h1>
                <Tabs defaultActiveKey="placeholder" id="tabit">
                <Tab eventKey="perustiedot" title="Perustiedot">
                    <Lomake/>
                </Tab>
                <Tab eventKey="viimeistely" title="Viimeistely">
                    <Lomake6/>
                </Tab>

                <Tab eventKey="Lomake7" title="Lomake7">
                    <Lomake7/>
                </Tab>
                
                </Tabs>
               
            </div>
        );
    }
}

export default Lomakesivu;