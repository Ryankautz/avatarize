import React from "react";

class Filtro extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            age: 0
        }
    }
    handleChange = (event) => {
        this.setState({
            age: event.target.value
        })
    }
    render() {
        return (
            <div className="filter">
                <form>
                    <label>Idade:</label>
                    <input type="number" value={this.state.age} onChange={this.handleChange} />
                </form> 
            </div>
        );
    }
}

export default Filtro