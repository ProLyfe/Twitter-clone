import React, { useState  }from 'react';
import './TweetBox.css';
import { Avatar, Button  } from '@material-ui/core';
import db from '../Firebase';

const TweetBox = () => {
    const [tweetMessage, setTweetMessage] = useState('');
    const [tweetImage, setTweetImage] = useState('');

    const sendTweet = e => {
        e.preventDefault();

        db.collection('posts').add({
            displayName: "Rayane",
            username: 'prolyfe',
            verified: true,
            text: tweetMessage,
            avatar: 'https://avatars0.githubusercontent.com/u/55027584?s=460&u=112dc991b5c04d6e099f036fdcd81e05e82fc9bd&v=4',
            image: tweetImage
        });

        setTweetMessage("");
        setTweetImage("");
    };

    return(
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src="https://avatars0.githubusercontent.com/u/55027584?s=460&u=112dc991b5c04d6e099f036fdcd81e05e82fc9bd&v=4"/>
                    <input  
                        onChange={(e) => setTweetMessage(e.target.value)}
                        value={tweetMessage} 
                        placeholder="What's happening ?" 
                        type="text"/>
                </div>
                <input 
                    value={tweetImage}
                    onChange={e => setTweetImage(e.target.value)}
                    className="tweetBox__imageInput" 
                    placeholder="Optional : Enter image url" 
                    type="text"/>
                <Button onClick={sendTweet} type="submit" className="tweetBox__tweetButton">Tweet</Button>
            </form>
        </div>
    );
};

export default TweetBox;