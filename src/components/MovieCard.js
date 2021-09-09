import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { Card, Icon } from 'semantic-ui-react';

const MovieCard = ({ movie }) => (
  // eslint-disable-next-line react/jsx-filename-extension
  <Link href={`/movie/${movie.imdbID}`} passHref>
    <Card centered>
      <Image
        src={movie.Poster === 'N/A' ? '/no-poster.jpg' : movie.Poster}
        width={300}
        height={407}
        alt="poster"
        loading="lazy"
      />
      <Card.Content>
        <Card.Header>{movie.Title}</Card.Header>
        <Card.Meta>
          <span className="movie-title">{movie.Type}</span>
        </Card.Meta>
      </Card.Content>
      <Card.Content extra>
        <Icon color="black" name="calendar alternate outline" circular fitted />
        <div>{movie.Year}</div>
      </Card.Content>
    </Card>
  </Link>
);

export default MovieCard;
