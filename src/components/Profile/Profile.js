import React, {Component} from 'react';
import './Profile.css';
import {Button} from "react-bootstrap";

class Profile extends Component {
    render() {
        return (
            <div className="profile-aside">
                <div className="back"></div>
                <div className="profileCard">
                    <div className="profile-image">
                        <img src="http://placekitten.com/g/100/90" alt="profile" />
                    </div>
                    <div className="profile-info">
                        <h1>Marcus Doe</h1>
                        <br />
                        <p className='numb'>9984174393</p>
                        <p className='emailid'>sach.annu@gmail.com</p>
                    </div>
                </div>
                <div className="minibox">
                    <div className="box box1">
                        <div className="extra-content">
                            <div className="no">2</div>
                            <div className="what">client</div>
                        </div>
                    </div>
                    <div className="box box2">
                        <div className="extra-content">
                            <div className="no">4</div>
                            <div className="what">projects</div>
                        </div>
                    </div>
                    <div className="box box3">
                        <div className="extra-content">
                            <div className="no">10</div>
                            <div className="what">task active</div>
                        </div>
                    </div>
                </div>
                <div className="log_out">
                    <Button variant="secondary" size="sm" type="submit" className={`cancel`}>
                        LOG OUT
                    </Button>
                </div>
            </div>
        );
    }
}

export default Profile;