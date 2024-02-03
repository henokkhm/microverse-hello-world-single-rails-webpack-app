import React from 'react';
import { useSelector } from 'react-redux';

function Greeting() {
  const { phrase, language, isLoading, isError } = useSelector(
    (state) => state.greeting,
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Something went wrong. Please try reloading the page...</div>;
  }

  return (
    <div>
      <div>
        <p>Phrase</p>
        <p>{phrase}</p>
      </div>
      <div>
        <p>Language</p>
        <p>{language}</p>
      </div>
    </div>
  );
}

export default Greeting;
