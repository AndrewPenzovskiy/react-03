import React from "react";

class TestCC extends React.Component {
    constructor(props) {
        super(props);
        this.addRef = React.createRef()
        this.newCommentRef = React.createRef()
        this.state = {
            count: 0,
            comments: []
        }
    }

    incrementCount = ()=> {
        let changedCount = this.state.count
        changedCount++
        this.setState({
            count: changedCount
        })
        console.log(changedCount);
    }
    commentHandler = ()=> {
       let newComment = this.newCommentRef.current
       let currComments = this.state.comments
       console.log(newComment.value);
       currComments.push(newComment.value)
        this.setState({
            comments: currComments
        })
    }

    render() {
        return (
            <>
                <h2>This is class component</h2>
                <h4>Count: {this.state.count}</h4>
                <button ref={this.addRef} onClick={this.incrementCount}>Add</button>
                <hr/>
                <div>
                    <textarea ref={this.newCommentRef}></textarea>
                    <button onClick={this.commentHandler}>Push Comment</button>
                    <ul>
                        {this.state.comments.map((comment, index) => <li key={comment+index}>{comment}</li>)}
                    </ul>
                </div>
            </>
        )
    }
}

export default TestCC