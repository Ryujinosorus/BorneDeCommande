import Store from './store.js';
import {fb} from '../main.js';
export class Plat {
    constructor() {
        this.tab = new Array();
        this.tab["pains"] = [];
        this.tab["legumes"] = [];
        this.tab["sauces par d�fault"] = [];
        this.tab["sauces libre"] = [];
        this.tab["viandes et poissons"] = [];
        this.tab["extras"] = [];
        this.tab["supplements"] = [];
        this.tab["fromages"] = [];
        this.tab["nom"]='';
        this.tab["prix"]='';
        this.tab["categorie"]='';
        this.tab["max"] = {
            'sauce' :'1',
            'supplements':'3'
        };
        this.picture = "https://image.flaticon.com/icons/png/512/14/14611.png";
        this.tmpFile = null;

    }
    add(data){
        if(data[0] =="nom" || data[0] =="prix" || data[0] =="categorie") {
            this.tab[data[0]] = data[1];
            return;
        }
        let pos = this.tab[data[0]].indexOf(data[1]);
        if(pos != -1)
            this.tab[data[0]].splice(pos,1);
        else
            this.tab[data[0]].push(data[1]);

    }
    change(cate,value){
        if(cate=="sauce")
            this.tab['max'].sauce = value;
        else this.tab['max'].supplements = value;
    }
    toString(){
        let res = '';
        for(var i in this.tab)
        {
            if((i =="nom" || i=="prix" || i =="categorie") && this.tab[i].length !=0) {
                res+=i;
                res+=" : ";
                res += this.tab[i];
                res += "\n";
            }
            else if(this.tab[i].length!= 0 && i!="max"){
                res+= i;
                res+=" : ";
                for (let x = 0; x < this.tab[i].length; x++) {
                    res += (this.tab[i][x]);
                    if(x!=this.tab[i].length-1)
                        res += ", ";
                }
                res+="\n";
            }
        }
        res+="Max suppl�ments : " +this.tab["max"].supplements +"\n";
        res+="Max sauce : " + this.tab["max"].sauce+"\n";
        return res +"\n";
    }
    toFirebase(startRoute){

        //SET UP REF
        let routeData = fb.storage().ref(startRoute+"/recap.txt");
        let routePicture = fb.storage().ref(startRoute+"/picture.png");

        if(this.tmpFile!=null) {
            //UPLOAD PICTURE
            let uploadTask = routePicture.put(this.tmpFile);

            //GET URL
            uploadTask.then((snapshot) => {
                snapshot.ref.getDownloadURL().then((url) => {
                this.picture = url;
            let data_string = this.toString() ;
            data_string += "picture : " + this.picture+"\n" ;
            let blob = new Blob([data_string], {type: 'text/plain'});
            routeData.put(blob);
        });
    })

    //RESET
        this.tmpFile =null;
}
else if(this.picture!="https://image.flaticon.com/icons/png/512/14/14611.png") {
    let data_string = this.toString() ;
    data_string += "picture : " + this.picture+"\n" ;
    let blob = new Blob([data_string], {type: 'text/plain'});
    routeData.put(blob);
}
else {
    let blob = new Blob([this], {type: 'text/plain'});
    routeData.put(blob);
}

}
setPicture(link){
    this.picture=link;
}
canBeSafe(){
    let allPlat = Store.getters.getAllPlat;
    for(let x=0;x<allPlat.length;x++)
        if(allPlat[x].tab['nom'] == this.tab['nom'] && allPlat[x]!=this) {
            return false;
        }
    return (this.tab['nom'].length >=2 && this.tab['prix'] !='' && !this.tab['nom'].includes(':'));
}
clone(){
    let res = new Plat();
    res.copy(this);
    return res;
}
init(data_string){
    let file = data_string.split("\n");
    for(let x=0; x<file.length;x++) {
        if (file[x] != "") {
            let tmp = file[x].split(' : ');
            let cate = tmp[0];
            let arg = tmp[1];
            if(cate=='nom' || cate =='prix' || cate =='categorie')
                this.tab[cate] =arg;
            else if(cate=="Max suppl�ments")
                this.tab['max'].supplements = arg;
            else if(cate=="Max sauce")
                this.tab['max'].sauce = arg;
            else if(cate=="picture")
                this.picture= arg;
            else{
                let component = arg.split(', ');
                for(let i=0;i<component.length;i++)
                    this.tab[cate].push(component[i]);
            }

        }
    }
    return this;
}
}