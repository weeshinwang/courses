import useMousePosition from '../hooks/useMousePosition';

const MouseTracker = (): JSX.Element => {
  const position = useMousePosition();

  console.log('before render', position.x);
  return (
    <>
      <h2>
        X: {position.x}, Y: {position.y}
      </h2>
    </>
  );
};

export default MouseTracker;
