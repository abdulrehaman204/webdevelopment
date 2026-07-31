function WithRole(Component, allowedRoles) {
  return function RoleProtected(props) {
    const { role } = props;

    if (!allowedRoles.includes(role)) {
      return (
        <div>
          <h2>Access Denied!</h2>
          <p>You don't have permission to view this page.</p>
        </div>
      );
    }

    return <Component {...props} />;
  };
}

export default WithRole;