/* eslint-disable */

import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <>
    <div>
      <Link to='/tasks'>See tasks</Link>
    </div>
    <div>
      <Link to='/gr'>See graphql tasks</Link>
    </div>
    </>
  )
}

export default HomePage;