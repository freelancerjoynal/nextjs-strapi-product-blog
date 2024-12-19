const { redirect } = require("next/navigation")
const { apiUrl } = require("./env")
const { default: Token } = require("./Token")

const PostData = async (endpoint, data) =>{
    if(!Token){
        redirect('/')
    }
    const response = await fetch(`${apiUrl}endpoint`, {
        method: "POST",
        headers:{
            'Content-Type' : 'application/json',
            'Authorization': `Barear ${Token}`
        },
        body: JSON.stringify({
            data: data
        })
    })

    if(!response.ok){
        throw new Error(`Failed to create category: ${response.statusText}`);
    }
    if (response.ok) {
        const data = await response.json();
        return data;
    } else {
        console.log('Failed to fetch data');
        return null;
    }

}