import { useEffect } from "react";
import { useState } from "react";

const useAdmin = (email) => {
    const [isAdmin, setIsAdmin] = useState(false);
    const [isAdminLoading, setIsAdminLoading] = useState(true);

    useEffect(() => {
        if (email) {
            fetch(`https://creative-agency-server-ivory.vercel.app/users/admin/${email}`, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.admin) {
                        setIsAdmin(data.admin);
                        setIsAdminLoading(false);
                    }
                })
        }
    }, [email])

    return [isAdmin, isAdminLoading];
};

export default useAdmin;