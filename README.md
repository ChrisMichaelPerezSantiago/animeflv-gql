# **:triangular_flag_on_post: Animeflv GQL** (version 1.0.0)

![node version](https://img.shields.io/badge/node->=10.16.x-brightgreen.svg)
![npm version](https://img.shields.io/badge/npm->=6.9.x-brightgreen.svg)
<a href="https://github.com/ChrisMichaelPerezSantiago/animeflv-gql/graphs/commit-activity">
  <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" target="_blank" />
</a>
<a href="https://github.com/ChrisMichaelPerezSantiago/animeflv-gql/blob/master/LICENSE">
  <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" target="_blank" />
</a>
<img src="https://img.shields.io/github/stars/ChrisMichaelPerezSantiago/animeflv-gql?style=social" alt="">


> _Animeflv GQL is an alternative custom animeflv API that complements GraphQL for queries, you can access all the data and catalog of the animeflv.net website. You can enjoy all the content with Spanish subtitles and the latest in the anime world for free._

---


## **:wrench: Developer usage**


### Reference to the Main Project
- [Animeflv](https://github.com/ChrisMichaelPerezSantiago/animeflv)


### **Set up project**

Before cloning the repo **be sure** you have installed:

- [*node*](https://www.google.com/search?q=how+to+install+node) (version >= 10.16.x)
- [*npm*](https://www.google.com/search?q=how+to+install+npm) (version >= 6.9.x)

Then:

- Choose a folder project in your system and switch in `cd [folder path]`
- Clone the repo in your folder path `git clone git+https://github.com/ChrisMichaelPerezSantiago/animeflv-gql`

---


## 📚 **Development Diary**
Describe the purpose of the project and give clues about what the code does. 
For more information go to the following link [Diary Reference](./development_diary/README.md).


## Query Documentation

## animeServers([id])

*To verify the `id` of each episode, look at the `episodes` property:*

```json
"episodes": [
  {
    "nextEpisodeDate": "2019-10-31"
  },
  {
    "episode": 1,
    "id": "53099/psychopass-3-1",
    "imagePreview": "https://cdn.animeflv.net/screenshots/3225/1/th_3.jpg"
  }
]

```

```graphql
query{
  animeServers(id: "53099/psychopass-3-1"){
    server
    title
    allow_mobile
    code
  }
}
```

## search([query])

```graphql
query{
  search(query: "Tokyo Ghoul"){
    id
    title
    poster
    banner
    synopsis
    debut 
    type
    rating 
    genres
    episodes{
      nextEpisodeDate
      episode
      id
      imagePreview
    }
  }
}
```

## latestAnime
*It will show N data per page , Total page unknown.*

```graphql
query{
  latestAnime{
    id
    title
    poster
    banner
    synopsis
    debut
    type
    rating
    genres
    episodes{
      nextEpisodeDate
      episode
      id
      imagePreview
    }
  }
}
```

## latestEpisodes
*It will show N data per page , Total page unknown.*

```graphql
query{
  latestEpisodes{
    id	
    title
    poster
    episode
    servers{
      server
      title
      allow_mobile
      code
    }
  }
}
```


## genres([genre] , [sortBy] , [page])

<table>
<tr><th>Genres</th><th>SortBy</th><th>Page</th></tr>
<tr><td>

|   genres            |                        |                 |
|---------------------|------------------------|-----------------|
|accion               |  infantil              | sobrenatural    |
|artes-marciales      |  josei                 | superpoderes    |
|aventura             |  juegos                | suspenso        |
|carreras             |  magia                 | terror          |
|ciencia-ficcion      |  mecha                 | vampiros        |
|comedia              |  militar               | yaoi            |
|demencia             |  misterio              | yuri            |
|demonios             |  musica                |                 |
|deportes             |  parodia               |                 |
|drama                |  psicologico           |                 |
|ecchi                |  recuentos-de-la-vida  |                 |
|escolares            |  romance               |                 |
|espacial             |  samurai               |                 |
|fantasia             |  seinen                |                 |
|harem                |  shoujo                |                 |
|historico            |  shounen               |                 |

</td><td>

| sortBy                 |  value   |
|----------------------- |----------|
| default anime order    | default  |
| Recently Updated anime | updated  |
| Recently Added anime   | added    |
| anime by Rating        | rating   |
| anime by Title         | title    |

</td><td>

| pages  |
|--------|
| [1 .. total page unknown]|
</table>


```graphql
query{
  genres(genre: "accion" , sortBy: "defaut" , page: 1){
    id
    title
    poster
    banner
    synopsis
    debut
    type
    rating
    genres
    episodes{
      nextEpisodeDate
      episode
      id
      imagePreview
    }
  }
}
```

## movies([sortBy] , [page])

<table>
<tr><th>SortBy</th><th>Page</th></tr>
<tr><td>

| sortBy                 |  value   |
|----------------------- |----------|
| default anime order    | default  |
| Recently Updated anime | updated  |
| Recently Added anime   | added    |
| anime by Rating        | rating   |
| anime by Title         | title    |

</td><td>

| pages  |
|--------|
| [1 .. total page unknown]|

</td></tr> </table>


```graphql
query{
  movies(sortBy: "added" , page: 1){
    id
    title
    poster
    banner
    synopsis
    debut
    type
    rating
    genres
    episodes{
      nextEpisodeDate
      episode
      id
      imagePreview
    }
  }
}
```

## ova([sortBy] , [page])
<table>
<tr><th>SortBy</th><th>Page</th></tr>
<tr><td>

| sortBy                 |  value   |
|----------------------- |----------|
| default anime order    | default  |
| Recently Updated anime | updated  |
| Recently Added anime   | added    |
| anime by Rating        | rating   |
| anime by Title         | title    |

</td><td>

| pages  |
|--------|
| [1 .. total page unknown]|

</td></tr> </table>

```graphql
query{
  ova(sortBy: "added" , page: 1){
    id
    title
    poster
    banner
    synopsis
    debut
    type
    rating
    genres
    episodes{
      nextEpisodeDate
      episode
      id
      imagePreview
    }
  }
}
```

## special([sortBy] , [page])

<table>
<tr><th>SortBy</th><th>Page</th></tr>
<tr><td>

| sortBy                 |  value   |
|----------------------- |----------|
| default anime order    | default  |
| Recently Updated anime | updated  |
| Recently Added anime   | added    |
| anime by Rating        | rating   |
| anime by Title         | title    |

</td><td>

| pages  |
|--------|
| [1 .. total page unknown]|

</td></tr> </table>

```graphql
query{
  special(sortBy: "added" , page: 1){
    id
    title
    poster
    banner
    synopsis
    debut
    type
    rating
    genres
    episodes{
      nextEpisodeDate
      episode
      id
      imagePreview
    }
  }
}
```


## tv([sortBy] , [page])

<table>
<tr><th>SortBy</th><th>Page</th></tr>
<tr><td>

| sortBy                 |  value   |
|----------------------- |----------|
| default anime order    | default  |
| Recently Updated anime | updated  |
| Recently Added anime   | added    |
| anime by Rating        | rating   |
| anime by Title         | title    |

</td><td>

| pages  |
|--------|
| [1 .. total page unknown]|

</td></tr> </table>

```graphql
query{
  tv(sortBy: "added" , page: 1){
    id
    title
    poster
    banner
    synopsis
    debut
    type
    rating
    genres
    episodes{
      nextEpisodeDate
      episode
      id
      imagePreview
    }
  }
}
```

## byState([state] , [order] , [page])
<table>
<tr><th>Status</th><th>SortBy</th><th>Page</th></tr>
<tr><td>

|  state       |  value  |
|--------------|---------|
|  In emission |   1     |
|  Finalized   |   2     |
|  coming soon |   3     |

</td><td>

| sortBy                 |  value   |
|----------------------- |----------|
| default anime order    | default  |
| Recently Updated anime | updated  |
| Recently Added anime   | added    |
| anime by Rating        | rating   |
| anime by Title         | title    |

</td><td>

| pages  |
|--------|
| [1 .. total page unknown]|

</td></tr> </table>


```graphql
query{
  byState(state: 1 , order: "default" , page: 1){
    id
    title
    poster
    banner
    synopsis
    debut
    type
    rating
    genres
    episodes{
      nextEpisodeDate
      episode
      id
      imagePreview
    }
  }
}
```

## animeCharacters([title])
**This function is not yet stable, it may present an error in trying to return some characters. For now it is functional, but not quite stable.❗❗**

*If you use any API entry point you will see that the `title` property*

```javascript
"title": "Tokyo Ghoul"

```

*for each anime will be available, you should take the value of the `title` and pass it to the query param.*

```graphql
query{
  animeCharacters(title: "Tokyo Ghoul"){
    character{
      id
      name
      image
      role
    }
  }
}
```


## promo([title])
**This function is not yet stable, it may present an error in trying to return some trailers. For now it is functional, but not quite stable.❗❗**

*To get the list of promo (trailers) for each anime, you must use the `title` property and pass it to the query as a parameter.*

```graphql
query{
  promo(title: "Tokyo Ghoul"){
    title
    previewImage
    videoURL
  }
}
```

## animeInfo([id] , [title])
**This function is not yet stable, it may present an error in trying to return some trailers. For now it is functional, but not quite stable.❗❗**

*To get the anime info of a particula anime, you must use the `id` and the `title` property and pass it to the query as a parameter.*

*For example:*

```json
"id": "anime/5226/tokyo-ghoul"
"title": "Tokyo Ghoul"
```

```graphql
query{
  animeInfo(id: "anime/5226/tokyo-ghoul" , title: "Tokyo Ghoul"){
    id
    title
    poster
    banner
    synopsis
    debut
    type
    rating
    genres
    charactersList{
      character{
        id
        name
        image
        role
      }
    }
    promoList{
      title
     	 previewImage
      videoURL
    }
    moreInfo{
      titleJapanese
      source
      totalEpisodes
      status
      duration
      rank
      popularity
      members
      favorites
      premiered
      broadcast
      endingThemes
      openingThemes
      studios{
        names
      }
      licensors{
        names
      }
      producers{
        names
      }
      aired{
        from
        to
        string
      }
    }
    episodes{
      nextEpisodeDate
      episode
      id
      imagePreview
    }
  }
}
```

## downloadLinksByEpsId([epsId])
*The parameter you should use is the `episode` property that identifies the anime episode.*

*You will find it if you are looking for the `episodes` property*

*For Example:*

```json
"episodes": [
  {
    "nextEpisodeDate": null
  },
  {
    "episode": 12,
    "id": "28800/tokyo-ghoul-12",
    "imagePreview": "https://cdn.animeflv.net/screenshots/1415/12/th_3.jpg"
  },
  {
    "episode": 11,
    "id": "28459/tokyo-ghoul-11",
    "imagePreview": "https://cdn.animeflv.net/screenshots/1415/11/th_3.jpg"
  },
  // .....
]
```


```graphql
query{
  downloadLinksByEpsId(epsId: "28800/tokyo-ghoul-12"){
    server
    url
  }
}
```

## **:handshake: Contributing**

- Fork it!
- Create your feature branch: `git checkout -b my-new-feature`
- Commit your changes: `git commit -am 'Add some feature'`
- Push to the branch: `git push origin my-new-feature`
- Submit a pull request

---

### **:busts_in_silhouette: Credits**

- [Chris Michael](https://github.com/ChrisMichaelPerezSantiago) (Project Leader, and Developer)

---


### **:heart: Show your support**

Please :star: this repository if you like it or this project helped you!\
Feel free to open issues or submit pull-requests to help me improving my work.

---


### **:robot: Author**

_*Chris Michael*_

> You can follow me on
[github](https://github.com/ChrisMichaelPerezSantiago)&nbsp;&middot;&nbsp;[twitter](https://twitter.com/Chris5855M)

---

Copyright © 2020 [Animeflv GQL](https://github.com/ChrisMichaelPerezSantiago/animeflv-gql).
