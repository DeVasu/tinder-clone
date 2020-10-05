import React, { useState, useEffect } from 'react';
import TinderCard from 'react-tinder-card';
import database from './firebase';

import './TinderCards.css'

const TinderCards = () => {

    const [people, setPeople] = useState([]);

    useEffect( () => {
        
        const unsubscribe = database.collection('people').onSnapshot(snapshot => (
            setPeople(snapshot.docs.map(doc => doc.data()))
        ));

        return () => {
            //this is the cleanup
            unsubscribe();
        }

    },[])

    return (
        <div>
            <h1>Tinder Cards</h1>

            <div className="tinderCards__cardContainer">

                {people.map( (person) => (
                    <TinderCard
                        className="swipe"
                        key = {person.name}
                        preventSwipe={['up','down']}    
                    >
                        <div
                            style={{ backgroundImage: `url(${person.url})` }} 
                            className="card"
                        >
                            <h3>{person.name}</h3>
                        </div>
                    </TinderCard>
                ))}
            </div>
        </div>
    )
}

export default TinderCards;