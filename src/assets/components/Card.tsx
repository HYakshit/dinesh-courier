interface CardProps {
  title: string;
  description: string;
  src: string;
}

const Card = ({ title, description, src }: CardProps) => {
  return (
    <div className="card" >
      <img src={src} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
      </div>
    </div>
  );
};

export default Card;
