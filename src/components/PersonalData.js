import React, { Component } from "react";

class PersonalData extends Component {

    state = {
        fname: '',
        lname: '',
        address: '',
        email: '',
        phone: ''
    }

    onSubmit = e => {
        this.props.addPersonalData(this.state.fname, this.state.lname, this.state.address, this.state.email, this.state.phone)
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
            margin: '15px'
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


        return <div >
            <form onSubmit={this.onSubmit}>
                <h2 style={subTitle}>Personal information</h2>

                <div style={grid}>
                    <div style={gridL}>
                        <label htmlFor='fname'>First name:</label>
                        <input 
                        name='fname' 
                        type='text' 
                        placeholder='First name'
                        onChange={this.onChange}
                        value={this.state.fname}
                        style={input}
                        />
                        <br/><br/>
                        <label htmlFor='lname'>Last name:</label>
                        <input 
                        name='lname' 
                        type='text' 
                        placeholder='Last name'
                        onChange={this.onChange}
                        value={this.state.lname}
                        style={input}
                        />
                        <br/><br/>
                        <label htmlFor='address'>Address:</label>
                        <input 
                        name='address' 
                        type='text' 
                        placeholder='Address'
                        onChange={this.onChange}
                        value={this.state.address}
                        style={input}
                        />
                    </div>

                    <div style={gridR}>
                        <label htmlFor='email'>Email:</label>
                        <input name='email' 
                        type='text' 
                        placeholder='myemail@gmail.com'
                        onChange={this.onChange}
                        value={this.state.email}
                        style={input}
                        />
                        <br/><br/>
                        <label htmlFor='phone'>Phone number:</label>
                        <input name='phone' 
                        type='text' 
                        placeholder='123-456-789'
                        onChange={this.onChange}
                        value={this.state.phone}
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
    }

} 



export default PersonalData;