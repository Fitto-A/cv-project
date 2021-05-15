import React, { Component } from "react";

import './App.css';

import PersonalData from "./components/PersonalData";
import EducationData from "./components/EducationData";
import WorkData from './components/WorkData'
import Preview from './components/Preview';


class App extends Component {

  state = {
      personalInfo:{
        fname: '',
        lname: '',
        address: '',
        email: '',
        phone: ''
      },
      educationInfo:{
        school: '',
        degree: '',
        from: '',
        to: '',
        description: '',
        city: '',
        id: 1
      },
      workInfo:{
        company: '',
        position: '',
        city: '',
        from: '',
        to: ''
      }
  }
  
  addPersonalData = (fname, lname, address, email, phone) => {
    const newInfo = {
      fname: fname,
      lname: lname,
      address: address,
      email: email,
      phone: phone
    }
    console.log(newInfo);
    this.setState({
      personalInfo: newInfo
    })
  }
  

  addEducationData = (school, degree, from, to, description, city) =>{
    const newInfo = {
      school: school,
      degree: degree,
      from: from,
      to: to,
      description: description,
      city: city,
      id: 2
    }
    console.log(newInfo);
    this.setState({
      educationInfo: newInfo
    })
  }

  addWorkData = (company, position, city, from, to) => {
    const newInfo = {
      company: company,
      position: position,
      city: city,
      from: from,
      to: to
    }
    this.setState({
      workInfo: newInfo
    })
  }

  activePreview = () => {
    const main = document.getElementById('main');
    const preview = document.getElementById('preview');
    const btn = document.getElementById('btnPreview');
    if (preview.style.display === 'none' && main.style.display === 'block'){
      main.style.display = 'none';
      preview.style.display = 'block';
      btn.textContent = 'EDIT';
      btn.style.background = '#DD6C49';

    }else {
      main.style.display = 'block';
      preview.style.display = 'none';
      btn.textContent = 'PREVIEW';
    }
  }


  render(){
    return <div className='page'>
      <div id='header'>
      <h1 id='title'>CV CREATOR</h1>
      </div>
      <div id='main'>
        <PersonalData addPersonalData={this.addPersonalData}/>
        <EducationData addEducationData={this.addEducationData}/>
        <WorkData addWorkData={this.addWorkData}/>
      </div>

      <div id='preview'>
        <Preview 
          personalInfo={this.state.personalInfo} 
          educationInfo={this.state.educationInfo}
          workInfo={this.state.workInfo}
        />
      </div>

      <button id='btnPreview' onClick={this.activePreview}>
          PREVIEW
      </button>

    </div>
  }
}

export default App;