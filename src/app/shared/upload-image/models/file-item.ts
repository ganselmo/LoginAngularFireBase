import { Observable } from 'rxjs';

export class FileItem
{
    public name: string;
    public type: string;
    public uploading: boolean =false;
    public uploadPercent:Observable<number>;
    public downloadURL:Observable<string>;

    constructor (public file:File = file)
    {
        this.name = file.name;

        
    }
}