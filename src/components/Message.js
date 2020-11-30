import React from 'react'
import { Card, CardContent, Typography } from '@material-ui/core';
import './Message.css'

function Message({username , message}) {
  
    let isUser = username === message.username;
    return (
        <div className={`message ${isUser && 'message__user'}`}>
        <Card className={isUser ? 'message__userCard' : 'message__guestCard'}>
            <CardContent>
                <Typography 
                color="white"
                varriant="h5"
                component="h2">
                    {username} :  {message.input}
                </Typography>
            </CardContent>
        </Card>
        </div>
    )
}

export default Message
