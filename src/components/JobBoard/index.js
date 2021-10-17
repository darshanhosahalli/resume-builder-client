import React from 'react';
import EditContext from '../../utils/EditContext';

class JobBoard extends React.Component {

    static contextType = EditContext;

    constructor(props) {
        super(props);
        this.state = { jobs: [ ] };
        this.defaultJob = { jobTitle: '', description: ''};
    }

    addJob = () => {
        console.log('add jon called');
        this.setState({ jobs: this.state.jobs.concat(this.defaultJob) });
    }

    renderJobs = () => {
        return this.state.jobs.map((item, index) => {
            return <div key={index} class="comments">
                <div className="content-space">
                    <a className="author">Associate Software Engineer</a>
                    <div className="metadata">
                        <span className="date">from 2020 to present</span>
                    </div>
                    <div className="text">
                        Desription
                    </div>
                </div>
            </div>
        });
    }

    addJobButton = () => {
        if(this.context) {
            return <div className="comment">
                    <div className="content">
                        <a onClick={this.addJob} className="author">Add Job Title</a>
                    </div>
                </div>
        }
    }
    
    render() {
        return <div className="comments">
                    {this.renderJobs()}
                    {this.addJobButton()}
                </div>
    }
}

export default JobBoard;