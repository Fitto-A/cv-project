import React, { Component } from 'react'

export default class EducationData extends Component {

    state ={
        school: '',
        degree: '',
        from: '',
        to: '',
        description: '',
        city: ''
    }

    onSubmit = e => {
        this.props.addEducationData(this.state.school, this.state.degree, this.state.from, this.state.to, this.state.description, this.state.city)
        e.preventDefault();
    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }




    render() {

        //STYLE

        const subTitle = {
            color: '#1C6E8C',
            fontSize: '25px',
            fontWeight: '700',
            margin: '20px auto 50px auto'
        }

        
        const btnSave = {
            cursor: 'pointer',
            border: 'none',
            background: '#1C6E8C',
            color: '#E2D0A9',
            fontSize: '15px',
            fontWeight: '600',
            borderRadius: '5%',
            padding: '12px 30px 12px 30px',
            margin: '35px auto 15px auto'
        }

        const divider ={
            marginTop: '15px',
            borderBottom: 'solid 2px #E96B47'
        }


        const grid = {
            marginTop: '10px',
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gridAutoRows: 'minmax(100px, auto)',
            gridGap: '50px',
            fontSize: '20px',
            textAlign: 'left'
        }
    
        
        const gridL = {
            gridColumn: '1 / 2'
        }
    
        const gridR = {
            gridColumn: '2 / 2'
        }
    
        const input = {
            fontSize: '20px',
            marginLeft: '1rem',
            border: 'none',
            borderBottom: '2px solid #2495AA',
            
        }

        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <h2 style={subTitle}>Education</h2>
                    <div style={grid}>

                        <div style={gridL}>
                            <label htmlFor='school'>University or school name:</label>
                            <input 
                                name='school' 
                                type='text' 
                                placeholder='University or school name'
                                onChange={this.onChange}
                                value={this.state.school}
                                style={input}
                                />
                            <br/><br/>
                            <label htmlFor='city'>City:</label>
                            <input 
                                name='city' 
                                type='text' 
                                placeholder='City'
                                onChange={this.onChange}
                                value={this.state.city}
                                style={input}
                                />
                            <br/><br/>
                            <label htmlFor='degree'>Degree:</label>
                            <input 
                                name='degree' 
                                type='text' 
                                placeholder='Degree'
                                onChange={this.onChange}
                                value={this.state.degree}
                                style={input}
                                />
                        </div>

                        <div style={gridR}>
                            <label htmlFor='from'>From:</label>
                            <input 
                                name='from' 
                                type='text' 
                                placeholder='YYYY'
                                onChange={this.onChange}
                                value={this.state.from}
                                style={input}
                                />
                            <br/><br/>
                            <label htmlFor='to'>To:</label>
                            <input 
                                name='to' 
                                type='text' 
                                placeholder='YYYY or Present'
                                onChange={this.onChange}
                                value={this.state.to}
                                style={input}
                                />           
                            <br/><br/>
                            <label htmlFor='description'>Description or archivments:</label>
                            <input 
                                name='description' 
                                type='text' 
                                placeholder='Description'
                                onChange={this.onChange}
                                value={this.state.description}
                                style={input}
                                />
                        </div>
                    </div>
                    <button type="submit" style={btnSave}>
                                SAVE
                    </button>
                    <div style={divider}></div>
                    <br/>
                </form>
            </div>
        )
    }
}
