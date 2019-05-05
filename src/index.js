import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {


  return (
    <div className="ui container comments">
    <ApprovalCard>
      <CommentDetail 
        avatar={faker.image.avatar()} 
        author="Anthony" 
        date="Today at 2:45pm" 
        content="Hello!" 
      />
    </ApprovalCard>
    <ApprovalCard>
      <CommentDetail 
        avatar={faker.image.avatar()} 
        author="Debra" 
        date="Today at 9:05am" 
        content="Thank You!" 
      />
    </ApprovalCard>
    <ApprovalCard>
      <CommentDetail 
        avatar={faker.image.avatar()} 
        author="Jane" 
        date="Yesterday at 4:55pm" 
        content="Goodbye!" 
      />
    </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));