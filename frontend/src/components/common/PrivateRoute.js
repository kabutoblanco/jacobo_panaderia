import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = ({ component: Component, auth, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      console.log(rest);

      if (auth.isLoading) {
        return <h2>Loading...</h2>;
      } else if (!auth.isAuthenticated) {
        return <Redirect to='/inicio' />;
      } else {
        return <Component {...props} height={rest.height} />;
      }
    }}
  />
);

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(PrivateRoute);
