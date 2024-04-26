import  { useState } from 'react';

const useData = (initialValue) => {
    const [user, setUser] = useState(initialValue);
    
    const addUser = () => {
        setUser("Dev");
    };
    return { user, addUser };
};

export default useData;
