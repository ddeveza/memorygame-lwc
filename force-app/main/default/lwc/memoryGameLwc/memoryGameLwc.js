

import { LightningElement } from "lwc";
import {loadStyle} from 'lightning/platformResourceLoader'
import fontawesome from '@salesforce/resourceUrl/fontawesome'

export default class MemoryGameLwc extends LightningElement {

    isLibLoaded =false

    connectedCallback(){
        if (this.isLibLoaded) return;
        loadStyle(this, fontawesome+'/fontawesome/css/font-awesome.min.css').then(()=>{
            console.log('loaded successfully')
            this.isLibLoaded =true;
        }).catch( error => console.log(error));
        
    }
}
