import React, { useState } from 'react';
import Exercises from '../components/Exercises';
import ExerciseSearch from '../components/ExerciseSearch';
import HeroBanner from '../components/HeroBanner';
import Quotes from '../components/Quotes';
import Footer from '../components/Footer';



const Home = () => {
    const [exercises, setExercises] = useState([]);
    const [bodyPart, setBodyPart] = useState('all');

    return (
        <div>
            <HeroBanner />
            <ExerciseSearch setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} />
            <Exercises setExercises={setExercises} exercises={exercises} bodyPart={bodyPart} />
            <Quotes id="quotes" />
            <Footer />
        </div>
    );
};

export default Home;