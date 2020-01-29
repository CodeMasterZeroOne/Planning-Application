import React from 'react';

const ProjectSummary = ({ project }) => {
    return (
        <div className="card z-depth-0 project-summary listItem">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title">{project.title}</span>
                <p>Posted by the Pawel Gajewski</p>
                <p className="grey-text">29th January, 9am</p>
            </div>
        </div>
    )
}

export default ProjectSummary;