import { useEffect, useState } from "react";
import { ICharacter } from "../../interfaces/character";
import { fechDataEpisode } from "../../services/character";
import "./Card.css";

type Props = {
  data: ICharacter;
};

export const Card = ({ data }: Props) => {
  const [firstEpisode, setFirstEpisode] = useState<String>("");

  const handleEpisodeData = async (url: string) => {
    const results = await fechDataEpisode(url);
    setFirstEpisode(results.name);
  };

  useEffect(() => {
    handleEpisodeData(data.episode[0]);
  }, [data]);

  return (
    <div className="card">
      <div className="card-img">
        <img src={data.image} alt={data.name} />
      </div>
      <div className="card-body">
        <div className="section">
          <a href={data.url} target="_blank" rel="noreferrer">
            <h2>{data.name}</h2>
          </a>
          <span className="status">
            <span className="status-icon"></span>
            {data.status} - {data.species}
          </span>
        </div>
        <div className="section">
          <span className="text-grey">Last known location:</span>
          <a
            href={data.location.url}
            target="_blank"
            rel="noreferrer"
            className="sub-title"
          >
            {data.location.name}
          </a>
        </div>
        <div className="section">
          <span className="text-grey">First seen in:</span>
          <a
            href={data.episode[0]}
            target="_blank"
            rel="noreferrer"
            className="sub-title"
          >
            {firstEpisode}
          </a>
        </div>
      </div>
    </div>
  );
};
