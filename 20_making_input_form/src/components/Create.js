import { TextField,FormGroup } from '@mui/material';

const Create = () => {
    return (
        <form>
            <FormGroup>
            <TextField id="outlined-basic" label="タイトル" variant="outlined" required/>
            <TextField id="outlined-basic" label="投稿者" variant="outlined" required/>
            <TextField
                id="outlined-multiline-static"
                label="本文"
                multiline
                rows={20}
                required
            />
            <button type="submit">投稿</button>
            </FormGroup>
        </form>
    );
}

export default Create;