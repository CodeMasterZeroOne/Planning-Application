import React from 'react'

const ProjectDetails = (props) => {
    const id = props.match.params.id
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content listItem">
                    <span className="card-title">Project Title - {id}</span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi laborum optio dolores dolorum aliquid. Modi dolorum nihil porro ea, voluptatem nesciunt quaerat beatae illum eveniet ratione voluptas numquam eum nulla?</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted by the Pawel Gajewski</div>
                    <div>29th February, 9am</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails

