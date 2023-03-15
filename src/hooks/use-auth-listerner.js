import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useState, useEffect } from 'react';

// Lấy tài khoản từ firebase lưu vào localStore để duy trì trạng thái đăng nhập
export default function useAuthListener() {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('authUser')));
    // console.log(user);
    useEffect(() => {
        const auth = getAuth();
        const listener = onAuthStateChanged(auth, (authUser) => {
            if (authUser) {
                localStorage.setItem('authUser', JSON.stringify(authUser));
                setUser(authUser);
            } else {
                localStorage.removeItem('authUser');
                setUser(null);
            }
        });
        return () => listener();
    }, []);
    return user;
}
