import withRole from "./withRole";
import AdminDashboard from "./AdminDashboard";

const ProtectedDashboard = withRole(
  AdminDashboard,
  ["Admin", "Manager"]
);

export default function AB() {
  return (
    <ProtectedDashboard role="Employee" />
  );
}