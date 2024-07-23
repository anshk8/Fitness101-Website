import React from 'react'

import BodyPartCard from './BodyPartCard';

/*NOTE: Data is from the USeState bodyParts which is set from calls 
to the API that takes body part data, this is found in ExerciseSearch.js*/

const ScrollBar = ({ data, bodyPart, setBodyPart }) => (
    <div className='body-categories'>
        {data.map((item) => (
            <div
                key={item.id || item}
                itemId={item.id || item}
                title={item.id || item}
            >
                <BodyPartCard
                    item={item}
                    bodyPart={bodyPart}
                    setBodyPart={setBodyPart}
                />
            </div>
        ))}
    </div>
);


export default ScrollBar;