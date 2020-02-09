import axios from 'axios';
import { BASE_URL } from '../url/index';

export async function useSearch(query: String){
  const data = await axios.get(`${BASE_URL}/Search/${query}`)
    .then(res =>{
      return res.data.search;
    }).catch(err =>{
      console.log(err)
    });
  return data;
};

export async function useLatestAnime(){
  const data = await axios.get(`${BASE_URL}/LatestAnimeAdded`)
    .then(res =>{
      return res.data.animes
    }).catch(err =>{
      console.log(err)
    });
  return data;
};

export async function useLatestEpisodes(){
  const data = await axios.get(`${BASE_URL}/LatestEpisodesAdded`)
    .then(res =>{
      return res.data.episodes
    }).catch(err =>{
      console.log(err)
    });
  return data;
};

export async function useGetAnimeServers(id: String){
  const data = await axios.get(`${BASE_URL}/GetAnimeServers/${id}`)
    .then(res =>{
      return res.data.servers
    }).catch(err =>{
      console.log(err)
    });
  return data;
};

export async function useGetGenres(genre: String , sortBy: String , page: Number){
  const data = await axios.get(`${BASE_URL}/Genres/${genre}/${sortBy}/${page}`)
    .then(res =>{
      return res.data.animes
    }).catch(err =>{
      console.log(err)
    });
  return data;
};

export async function useGetMovies(sortBy: String , page: Number){
  const data = await axios.get(`${BASE_URL}/Movies/${sortBy}/${page}`)
    .then(res =>{
      return res.data.movies
    }).catch(err =>{
      console.log(err)
    });
  return data;
};

export async function useGetSpecial(sortBy: String , page: Number){
  const data = await axios.get(`${BASE_URL}/Special/${sortBy}/${page}`)
    .then(res =>{
      return res.data.special
    }).catch(err =>{
      console.log(err)
    });
  return data;
};

export async function useGetOva(sortBy: String , page: Number){
  const data = await axios.get(`${BASE_URL}/Ova/${sortBy}/${page}`)
    .then(res =>{
      return res.data.ova
    }).catch(err =>{
      console.log(err)
    });
  return data;
};

export async function useGetTV(sortBy: String , page: Number){
  const data = await axios.get(`${BASE_URL}/TV/${sortBy}/${page}`)
    .then(res =>{
      return res.data.tv
    }).catch(err =>{
      console.log(err)
    });
  return data;
};

export async function useAnimeByState(state: Number , order: String , page: Number){
  const data = await axios.get(`${BASE_URL}/AnimeByState/${state}/${order}/${page}`)
    .then(res =>{
      return res.data.animes
    }).catch(err =>{
      console.log(err)
    });
  return data;
};

export async function useGetAnimeCharacters(title: String){
  const data = await axios.get(`${BASE_URL}/AnimeCharacters/${title}`)
    .then(res =>{
      return res.data.characters
    }).catch(err =>{
      console.log(err)
    });
  return data;
};

export async function useGetAnimePromo(title: String){
  const data = await axios.get(`${BASE_URL}/AnimeTrailers/${title}`)
    .then(res =>{
      return res.data.trailers
    }).catch(err =>{
      console.log(err)
    });
  return data;
};

export async function useDownloadLinksByEpsId(epsId: String){
  const data = await axios.get(`${BASE_URL}/DownloadLinksByEpsId/${epsId}`)
    .then(res =>{
      return res.data.downloads
    }).catch(err =>{
      console.log(err)
    });
  return data;
};

export async function useGetAnimeInfo(id: String , title: String){
  const data = await axios.get(`${BASE_URL}/GetAnimeInfo/${id}/${title}`)
    .then(res =>{
      return res.data.info
    }).catch(err =>{
      console.log(err)
    });
  return data;
};


