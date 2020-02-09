import { Query , Resolver, Args}  from '@nestjs/graphql';
import { 
  useLatestAnime,
  useSearch,
  useLatestEpisodes,
  useGetAnimeServers,
  useGetGenres,
  useGetMovies,
  useGetSpecial,
  useGetOva,
  useGetTV,
  useAnimeByState,
  useGetAnimeCharacters,
  useGetAnimePromo,
  useDownloadLinksByEpsId,
  useGetAnimeInfo
 } from './hooks/index';


@Resolver()
export class AnimesResolver{
  latestAnime = useLatestAnime()
    .then(res =>{
      return res;
    });

  search = (query: String) =>{
    const data = useSearch(query)
      .then(res =>{
        return res;
      });
    return data;
  }

  latestEpisodes = useLatestEpisodes()
    .then(res =>{
      return res;
    })
    
  animeServers = (id: String) =>{
    const data = useGetAnimeServers(id)
      .then(res =>{
        return res;
      });
    return data;
  }

  genres = (genre: String , sortBy: String , page: Number) =>{
    const data = useGetGenres(genre , sortBy , page)
      .then(res =>{
        return res;
      })
      return data;
  }
  
  movies = (sortBy: String , page: Number) =>{
    const data = useGetMovies(sortBy , page)
      .then(res =>{
        return res;
      })
      return data;
  }

  special = (sortBy: String , page: Number) =>{
    const data = useGetSpecial(sortBy , page)
      .then(res =>{
        return res;
      })
      return data;
  }

  ova = (sortBy: String , page: Number) =>{
    const data = useGetOva(sortBy , page)
      .then(res =>{
        return res;
      })
      return data;
  }

  tv = (sortBy: String , page: Number) =>{
    const data = useGetTV(sortBy , page)
      .then(res =>{
        return res;
      })
      return data;
  }

  byState = (state: Number , order: String , page: Number) =>{
    const data = useAnimeByState(state , order , page)
      .then(res =>{
        return res;
      })
      return data;
  }

  animeCharacters = (title: String) =>{
    const data = useGetAnimeCharacters(title)
      .then(res =>{
        return res;
      })
      return data;
  }

  promo = (title: String) =>{
    const data = useGetAnimePromo(title)
      .then(res =>{
        return res;
      })
      return data;
  }

  downloadLinksByEpsId = (epsId: String) =>{
    const data = useDownloadLinksByEpsId(epsId)
      .then(res =>{
        return res;
      })
      return data;
  }

  animeInfo = (id: String , title: String) =>{
    const data = useGetAnimeInfo(id , title)
      .then(res =>{
        return res;
      })
      return data;
  }
  
  @Query('latestAnime')
  getLatestAnime(){
    const data = this.latestAnime.then(res =>{
      return res;
    })
    return data;
  }

  @Query('search')
  getSearch(@Args('query') query: String){
    const res = this.search(query)
      .then(res =>{
        return res;
      })
    return res;
  }

  @Query('latestEpisodes')
  getLatestEpisodes(){
    const data = this.latestEpisodes.then(res =>{
      return res;
    })
    return data;
  }

  @Query('animeServers')
  getAnimeServers(@Args('id') id: String){
    const data = this.animeServers(id)
      .then(res =>{
        return res;
      })
    return data;
  }

  @Query('genres')
  getGenres(@Args('genre') genre: String , @Args('sortBy') sortBy: String , @Args('page') page: Number){
    const data = this.genres(genre , sortBy , page)
      .then(res =>{
        return res;
      })
    return data;
  }

  @Query('movies')
  getMovies(@Args('sortBy') sortBy: String , @Args('page') page: Number){
    const data = this.movies(sortBy , page)
      .then(res =>{
        return res;
      })
    return data;
  }

  @Query('special')
  getSpecial(@Args('sortBy') sortBy: String , @Args('page') page: Number){
    const data = this.special(sortBy , page)
      .then(res =>{
        return res;
      })
    return data;
  }

  @Query('ova')
  getOva(@Args('sortBy') sortBy: String , @Args('page') page: Number){
    const data = this.ova(sortBy , page)
      .then(res =>{
        return res;
      })
    return data;
  }

  @Query('tv')
  getTV(@Args('sortBy') sortBy: String , @Args('page') page: Number){
    const data = this.tv(sortBy , page)
      .then(res =>{
        return res;
      })
    return data;
  }

  @Query('byState')
  getAnimeByState(@Args('state') state: Number , @Args('order') order: String , @Args('page') page: Number){
    const data = this.byState(state, order, page)
      .then(res =>{
        return res;
      })
    return data;
  }

  @Query('animeCharacters')
  getAnimeCharacters(@Args('title') title: String){
    const data = this.animeCharacters(title)
      .then(res =>{
        return res;
      })
    return data;
  }

  @Query('promo')
  getAnimePromo(@Args('title') title: String){
    const data = this.promo(title)
      .then(res =>{
        return res;
      })
    return data;
  }

  @Query('downloadLinksByEpsId')
  getAnimeDownloadLinksByEpsId(@Args('epsId') epsId: String){
    const data = this.downloadLinksByEpsId(epsId)
      .then(res =>{
        return res;
      })
    return data;
  }

  @Query('animeInfo')
  getAnimeInfo(@Args('id') id: String , @Args('title') title: String){
    const data = this.animeInfo(id , title)
      .then(res =>{
        return res;
      })
    return data;
  }
}