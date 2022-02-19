export interface ICharacter {
  image: string;
  url: string;
  name: string;
  status: string;
  species: string;
  location: ILocation;
  episode: [string];
}

interface ILocation {
  name: string;
  url: string;
}
