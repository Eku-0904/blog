import { useEffect, useState } from "react";
import { BlogPost } from "./components/BlogPost";

export default function Home() {
  const [ data, setData] = useState([])
  const [searchValue, setSearchValue] = useState("")
  const [searchedPost,setSearchedPost] = useState()
  useEffect(() => {
    fetch('https://dummyjson.com/posts')
    .then(res => res.json())
    .then(json => setData(json.posts))
  }, []);

  useEffect(()=>{
    // const result = data.filter((element)=>element.title.includes(searchValue))
    fetch(`https://dummyjson.com/posts/${searchValue}`)
    .then(res => res.json())
    .then(json => setSearchedPost(json))
  },[searchValue])
  // console.log(data)
  function handleInput(event){
    setSearchValue(event.target.value)
  }



  return (
    <div className="postContainer">
     <h1 className="head">Get information</h1>
     <input placeholder="Search..."  onChange={handleInput}/>
     <br/>
     {searchedPost?.title ?
     
     <BlogPost key={searchedPost.id} title={searchedPost.title} body={searchedPost.body}/>
     
     :data.map((post) => (
        <BlogPost key={post.id} title={post.title} body={post.body}/>
     ))}
    </div>
  )
}
