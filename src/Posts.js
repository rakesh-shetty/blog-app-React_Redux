import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

class Posts extends React.Component {
    constructor() {
        super()
        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        axios.get('http://jsonplaceholder.typicode.com/posts')
        .then((response) => {
            const posts = response.data
            this.setState({ posts })
        })
    }

    render() {
        return (
            <div>
                <h2>Total posts : {this.state.posts.length} </h2>
                <ul>
                    {
                        this.state.posts.map(post => {
                            return <li key={post.id}> <Link to={`/posts/${post.id}`}>{post.title}</Link> </li>
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default Posts