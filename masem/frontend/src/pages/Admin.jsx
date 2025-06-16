import AdminDashboard from "@/components/admin/AdminDashboard";
import LoginPanel from "@/components/admin/LoginPanel";
import { useAuth } from "@/context/AuthContext";






export default function Admin() {
    const { user, authLoading } = useAuth();

    if (authLoading) return <p className="text-center mt-10">Checking login...</p>;
    if (!user) return <LoginPanel />;

    return <AdminDashboard />;
};
