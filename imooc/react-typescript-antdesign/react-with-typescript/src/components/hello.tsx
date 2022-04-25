import React from 'react';

interface HelloProps {
  message: string;
}

export default function Hello(props: HelloProps): JSX.Element {
  return <h2>{props.message}</h2>;
}
