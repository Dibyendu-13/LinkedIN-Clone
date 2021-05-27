import React,{useState,useEffect} from 'react';
import './Feed.css';
import CreateIcon from '@material-ui/icons/Create';
import InputOption from "./InputOption.js"
import ImageIcon from '@material-ui/icons/Image';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import {db} from "./firebase";
import Post from "./Post.js";
import firebase from 'firebase';
function Feed() {
  const [input,setInput]  =useState("");
  const [posts,setPosts]=useState([]);
  useEffect(()=>{
    db.collection("posts").orderBy("timestamp","desc").onSnapshot//real-time collections of db or real-time listener
    (snapshot=>
    (setPosts(snapshot.docs.map(doc=>(
      {
        id:doc.id,
        data:doc.data(),
      }
    )))))
  },[]);
  const sendPost=(e)=>{
    e.preventDefault();
    db.collection('posts').add({
        name:'Dibyendu Bar',
        description:'Aspiring Software Developer!',
        message:input,
        photoURL:'',
        timestamp:firebase.firestore.FieldValue.serverTimestamp(),

    })
    setInput("");
  }
  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input value={input} onChange={e=>setInput(e.target.value)} type="text" />
            <button onClick={sendPost} type="submit">Send</button>
          </form>
        </div>
        <div className="feed__inputOptions">
        <InputOption Icon={ImageIcon } title="Photo" color="#70B5F9"/>
        <InputOption Icon={ SubscriptionsIcon} title="Video" color="#E7A33E"/>
        <InputOption Icon={EventNoteIcon } title="Event" color="#C0CBCD"/>
        <InputOption Icon={CalendarViewDayIcon } title="Event" color="#7FC15E"/>

        
        {/* */}
        </div>
      </div>
      {posts.map(({id,data:{name,description,message,photoURL}})=>(
      <Post
      key={id}
      name={name}
      description={description}
      message={message}
      photoURL={photoURL}
      />)
      )}
      
    </div>
  );
}
export default Feed;
