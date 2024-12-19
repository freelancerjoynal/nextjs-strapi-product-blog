import React from 'react';
import fetchData from '@/lib/fetchData';
import CategoryItem from '@/app/components/CategoryItem';

export default async function Page() {
    let categories = [];

    try {
        const result = await fetchData('/categories');

        if (result &&  result !==null && Array.isArray(result.data)) {
            categories = result.data; // Ensure you're accessing the 'data' array
        } else {
        }
    } catch (error) {
    }

    return (
        <div>
            <h1>Categories</h1>
            {categories.length > 0 ? (
                <ul>
                    {categories.map((category, index) => (
                        <CategoryItem category={category} key={index} />
                    ))}
                </ul>
            ) : (
                <p>Nothing found</p>
            )}
        </div>
    );
}
