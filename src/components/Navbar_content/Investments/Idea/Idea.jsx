import React from 'react';
import IdeaInfo from "./IdeaInfo/IdeaInfo";

const Idea = (props) => {
    return (
        <div>
            <IdeaInfo idea={props.idea}/>
        </div>
    )
}

export default Idea;