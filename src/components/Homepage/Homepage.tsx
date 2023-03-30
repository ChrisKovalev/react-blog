import {useState, useEffect} from 'react';
import useFetch from '../../useFetch';
import Bloglist from '../BlogList/Bloglist';

const Homepage = () => {
  const {data: blogs, isLoading, error} = useFetch('http://localhost:8000/blogs');

  const [name, setName] = useState('Mario');
  const [age, setAge] = useState(25);

  const handleClick = (e: any) => {
    setName("Luigi");
  }

  const handleClickAgain = (name: string, e: any) => {
    setName("Peach");
    setAge(100);
  }

  const handleDelete = (id: number) => {
    //const newBlogs = blogs.filter((b) => (b.id !== id));
   // setBlogs(newBlogs);
  }


  return (
    <div className="homepage"> 
      {/* <button onClick={handleClick}>Click me</button>
      <button onClick={(e) => handleClickAgain('Peach', e)} >Click me 2</button>
      <p>{name} is {age} years old</p> */}
      {error && <div>{error}</div>}
      {isLoading && <div>Loading...</div>}
      {blogs && <Bloglist blogs={blogs} title="The first blog List" handleDelete={handleDelete}></Bloglist>} 
    </div>
  )
}

export default Homepage;