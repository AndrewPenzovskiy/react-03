import React from "react";

class TestCC extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
        this.st1 = {
            count: 0
        }
    }

    render() {
        return (
            <>
                <h2>This is class component</h2>

                <h4>Count: {this.st1.count}</h4>
            </>
        )
    }
}
export default TestCC