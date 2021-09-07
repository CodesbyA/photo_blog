import { useState } from 'react'
import ProgressBar from './ProgressBar';

export default function Upload() {

    const[file, setFile] = useState(null);
    const [error, setError] = useState(null);

    const fileType = ['image/png', 'image/jpeg'];

const changeHandler = (e) => {

    let selectedFile  = e.target.files[0];

    if(selectedFile && fileType.includes(selectedFile.type)) {
        setFile(selectedFile);
        setError('');
    } else {
        setFile(null);
        setError('Sorry! Only jpeg and png allowed.')
    }
}

    return (
            <form >
                <label>
                <input type="file" onChange={changeHandler}/>
                <span>+</span>
                </label>

                <div className="output">
                    {error && <div className="error">{error}</div>}
                    {file && <div >{file.name}</div>}
                    {file && <ProgressBar file={file} setFile={setFile}/>}
                </div>
            </form>
    )
}
