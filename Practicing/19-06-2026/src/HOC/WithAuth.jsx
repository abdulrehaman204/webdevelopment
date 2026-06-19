function withAuth(WrappedComponent) {
  return function EnhancedComponent(props) {
    const isLoggedIn = true;

    return isLoggedIn ? (
      <WrappedComponent {...props} />
    ) : (
      <h2>Please Login First</h2>
    );
  };
}

export default withAuth;