import React , {Component} from 'react';
// import axios from 'axios';
import {connect} from 'react-redux';
class Post extends Component {
    // state ={
    //     post:[]
    // }
    // componentDidMount(){
    //     const id = this.props.match.params.post_id;
    //     axios.get('https://jsonplaceholder.typicode.com/posts/'+id)
    //     .then((res)=>{
    //         console.log(res);
    //         this.setState({
    //            post:res.data 
    //         });
    //     }).catch((err)=>{
    //         console.log(err);
    //     })
    // }
    render() {
         console.log(this.props);
       const handleClick = ()=>{
            this.props.deletePost(this.props.post.id)
            this.props.history.push('/')
        }
        const post = this.props.post ? (
            <div className="post">
                <h4 className="center">{this.props.post.title}</h4>
                <p>{this.props.post.body}</p>
                <div className="center">
                   <button className="btn grey center" onClick={handleClick}>Delete</button>
                </div>
        
            </div>
        ) :(
            <div className="center">Loading .....</div>
        ); 
        return (
             <div className="container">
                {post}
             </div>
        );
    }
}


const mapStateToProps = (state, ownProps)=>{
    let id =  ownProps.match.params.post_id;
    return {
        post : state.posts.find(post =>  post.id == id)
    }
}


const mapDispatchToProps = (dispatch)=>{
    return{
        deletePost: (id)=>{dispatch({type: 'DELETE_POST', id:id})}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);