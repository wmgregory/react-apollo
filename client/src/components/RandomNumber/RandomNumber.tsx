import React from 'react';

import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const RAND = gql`
  {
    rand
  }
`;

export const RandomNumber: React.FC = () => {
  const { loading, error, data } = useQuery(RAND);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const { rand } = data;

  return (
    <div key={rand}>
      <p>Your random number: {rand}</p>
    </div>
  );
};
