import Dashboard from "./Dashboard";
import withAuth from "./WithAuth";

const ProtectedDashboard = withAuth(Dashboard);

export default ProtectedDashboard;