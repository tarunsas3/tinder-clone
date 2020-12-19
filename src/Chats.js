import React from "react";
import "./Chats.css";
import Chat from './Chat'

function Chats() {
  return (
    <div className="chats">
      <Chat
      name="Mila Kunis" 
      message="Hey Mila! How are you 😘" 
      timeStamp="35 minutes ago" 
      profilePic="https://instagram.fmaa3-1.fna.fbcdn.net/v/t51.12442-15/e35/c37.204.690.690a/s150x150/52964926_2277768715876534_8971317253836288144_n.jpg?_nc_ht=instagram.fmaa3-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=QPwSVt2-UkYAX9e3eTs&tp=1&oh=40fb93b35e200d4ed6404eb93a3a7d8e&oe=5FBF2441"
     />
     <Chat
      name="Emma Watson" 
      message="Hey! Whats up 🧡" 
      timeStamp="55 minutes ago" 
      profilePic="https://www.hawtcelebs.com/wp-content/uploads/2016/01/emma-watson-goodread-profile_1.jpg"
     />
     <Chat
      name="Amber Heard" 
      message="Hola!" 
      timeStamp="3 days ago" 
      profilePic="https://cdn.newsapi.com.au/image/v1/1ec39761db43541fa7db88c6dc9b3e73"
     />
     <Chat
      name="Margot Robbie" 
      message="Hey Maggie! Whats up Darling 😍" 
      timeStamp="5 days ago" 
      profilePic="https://www.itl.cat/pngfile/big/255-2559489_margot-robbie-wallpaper.jpg"
     />
     <Chat
      name="Alexandra Daddario" 
      message="Whats up Baby 🥰" 
      timeStamp="1 week ago" 
      profilePic="https://wallpapercave.com/wp/wp1827510.jpg"
     />
    </div>
  );
}

export default Chats;
