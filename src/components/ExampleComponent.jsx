import React from 'react';
import axios from 'axios';

const ExampleComponent = props => {
    const [getApi, setGetApi] = React.useState(null);
    const [input, setInput] = React.useState('');

    React.useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon')
        .then(res => {
            const {results} = res.data;
            setGetApi(results)
        })
    }, []);


    const postHandler = () => {
        axios.post('https://jsonplaceholder.typicode.com/posts', {name: input})
        .then(res =>{
            console.log(res, res.data)
        })
    }


    return (
        <div>
            <button onClick={() => console.log(getApi)}>GET</button>
            <input  onChange={(e) => setInput(e.target.value)}/>
            <button onClick={postHandler}>POST</button>
        </div>
    )
}

export default ExampleComponent;