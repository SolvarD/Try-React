import React from 'react';
import { ToolsService } from '../../service/tools.service';
import './legal-document.css'
export class LegalDocument extends React.Component {

    files = {
        cni:
        {
            file: null,
            documentBase64: null
        }
    };

    constructor(props) {
        super(props);
        this.state = { files: this.files }
    }
    fileSelected = (event) => {
        if (!event.target.files[0]) { return; }
        this.setState({
            files: {
                cni: {
                    file: event.target.files[0],
                    documentBase64: null
                }
            }
        });

        ToolsService.uploadFile('cni', event.target.files[0]).subscribe(item => {
            if (item.formControlName === 'cni') {
                this.setState({
                    files: {
                        cni: {
                            file: event.target.files[0],
                            documentBase64: item.content
                        }
                    }
                });
            }
        });
    }

    async onSubmit(form) {

        const formData = new FormData();

        //images
        for (const key of Object.keys(this.files)) {
            if (this.files[key]) {
                formData.append(key, this.state.files[key].file);
            }
        }

        //form field
        let profile = form.value;
        Object.keys(profile).forEach(key => {
            formData.append(key, profile[key]);
        });

        //this.profileService.update(formData);
    }

    cniUploaded = () => {
        return this.state.files.cni.file ? true : false;
    }

    render() {
        return (<div>
            <div>CNI</div>
            <div><input type="file" accept="image/*" onChange={this.fileSelected} /></div>
            <div >
                {this.cniUploaded() && <img className="cni" src={this.state.files.cni.documentBase64} alt="CNI" />}
            </div>
        </div>);
    }
}

export default LegalDocument;