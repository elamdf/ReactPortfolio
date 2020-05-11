import React, {Component} from 'react';
import {Grid,Cell,List,ListItem,ListItemContent} from 'react-mdl';
class contact extends Component {
    render(){
        return(
           <div className="contact-body">
            <Grid className="contact-grid">
                <Cell col={6}>
                    <h2>Elam Day-Friedland</h2>
                    <img
                    src="https://gdurl.com/7o2C" alt="avatar" style={{height:'250px'}}
                    />
                    <p style={{width:'75%',height:'50%',margin:'auto',paddingTop:'1em'}}> 
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                    </p>
                    </Cell>
                <Cell col={6}>
                <h2>Contact Me</h2>
                    <hr/>
                    <div className="contact-list">
                    <List>
                        <ListItem>
                            <ListItemContent style={{fontSize:'25px',fontFamily:'Anton'}}>
                                <i className='fa fa-envelope-square' aria-hidden="true" />
                                 email
                                </ListItemContent>
                        </ListItem>
                        <ListItem>
                            <ListItemContent style={{fontSize:'25px',fontFamily:'Anton'}}>
                                <i className='fa fa-linkedin' aria-hidden="true" />
                                 other thing
                                </ListItemContent>
                        </ListItem>
                        <ListItem>
                            <ListItemContent style={{fontSize:'25px',fontFamily:'Anton'}}>
                                <i className='fa fa-fax' aria-hidden="true" />
                                 other thing
                                </ListItemContent>
                        </ListItem>
                        </List>
                        </div>
                </Cell>
            </Grid>
           </div>
        )
    }
}
export default contact;