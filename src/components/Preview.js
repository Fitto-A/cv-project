import React, { Component } from 'react'

export default class Preview extends Component {
    render() {

        const name = {
            fontSize: '50px'
        }

        const personalData = {
            float: 'right',
            marginTop: '-100px',
            fontSize: '15px',
            textAlign: 'right'
        }


        const divider = {
            borderBottom: 'solid 1px #425168'
        }

        const educationData = {
            fontSize: '20px',

        }

        const subdata = {
            fontWeight: '700'

        }

        const workData = {
        }

        return (
            <div>
                <div>
                    <div style={name}>
                        <h2 >{this.props.personalInfo.fname}</h2>
                        <h2 >{this.props.personalInfo.lname}</h2>
                    </div>
                    <div style={personalData}>
                        <h3 >Personal Data:</h3>
                        <br/>
                        <p>{this.props.personalInfo.address}</p>
                        <p>{this.props.personalInfo.email}</p>
                        <p>{this.props.personalInfo.phone}</p>
                    </div>
                    <br/>
                    <br/>
                    <div style={divider}></div>
                    <br/>
                    <br/>
                </div>

                <h2 >Education</h2>
                <br/>
                <div style={educationData}>
                    <div style={subdata}>
                        <p>{this.props.educationInfo.school}, {this.props.educationInfo.city}</p>
                        <p>{this.props.educationInfo.from} - {this.props.educationInfo.to}</p>
                    </div>
                    <br/>
                    <p>Degree: {this.props.educationInfo.degree}</p>
                    <p>{this.props.educationInfo.description}</p>
                    <br/>
                    <br/>
                    <div style={divider}></div>
                    <br/>
                    <br/>
                </div>


                <h2 >Work experience</h2>
                <br/>
                <div style={workData}>
                    <div style={subdata}>
                        <p>{this.props.workInfo.position}</p>
                        <p>{this.props.workInfo.from} - {this.props.workInfo.to}</p>
                    </div>
                    <br/>
                    <p>{this.props.workInfo.company}, {this.props.workInfo.city}</p>
                </div>
            </div>
        )
    }
}
