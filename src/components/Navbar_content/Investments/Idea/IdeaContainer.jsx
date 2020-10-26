import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import Idea from "./Idea";

class IdeaContainer extends React.Component {
    componentDidMount() {
        // матч парамс + запрос
    }

    render() {
        return (
            <Idea idea={this.props.idea}/>
        )
    }
}

let mapStateToProps = (state) => ({
    idea: state.ideas.idea,
});

export default compose(
    connect(mapStateToProps),
    withRouter
)(IdeaContainer)