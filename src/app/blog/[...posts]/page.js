'use client'
const Posts = ({params}) => {
    return (
      <>
       <h2>Blog: {params.posts[0]}</h2> 
       <h2>Post: {params.posts[1]}</h2> 
      </>
    );
  }
  
  export default Posts;