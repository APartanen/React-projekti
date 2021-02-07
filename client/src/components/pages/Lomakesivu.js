import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from 'react-bootstrap/Form';
import Lomake from '../Lomake';

// todo tyylittely
class Lomakesivu extends React.Component {

    render() {
        return (
            <div className="align-middle">
               <h1>Lomakesivu</h1>
               <Lomake></Lomake>
            </div>
        );
    }
}

export default Lomakesivu;