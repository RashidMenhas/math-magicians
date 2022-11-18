import React from 'react';

class Home extends React.PureComponent {
  render() {
    return (
      <div>
        <h3>Welcome To Our Page!</h3>
        <p>
          Fourth grade is an important time for learning and Im pleased to have the opportunity
          to help our students reach their full potential.  My classroom is built on respect,
          responsibility, and citizenship.  I work to create a community of learners who will
          learn what it means to be an independent and responsible lifelong learner. Responsibility
          and self-management will be our focus this year as we head into the intermediate grades!
          Parents, please feel free to contact me during the year with any questions, concerns or
          information that will help me to meet your childs individual needs.
          {' '}
        </p>
        <p>
          Fourth grade is an important time for learning and I m pleased to have the opportunity
          to help our students reach their full potential.  My classroom is built on respect,
          responsibility, and citizenship.  I work to create a community of learners who will
          learn what it means to be an independent and responsible lifelong learner.
          Responsibility and self-management will be our focus this year as we head into
          the intermediate grades!Parent, please feel free to contact me during the
          year with any questions, concerns or information that will help me to meet
          your childs individual needs.
          {' '}
        </p>
      </div>
    );
  }
}

export default Home;
