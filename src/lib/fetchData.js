import { redirect } from "next/navigation";
import { apiUrl } from "./env";
import Token from "./Token";

const fetchData = async (endPoint) => {
    // Fetch the token from cookies
    

    if (!Token) {
        redirect('/');
    }

    const response = await fetch(`${apiUrl}${endPoint}`, {
        method: 'GET', 
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });

    if (response.ok) {
        const data = await response.json();
        return data;
    } else {
        console.log('Failed to fetch data');
        return null;
    }
};

export default fetchData;
