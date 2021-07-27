import React from 'react';
import {Link} from "react-router-dom";
import Button from "@material-ui/core/Button";

function Try(props) {
    return (
        <div><Button component={Link} to="/" style={{backgroundColor: "#0ebfe9", color: "black"}}>
            Test
        </Button></div>
    );
}

export default Try;