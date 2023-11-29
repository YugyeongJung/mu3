import './style.css'
import { Fragment } from 'react'
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { Button, IconButton, Stack } from '@mui/material';
import blackFrame from '../icons/blackFrame.png'
import grayFrame from '../icons/grayFrame.png'
import eraser from '../icons/eraser.png'
import data from '../icons/data.png'
import check from '../icons/check.png'

export default function Info(props){
    return(
        <Fragment>
        <div className='popup-shadow'>
            <div className='popup'>
                <h1 style  = {{fontSize: 40, fontFamily: "Roboto", color: "#247AFC"}}>About this site
                    <IconButton sx = {{marginLeft: 120, marginTop: -3}} onClick = {() => props.setPopup(false)}>
                        <CloseOutlinedIcon/>
                    </IconButton>
                    <hr />
                </h1>
                <div style = {{fontSize: 25, fontFamile: "Roboto", color: "black", fontWeight: 10, textAlign: "left", marginLeft: 5}}>
                <p>Machine Learning is used to train numerous data on the internet. These data may include both copyrighted data as well as private data. Our website imagines what it would look like if AI companies provided the functionality for users to check if their data has been used for training their models, request machine unlearning to delete their data, and validate the results in an understandable, trustworthy, transparent manner. Therefore, our website provide the functionalities listed below.
                </p>
                </div>
                <hr />

                <Stack direction = "row">
                    <div style = {{width: 220, marginLeft: 150}}>
                        <h1>Check
                            <p style = {{fontSize: 25, fontWeight: 10, marginTop: 10}}>
                            Discover which data was trained
                            </p>
                        </h1>
                        <div style = {{textAlign: 'center'}}>
                            <img src = {blackFrame} style = {{width: 70}}/>
                            <img src = {grayFrame} style = {{width: 70, marginLeft: 10}}/>
                        </div>
                    </div>

                    <div style = {{width: 220, marginLeft: 150}}>
                        <h1>Unlearn
                            <p style = {{fontSize: 25, fontWeight: 10, marginTop: 10}}>
                            Erase trained data from model
                            </p>
                        </h1>
                        <div style = {{textAlign: 'center'}}>
                            <img src = {eraser} style = {{width: 100, marginTop: -15}}/>
                        </div>
                    </div>

                    <div style = {{width: 220, marginLeft: 150}}>
                        <h1>Validate
                            <p style = {{fontSize: 25, fontWeight: 10, marginTop: 10}}>
                            Check unlearning results
                            </p>
                        </h1>
                        <div style = {{textAlign: 'center'}}>
                            <img src = {data} style = {{width: 70}}/>
                            <img src = {check} style = {{width: 50, marginLeft: 20}}/>
                        </div>
                    </div>

                    
                </Stack>
            </div>         
        </div>
        </Fragment>
    )
}