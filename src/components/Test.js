import React,{Fragment} from 'react';
import Button from "@material-ui/core/Button";

function Test(props) {
    const button = (
        <Button variant="contained" color="primary">{props.icon} click here</Button>


    )
    return (
        <div>
            {button}
        </div>
    );
}

export default Test;