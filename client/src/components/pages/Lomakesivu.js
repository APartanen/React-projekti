import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from 'react-bootstrap/Form';
import Lomake from '../Lomake';
import Lomake6 from '../Lomake6';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

// todo tyylittely
class Lomakesivu extends React.Component {

    render() {
        return (
            <div className="align-middle">
                <h1>Lomakesivu</h1>
                <Tabs defaultActiveKey="placeholder" id="tabit">
                <Tab eventKey="placeholder" title="Placeholder">
                    <Lomake/>
                </Tab>
                <Tab eventKey="viimeistely" title="Viimeistely">
                    <Lomake6/>
                </Tab>

                </Tabs>
               
            </div>
        );
    }
}

export default Lomakesivu;