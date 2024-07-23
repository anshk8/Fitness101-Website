import { TextField } from '@mui/material';
import React from 'react'
import { useEffect, useState } from 'react';
import ScrollBar from './ScrollBar';


//API Related, file in Utils
import { fetchData } from '../utils/fetchData';
import { exerciseOptions } from '../utils/fetchData';


// Accept props from the home page
const ExerciseSearch = ({ setExercises, bodyPart, setBodyPart }) => {



    //State to handle searching
    const [search, setSearch] = useState('');



    //For Body Part CAtegories
    const [bodyParts, setBodyParts] = useState([]);

    // Body part Categories, only run once
    useEffect(() => {
        const fetchExercisesData = async () => {
            const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);

            setBodyParts(['all', ...bodyPartsData]);
        };

        fetchExercisesData();
    }, []);

    // useEffect(() => {
    //     const fetchExercisesData = async () => {
    //         try {
    //             // Fetch body parts
    //             const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);
    //             setBodyParts(['all', ...bodyPartsData]);

    //             // Fetch some initial exercises for logging
    //             const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
    //             console.log('Exercises:', exercisesData);
    //             exercisesData.slice(0, 5).forEach(exercise => {
    //                 console.log(`Exercise: ${exercise.name}`);

    //             });
    //         } catch (error) {
    //             console.error('Error fetching data:', error);
    //         }
    //     };

    //     fetchExercisesData();
    // }, []);

    //To handle search
    const handleSearch = async () => {
        if (search) {

            /*Data wasn't showing up proper, after debugging HORUS LOL 
            found if limit set higher to fetch up to 900 Exercises, IT
            WORKS*/
            const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises?limit=900', exerciseOptions);

            const searchedExercises = exercisesData.filter(
                (item) => item.name.toLowerCase().includes(search)
                    || item.target.toLowerCase().includes(search)
                    || item.equipment.toLowerCase().includes(search)
                    || item.bodyPart.toLowerCase().includes(search),
            );



            //Click Search and will scroll down
            window.scrollTo({ top: 50, left: 100, behavior: 'smooth' });

            setSearch('');
            setExercises(searchedExercises);
            console.log(exercisesData)
            console.log(searchedExercises)
        }
    };


    return (
        <div id="exercises" className='exercise-search'>
            <h1>Search Exercises!</h1>



            {/* Our search bar onChange to edit with useState, value of search from useState*/}
            <div className='search-field'>
                <TextField
                    height="76px"
                    value={search}
                    onChange={(e) => setSearch(e.target.value.toLowerCase())}
                    placeholder="Search Exercises"
                    type="text"
                />


                {/* OnClick we call the handle search function which then uses APi */}
                <button onClick={handleSearch} className='search-button'>Search</button>

            </div>

            <div >
                <ScrollBar

                    /*DATA is from the USeState bodyParts which is set from calls to the API that takes body part data*/
                    data={bodyParts} bodyParts setBodyPart={setBodyPart} bodyPart={bodyPart}
                />

            </div>


        </div>
    )
}

export default ExerciseSearch