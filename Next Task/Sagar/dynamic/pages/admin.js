import dynamic from "next/dynamic";

const Admin = dynamic(() => import("../components/Admin"));

function AdminPage() {
  return (
    <div>
      <Admin />
    </div>
  );
}

export default AdminPage;
