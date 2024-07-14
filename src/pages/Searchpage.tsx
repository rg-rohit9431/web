import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

//redux
import { useAppDispatch, useAppSelector } from '../redux/hook';
import { fetchAllMenuDetails } from '../redux/slices/menuslice';

interface SearchBarProps {
    onSearch: (query: string) => void;
}

// interface MenuItem {
//     _id: string;
//     name: string;
//     image: string[];
//     description: string;
//     price: string;
//     category: string;
//     subcategory: string;
//     serves: string;
//     tag: string;
//     active: boolean;
//     categoryActive: boolean;
//     subcategoryActive: boolean;
//     clicks: number;
//     addone: any[]; // You can specify a type for addone based on its actual structure
//     type: string;
//     __v: number;
// }

// icons
import { FaSearch } from "react-icons/fa";


const Searchpage: React.FC<SearchBarProps> = () => {
    const { id } = useParams<{ id: string }>()
    const dispatch = useAppDispatch();
    const [query, setQuery] = useState('');
    const { data } = useAppSelector((state) => state.allMenuDetails);
    console.log(data);




    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newQuery = event.target.value;
        setQuery(newQuery);
        console.log(query);

    };

    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            // onSearch(query); // Call onSearch when Enter key is pressed
            console.log(query);
        }
    };




    useEffect(() => {
        if (id) {
            dispatch(fetchAllMenuDetails({ id }))
        }
    }, [id]);

    return (
        <>
            <p className='font-inter font-[500] text-[1.4rem] leading-[2rem] m-[1rem]'>Search</p>
            <div className='w-[90%] mx-auto px-[1rem] rounded-[8px] h-fit flex items-center justify-center mt-[1rem] border-[1px] '>
                <FaSearch className="text-[1.2rem] text-[#FFD600]" />
                <input
                    className='w-full h-[3rem] ml-[.5rem] focus:outline-none '
                    type="text"
                    value={query}
                    onChange={handleInputChange}
                    onKeyPress={handleKeyPress}
                    placeholder="Search your favourite dish"
                />
            </div>




        </>
    )
}

export default Searchpage

