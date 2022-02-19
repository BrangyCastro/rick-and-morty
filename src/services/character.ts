import axios from "axios";

export const fechDataCharacter = async () => {
  try {
    const response = await axios.get(
      `https://rickandmortyapi.com/api/character`
    );
    const { results } = response.data;
    return results;
  } catch (error) {
    console.log(error);
  }
};

export const fechDataEpisode = async (url: string) => {
  try {
    const response = await axios.get(url);
    const { data } = response;
    return data;
  } catch (error) {
    console.log(error);
  }
};
