import './App.css'
import Post from './components/Post'
import data from './PostData'
function App() {

  const allPosts = data.map(postdata =>{
    return (
    <Post
    key={postdata.id}
    {...postdata}
    />
    )
  })

  return (
    <>
    <div className="instagram-post">
      {allPosts}
    </div>
    </>
  )
}

export default App
