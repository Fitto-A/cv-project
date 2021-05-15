import React, { Component } from 'react'

export default class WorkData extends Component {

    state = {
        company: '',
        position: '',
        city: '',
        from: '',
        to: ''
    }

    onSubmit = e => {
        this.props.addWorkData(this.state.company, this.state.position, this.state.city, this.state.from, this.state.to)
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
                    <h2 style={subTitle}>Work experience</h2>

                    <div style={grid}>
                        <div style={gridL}>
                            <label htmlFor='company'>Company:</label>
                            <input 
                                name='company' 
                                type='text' 
                                placeholder='Company'
                                onChange={this.onChange}
                                value={this.state.company}
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
                            <label htmlFor='position'>Position:</label>
                            <input 
                                name='position' 
                                type='text' 
                                placeholder='Position'
                                onChange={this.onChange}
                                value={this.state.position}
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
                                value={this.state.From}
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
                        </div>
                    </div>

                    <button type="submit" style={btnSave}>
                        SAVE
                    </button>

                </form>
            </div>
        )
    }
}
