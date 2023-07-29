import  { useState } from "react";



const BlogList = ({ blogs, title }) => {

  const [like,setLike] = useState(0);
  const [Islike,SetIslike] = useState(false);
  const [dislike,setdislike] = useState(0);
  const [IsDislike,SetIsDislike] = useState(false);

  const onLikeButtonClick = () =>{
  setLike(like + ( 1));
  SetIslike(true);
}

  const onDislikeButtonClick = () =>{
    setdislike(dislike + ( 1));
    SetIsDislike(true);
  }

  const handleClick = (id) => {
    fetch('https://my-json-server.typicode.com/nikhilkumarmarati/mockjson/blogs' + id, {
      method: 'DELETE'
    })
    .then(() => {
      // Assuming you want to refresh the page after deleting the blog
      window.location.reload();
    })
    .catch((error) => {
      console.error('Error deleting blog:', error);
    });
  };

  return (
    <div className="blog-list"> 
      <h1>All Posts!</h1>    
      {blogs.map(blog => (
        <div className="blog-preview" key={blog.id} >
          
          <div id="deledit">
          <button  onClick={() => handleClick(blog.id)}>delete</button>
          <button >Edit</button>
        </div>

          <h2>{blog.Username}</h2>
          <p>{blog.body}</p>

          <div className="lidislike">
            {!Islike &&<button onClick={onLikeButtonClick}>Like</button>}
            {Islike &&<button onClick={onLikeButtonClick}>Liked</button>}
            <button id="shownum">{like}</button>
            {!IsDislike &&<button onClick={onDislikeButtonClick}>Dislike</button>}
            {IsDislike &&<button onClick={onDislikeButtonClick}>Disliked</button>}
            <button id="shownum">{dislike}</button>
          </div>

        </div>
      ))}
    </div>
  );
}

export default BlogList;
