# MoviesWishList
This is a POC to pratice some typescripts concepts learned.


<p align="center">
  <img  src="https://notion-emojis.s3-us-west-2.amazonaws.com/prod/svg-twitter/1f4fd-fe0f.svg" height=200>
</p>
<h1 align="center">
  MoviesWishList
</h1>
<div align="center">

  <h3>Built With</h3>

  <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" height="30px"/>  
  <img src="https://img.shields.io/badge/Prisma-316192?style=for-the-badge&logo=prisma&logoColor=white" height="30px"/>
  <img src ="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" height ="30px">
  <img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge&logo=express.js&logoColor=white" height="30px"/>
  <img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" height="30px"/>
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" height="30px"/>
  
  <!-- Badges source: https://dev.to/envoy_/150-badges-for-github-pnk -->
</div>

<br/>

# Description

MoviesWishList is a back-end application that simulates a system that manages a whishlist of movies.

</br>

## Features

-   Insert a movie in the wishlist
-   Search all the movie from the wishlist.
-   Search movies from the wishlist by categories.
-   Update the movie score after watched.
-   Delete movies rom the wishlist.

</br>

## API Reference

### Insert a movie in the wishlist

```
POST /movies
```

#### Request:

| Body            | Type     | Description                     |
| :-------------- | :------- | :------------------------------ |
| `name`         | `string` | **Required**. movie name      |
| `plataform`      | `string` | **Required**. movie plataform    |
| `category` | `string` | **Required**. movie category  |
| `status` | `string` | **Required**. movie status |

#

### Search all the movie from the wishlist

```
GET /movies
```

#


### Search movies from the wishlist by categories.

```
GET /categories/:category
```

#### Request:

| PARAMS          | Type    | Description                        |
| :--------------- | :-------| :--------------------------------- |
| `Category`  | `string`| **Required**. Movie category name | 

####

#



### Update the movie score after watched.

```
PUT /movies
```

#### Request:

| Body            | Type     | Description                     |
| :-------------- | :------- | :------------------------------ |
| `name`         | `string` | **Required**. movie name      |
| `score` | `number` | **Required**. movie score |

#


### Delete movies rom the wishlist.

```
DELETE /movies/:id
```

#### Request:

| PARAMS          | Type    | Description                        |
| :--------------- | :-------| :--------------------------------- |
| `id`  | `string`| **Required**. Movie id | 

####

#


## Environment Variables

To run this project locally you will have to add this variables to your .env

`DATABASE_URL=` </br>

