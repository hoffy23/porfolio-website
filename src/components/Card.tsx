// title 
// description string

//import React from "react";
// screenshot File
interface CardProps {
    title: string;
    description: string;
    image: ImageProps;
}
interface ImageProps {
    src: string;
    alt: string;
}

const Card = ({title, description, image}:CardProps) => {
    return(
        <div className="flex-1 w-full mx-4 sm:w-1/2 lg:w-1/3 min-h-full border rounded-lg p-4 ">
           <h2 className="text-xl font-bold text-center">{title}</h2>
           
           <img className="w-1/2 h-auto mx-auto" src={image.src} alt={image.alt} ></img>
           <p className="text-gray-700">{description}</p>
            
        </div>
    );
};

export default Card;
