import React from 'react'

export default class SushiWallet extends React.Component{

    state={
        value: 0
    }

    handleChange = (e) => {
        this.setState({value: parseInt(e.target.value)})
    }

    render() {
        return(
            <div>
                <form onSubmit={(e) => this.props.addMoney(e, this.state.value)}>
                    <label>Enter desired amount of money: </label>
                    <input type='text' placeholder='$10, $1, $2,...' onChange={this.handleChange}/>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        )
    }
}