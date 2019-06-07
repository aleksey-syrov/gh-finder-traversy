import React from 'react';

import PropTypes from 'prop-types';

import UserItem from './UserItem';
import Spinner from '../layout/Spinner';

const Users = ({ loading, users }) => {
  if (loading) return <Spinner />;

  return (
    <div style={userStyle}>
      {users.map(user => (
        <UserItem user={user} key={user.id} />
      ))}
    </div>
  );
};

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem'
};

Users.propTypes = {
  users: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired
};

export default Users;
