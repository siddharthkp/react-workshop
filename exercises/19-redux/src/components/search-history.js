import React, { Component } from "react"
import { connect } from "react-redux"

class SearchHistory extends Component {
    renderList() {
        console.log(this.props.history)
        return this.props.history.map(searchedItem => <li> {searchedItem.username} </li>)
    }

    render() {
        return <div>{this.renderList()}</div>
    }
}

function mapStateToProps(state) {
    console.log(state)
    return {
        history: state.home.history,
    }
}

export default connect(mapStateToProps)(SearchHistory)