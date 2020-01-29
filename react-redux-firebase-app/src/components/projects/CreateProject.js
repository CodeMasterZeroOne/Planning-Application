import React, { Component } from 'react'
import { createProject } from '../../store/actions/projectActions'
import { connect } from 'react-redux'

class CreateProject extends Component {
    state = {
        title: '',
        content: ''
    }
    handleCahnge = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        //console.log(this.state);
        this.props.createProject(this.state)
    }

    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} >
                    <h5 className="grey-text text-darken-3">Create Project</h5>
                    <div className="input-field">
                        <label htmlFor="title">Project Title</label>
                        <input type="text" id="title" onChange={this.handleCahnge} />
                    </div>

                    <div className="input-field">
                        <label htmlFor="content">Project Content</label>
                        <textarea id="content" className="materialize-textarea" onChange={this.handleCahnge} ></textarea>
                    </div>

                    <div className="input-field">
                        <button className="btn green lighten-1 z-dept-0" >Create</button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createProject: (project) => dispatch(createProject(project))
    }
} 

export default connect(null, mapDispatchToProps)(CreateProject)
