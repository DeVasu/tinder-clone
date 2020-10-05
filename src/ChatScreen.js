import React, { useState } from 'react';

const ChatScreen = (props) => {

    const [messages, setMessages] = useState([
        {
            name: 'Ellen',
            image: '...',
            message: 'What up'
        },
        {
            name: 'Ellen',
            image: '...',
            message: 'How it'
        },
        {
            message: 'How is it'
        },
    ])

    return (
        <div>
            <p>You matched with Allen on 10/08/2002</p>
            {messages.map( (message) => (
                <div>
                    <p>{message.message}</p>
                </div>
            ))}
        </div>
    );
}

export default ChatScreen;