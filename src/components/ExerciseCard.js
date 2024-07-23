import React from 'react'




const ExerciseCard = ({ exercise }) => {



    return (

        //Each card is a link
        <div>

            <img src={exercise.gifUrl} alt={exercise.name} loading='lazy' />

            <div className='exercise-card-target'>
                <button className='card-bodyPart'>{exercise.bodyPart}</button>
                <button className='card-targetGroup'>{exercise.target}</button>
            </div>
            <h2 className="card-exerciseName">{exercise.name}</h2>
        </div>
    )
}

export default ExerciseCard