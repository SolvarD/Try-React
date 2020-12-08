import { Subject } from 'rxjs';

export class ToolsService {
    static uploadFile(attributName, file) {
        const reader = new FileReader();
        let emit = new Subject();

        reader.addEventListener('load', () => {
            emit.next({
                formControlName: attributName, content: reader.result
            })
        });
        
        if (file) {
            reader.readAsDataURL(file);
        }

        return emit.asObservable();
    }
}
