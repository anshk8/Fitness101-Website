import React from 'react'
import FlexLogo from "../images/FlexLogo.png"

//BodyPart.j
const BodyPartCard = ({ item, setBodyPart, bodyPart }) => (
    <div type="button" className='bodyPart-card'

        /*Function to handle click */
        onClick={() => {
            setBodyPart(item);
            window.scrollTo({ top: 700, left: 100, behavior: 'smooth' })
        }}>

        <img className='flexArmLogo' src={FlexLogo} alt="Flex Logo" />


        <h1>{item}</h1>


    </div>
);
export default BodyPartCard