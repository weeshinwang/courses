function App() {
  return (
    <div className='tweet'>
      <Avatar />
      <div className='content'>
        <Author />
        <Time />
        <Message />
        <div className='buttons'>
          <ReplyButton />
          <RetweetButton />
          <LikeButton />
          <MoreOptionsButton />
        </div>
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <img
      src='https://www.gravatar.com/avatar/nothing'
      alt='avatar'
      className='avatar'
    />
  );
}

function Author() {
  return (
    <span className='author'>
      <span className='name'>weeshin</span>
      <span className='handle'>@weeshinwang</span>
    </span>
  );
}

function Time() {
  return <span className='time'>3h ago</span>;
}

function Message() {
  return <div className='message'>Something great.</div>;
}

const ReplyButton = () => <i className='fa fa-reply reply-button' />;

const RetweetButton = () => <i className='fa fa-retweet retweet-button' />;
const LikeButton = () => <i className='fa fa-heart like-button' />;

const MoreOptionsButton = () => (
  <i className='fa fa-ellipsis-h more-options-button' />
);

export default App;
