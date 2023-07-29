import BlogList from "./BlogList";
import useFetch from "./useFetch";
import { useState } from "react";

const Home = () => {
  const { error, isPending, data: blogs } = useFetch('https://my-json-server.typicode.com/nikhilkumarmarati/mockjson/blogs');
  const [Username, setUsername] = useState('');
  const [body, setBody] = useState('');
  const [Pending, setPending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { Username, body };
  
    setPending(true); // Set Pending state to true before making the request
  
    fetch('https://my-json-server.typicode.com/nikhilkumarmarati/mockjson/blogs', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog)
    })
    .then(() => {
      setPending(false);
      setUsername('');
      setBody('');
      window.location.reload();
    })
    .catch((error) => {
      console.error('Error posting blog:', error);
      setPending(false); // Make sure to set the Pending state to false on error too
    });
  }

  return (
    <div className="home">
      { error && <div>{ error }</div> }

      <div className="create">
        <form onSubmit={handleSubmit}>
            <input 
            placeholder="Type your username here..."
            required
            value={Username}
            onChange={(e) => setUsername(e.target.value)}
            />
            <textarea
            placeholder="Type your post here..."
            required
            value={body}
            onChange={(e) => setBody(e.target.value)}
            ></textarea>

            { !Pending && <button>post</button>}
            { Pending && <button disabled>posting...</button>}
        </form>
      </div>
      
      { isPending && <div>Loading...</div> }
      
      { blogs && <BlogList blogs={blogs} /> }
    </div>
  );
}

export default Home;
