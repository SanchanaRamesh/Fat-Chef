import React, { Component } from 'react'
import axios from 'axios'

export default class GetEx extends Component {
    constructor (props) {
        super(props)
    this.state={
        posts:[]
    }
}
handler()
{
    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then((res)=>{
        
    this.setState({post:res.data})
})
}
  render() {
    
    return (
     <tr>
     <td>{post.userId}</td>
     <td>{post.title}</td>
     <td>{post.body}</td>
     </tr>)
    }
    )}
      
      </table>
      ((post) =><ul key={post.id}><li>{post.title}</li></ul>)}</p>
        </div>
    )
  }
}
