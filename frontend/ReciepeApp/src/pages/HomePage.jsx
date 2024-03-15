import axios from 'axios'
import { useState } from 'react';
import SingleCard from '../components/SingleCard';
import 'bootstrap/dist/css/bootstrap.min.css';

function HomePage() {
    const [data, setData] = useState([]);
    const [search, setSearch] = useState('');

    // useEffect(() => {
        
    // },[])

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
        .then(res => {
            console.log(res.data.meals);
            setData(res.data.meals)
        })
        .catch(err => console.log(err))
    }
console.log(data);

  return (
    <>
        <h2 className='mt-3' >Welcome to HomePage</h2>
        <div>
            <form onSubmit={handleSubmit} className='mt-3' >
                <input className="border rounded p-2" type="text" name="search" placeholder="Search your reciepe" value={search} onChange={(e) => setSearch(e.target.value)} />
                <input className="border rounded p-2 m-3" type="submit" name="submit" />
            </form>
            <div className='d-flex flex-wrap gap-3 mt-3' >
                {
                    data?.map((item, index) => {
                        return <SingleCard key={index} item={item} />
                    })
                }
            </div>
        </div>
    </>
  )
}

export default HomePage