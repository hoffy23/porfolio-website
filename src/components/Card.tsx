
interface CardProps {
    title: string;
    description: string;
    image: ImageProps;
}

interface ImageProps {
    src: string;
    alt: string;
}

const Card = ({ title, description, image }: CardProps) => {
    return (
        <div className="w-full sm:w-1/3 lg:w-1/4 p-2">
            <div className="min-h-full border rounded-lg p-4 mb-4">
                <h2 className="text-xl font-bold text-center">{title}</h2>
                <img className="w-full h-auto mx-auto" src={image.src} alt={image.alt} />
                <p className="text-gray-700">{description}</p>
            </div>
        </div>
    );
};

export default Card;
