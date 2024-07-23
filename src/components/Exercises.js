//Used to display our exercises when we click BodyPartCards


import React from 'react'
import { useEffect, useState } from 'react'

import { exerciseOptions, fetchData } from '../utils/fetchData'


//Our exercise Card to show the Gifs of exercises
import ExerciseCard from './ExerciseCard'
import { Pagination } from '@mui/material'

const Exercises = ({ exercises, setExercises, bodyPart }) => {


    const [currentPage, setCurrentPage] = useState(1);
    const exercisesPerPage = 9;

    /*We get first and last exercise and slice to get 
        current exercises and display the current exercises 
         instead of all with thhe help of paginate*/
    const indexOfLastExercise = currentPage * exercisesPerPage
    const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
    const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise)



    const paginate = (e, value) => {

        setCurrentPage(value)
        window.scrollTo({ top: 800, behavior: 'smooth' })

    }

    //We want to call this anytime BodyPart Changes to display exercises with bodyPart Target
    useEffect(() => {

        const fetchExercisesData = async () => {

            let exercisesData = [];

            //By default we have bodyPart set to all
            if (bodyPart === 'all') {

                //THis is from ExerciseSearch.js to get all exercises
                exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises?limit=900', exerciseOptions);

            }
            //If not set to all, we want to display user selected BodyPart exercises
            else {

                exercisesData = await
                    fetchData(
                        //Pass in bodyPart to the url
                        `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
                        exerciseOptions);


            }

            //Set exercises to the data accordingly from abive
            setExercises(exercisesData)


        }

        //Call our function
        fetchExercisesData()
    }, [bodyPart, setExercises])

    return (
        <div className='display-exercises'
            id="exercises" >


            <h3>Showing Results: </h3>

            <div className="category-results">



                {


                    currentExercises.length !== 0 ? currentExercises.map((exercise, index) => (
                        <ExerciseCard exercise={exercise} key={index} />
                    )) : "No Exercises Match that Search"



                }




            </div>

            <div>
                {exercises.length > 9 && (
                    //When too many results will give different views
                    //Ex: Page 1, Page 2 etc
                    <Pagination
                        color='standard'
                        shape="rounded"
                        defaultPage={1}
                        count={Math.ceil(exercises.length / exercisesPerPage)}

                        //Pass ReactState
                        page={currentPage}
                        onChange={paginate}
                        size='large'

                    />

                )}
            </div>

        </div>
    )
}

export default Exercises