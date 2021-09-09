import React from 'react';
import { Header, Table } from 'semantic-ui-react';
import { valueRenderer } from '../utils/methods';

const MovieDetailsTable = ({ details }) => {
  const isSkipUnnecessaryValue = (key) => (key !== 'Poster' && details[key] !== 'N/A' && key !== 'Response' && details[key].length !== 0 && key !== 'imdbID');

  return (

    <>
      <Header textAlign="center"> Movie Details </Header>
      <Table celled stackable striped selectable>
        <Table.Body>
          {/* eslint-disable-next-line array-callback-return,consistent-return */}
          {Object.keys(details).map((key, index) => {
            if (isSkipUnnecessaryValue(key)) {
              return (
              // eslint-disable-next-line react/no-array-index-key
                <Table.Row key={index}>
                  <Table.Cell><strong>{key}</strong></Table.Cell>
                  <Table.Cell>{valueRenderer(details[key])}</Table.Cell>
                </Table.Row>
              );
            }
          })}
        </Table.Body>
      </Table>
    </>
  );
};

export default MovieDetailsTable;
