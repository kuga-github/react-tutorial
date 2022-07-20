import { TextField,FormGroup, Button } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import {useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Create = () => {
    const [title, setTile] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(false);

    /// history
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        setIsPending(true);
        console.log(isPending);
        e.preventDefault();
        axios.post("http://localhost:8000/blogs",
            {
                title: title,
                body: body,
                author: author
            }
        ).catch(error => setError(error))
        .then(() => {setIsPending(false);
        console.log(isPending);
        navigate("/");});
    }   

    return (
        <div>
        <div>{error&&error.message}</div> 
        <div>
        <form onSubmit={(e) => handleSubmit(e)}>
            <FormGroup>
            <TextField id="outlined-basic" label="タイトル" variant="outlined"
            onChange={(e) => setTile(e.target.value)} value={title}/>
            <TextField id="outlined-basic" label="投稿者" variant="outlined"
            onChange={(e) => setAuthor(e.target.value)} value={author}/>
            <TextField
                id="outlined-multiline-static"
                label="本文"
                multiline
                rows={20}
                onChange={(e) => setBody(e.target.value)}
                value={body}
                required
            />
            <LoadingButton variant="contained" loading={isPending} type="submit">投稿</LoadingButton>
            </FormGroup>
        </form>
        </div>
        </div>
    );
}

export default Create;