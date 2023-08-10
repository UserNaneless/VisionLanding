import React, { Component, useRef } from 'react'

import "./CommentsSection.css"
import Comment from './comment/Comment'

export default class CommentsSection extends Component {
    render() {
        return (
            <div className="commentSection section">
                <div className="commentSectionWrapper sectionWrapper">
                    <div className="commentSectionLeft">
                        <div className="commentSectionTitle">​To provide a safe and enjoyable environment for all of our clients and work with our clients to achieve the results to services they request, while focusing their hair, nail, and skin health.</div>
                        <div className="commentSectionText">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error, repudiandae. Quibusdam impedit asperiores, obcaecati reprehenderit voluptatem eum dignissimos molestias laboriosam ea vitae magni reiciendis ipsum dolorem optio sapiente sequi quidem iusto corporis, illum doloremque? Qui ipsa laborum perferendis a?</div>
                        <button className="commentSectionButton mainButton">learn more</button>
                    </div>
                    <div className="commentSectionRight">
                        <Comment commentInfo={ {author: "Celia Almeda", text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus voluptatum eum tenetur eos impedit neque ex modi corporis enim asperiores quod commodi illo, laudantium nobis odit eaque."} } />
                        <Comment commentInfo={ {author: "Frank Kinney", text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus voluptatum eum tenetur eos impedit neque ex modi corporis enim asperiores quod commodi illo, laudantium nobis odit eaque."} } />
                    </div>
                </div>
            </div>
        )
    }
}
