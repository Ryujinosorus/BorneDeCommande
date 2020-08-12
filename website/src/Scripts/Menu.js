import {fb} from"../main.js";
export class Menu {
    constructor(){
        this.picture ="https://image.freepik.com/free-photo/kebab-platter-with-lamb-chicken-lula-tikka-kebabs-grilled-vegetables-with-red-onion-salad_141793-2250.jpg";
        this.plat=[];
        this.accompagnementsD=[];
        this.accompagnementsL=[];
        this.prix='';
        this.nom='';
        this.sauce=[];
        this.max = {
            'acc' : 1,
            'menu' : 1,
        };
        this.dessertL = [];
        this.dessertD = [];
        this.tmpFile=null;
    }
    canBeSafe(){
        return !this.nom.includes(":") && this.prix!='' && this.nom.length >2;
    }
    toString(){
        let res='';
        if(this.nom.length!=0)
            res += ("Nom : " + this.nom +"\n");
        if(this.plat.length!=0){
            res +="Plat : ";
            for(let x=0;x<this.plat.length;x++) {
                res += this.plat[x] ;
                res+= x==this.plat.length-1 ? '' : ', ';
            }
            res+="\n";
        }
        if(this.accompagnementsL.length!=0){
            res +="Accompagnements libre : ";
            for(let x=0;x<this.accompagnementsL.length;x++) {
                res += this.accompagnementsL[x];
                res+= x==this.accompagnementsL.length-1 ? '' : ', ';
            }
            res+="\n";
        }
        if(this.accompagnementsD.length!=0){
            res +="Accompagnements par d�fault : ";
            for(let x=0;x<this.accompagnementsD.length;x++) {
                res += this.accompagnementsD[x] ;
                res+= x==this.accompagnementsD.length-1 ? '' : ', ';
            }
            res+="\n";
        }
        if(this.sauce.length!=0){
            res +="Sauce : ";
            for(let x=0;x<this.sauce.length;x++) {
                res += this.sauce[x] + ", ";
                res+= x==this.sauce.length-1 ? '' : ', ';
            }
            res+="\n";
        }
        if(this.dessertD.length!=0){
            res +="Desserts fixe : ";
            for(let x=0;x<this.dessertD.length;x++) {
                res += this.dessertD[x] ;
                res+= x==this.dessertD.length-1 ? '' : ', ';
            }
            res+="\n";
        }
        if(this.dessertL.length!=0){
            res +="Desserts libre : ";
            for(let x=0;x<this.dessertL.length;x++) {
                res += this.dessertL[x] ;
                res+= x==this.dessertL.length-1 ? '' : ', ';
            }
            res+="\n";
        }
        if(this.prix.length!=0)
            res +=(("Prix : " + this.prix) +"\n");
        return res;
    }
    add(arg){
        switch(arg[0]){
            case "plat":
            {
                let pos = this.plat.indexOf(arg[1]);
                if (pos == -1)
                    this.plat.push(arg[1]);
                else this.plat.splice(pos, 1);
                break;
            }
            case "accompagnements libre":
            {
                let poss = this.accompagnementsL.indexOf(arg[1]);
                if (poss == -1)
                    this.accompagnementsL.push(arg[1]);
                else this.accompagnementsL.splice(poss, 1);
                break;
            }
            case "accompagnements par d�fault":
            {
                let posss = this.accompagnementsD.indexOf(arg[1]);
                if (posss == -1)
                    this.accompagnementsD.push(arg[1]);
                else this.accompagnementsD.splice(posss, 1);
                break;
            }
            case "desserts libre":
            {
                let possss = this.dessertL.indexOf(arg[1]);
                if (possss == -1)
                    this.dessertL.push(arg[1]);
                else this.dessertL.splice(possss, 1);
                break;
            }
            case "desserts fixe":
            {
                let posssss = this.dessertD.indexOf(arg[1]);
                if (posssss == -1)
                    this.dessertD.push(arg[1]);
                else this.dessertD.splice(posssss, 1);
                break;
            }
            case "nom":{
                this.nom = arg[1];
                break;
            }
            case "prix":{
                this.prix = arg[1];
                break;
            }
            case "maxAcc":{
                this.max['acc'] = arg[1];
                break;
            }
            case "maxSauce":{
                this.max['sauce'] = arg[1];
                break;
            }
            case "sauce":{
                let posss = this.sauce.indexOf(arg[1]);
                if (posss == -1)
                    this.sauce.push(arg[1]);
                else this.sauce.splice(posss, 1);
                break;
            }
        }
    }
    toFirebase(name) {
        //SET UP REF
        console.log(new Menu().clone(this));
        console.log(this);
        let routeData = fb.storage().ref(name+ "recap.txt");
        let routePicture = fb.storage().ref(name + "/picture.png");

        if (this.tmpFile != null) {
            //UPLOAD PICTURE
            let uploadTask = routePicture.put(this.tmpFile);

            //GET URL
            uploadTask.then((snapshot) => {
                snapshot.ref.getDownloadURL().then((url) => {
                this.picture = url;
                let data_string = this.toString();
                data_string += "picture : " + this.picture + "\n";
                let blob = new Blob([data_string], {type: 'text/plain'});
                routeData.put(blob);
            });})
        //RESET
        this.tmpFile = null;
        }
        else if (this.picture != "https://image.freepik.com/free-photo/kebab-platter-with-lamb-chicken-lula-tikka-kebabs-grilled-vegetables-with-red-onion-salad_141793-2250.jpg") {
            let data_string = this.toString();
            data_string += "picture : " + this.picture + "\n";
            let blob = new Blob([data_string], {type: 'text/plain'});
            routeData.put(blob);
        }
        else {
            let blob = new Blob([this.toString()], {type: 'text/plain'});
            routeData.put(blob);
        }
    }
    init(file){
        let tmp = file.split("\n");
        for(let x=0;x<tmp.length;x++){
            let tmpp = tmp[x].split(' : ');
            let arg = tmpp[0];
            let content = tmpp[1];
            switch(arg){
                case 'Nom':{
                    this.nom=content;
                    break;
                }
                case 'Prix':{
                    this.prix=content;
                    break;
                }
                case 'picture':{
                    this.picture=content;
                    break;
                }
                case 'Accompagnements par d�fault':{
                    let data = content.split(", ");
                    for(let i=0;i<data.length;i++)
                        this.accompagnementsD.push(data[i]);
                    break;
                }
                case 'Accompagnements libre':{
                    let data = content.split(", ");
                    for(let i=0;i<data.length;i++)
                        this.accompagnementsL.push(data[i]);
                    break;
                }
                case 'Desserts fixe':{
                    let data = content.split(", ");
                    for(let i=0;i<data.length;i++)
                        this.dessertD.push(data[i]);
                    break;
                }
                case 'Desserts libre':{
                    let data = content.split(", ");
                    for(let i=0;i<data.length;i++)
                        this.dessertL.push(data[i]);
                    break;
                }
                case 'Sauce':{
                    let data = content.split(", ");
                    for(let i=0;i<data.length;i++)
                        this.sauce.push(data[i]);
                    break;
                }

            }
        }
    return this;
    }
    addSure(arg){
    console.log(arg);
        switch(arg[0]){
            case "plat":
            {
                let pos = this.plat.indexOf(arg[1]);
                if (pos == -1)
                    this.plat.push(arg[1]);
                break;
            }
            case "accompagnements libre":
            {
                let poss = this.accompagnementsL.indexOf(arg[1]);
                if (poss == -1)
                    this.accompagnementsL.push(arg[1]);
                break;
            }
            case "accompagnements par d�fault":
            {
                let posss = this.accompagnementsD.indexOf(arg[1]);
                if (posss == -1)
                    this.accompagnementsD.push(arg[1]);
                break;
            }
            case "desserts libre":
            {
                let possss = this.dessertL.indexOf(arg[1]);
                if (possss == -1)
                    this.dessertL.push(arg[1]);
                break;
            }
            case "desserts fixe":
            {
                let posssss = this.dessertD.indexOf(arg[1]);
                if (posssss == -1)
                    this.dessertD.push(arg[1]);
                break;
            }
            case "nom":{
                this.nom = arg[1];
                break;
            }
            case "sauce":{
                let posss = this.sauce.indexOf(arg[1]);
                if (posss == -1)
                    this.sauce.push(arg[1]);
                break;
            }
        }
    }
    clone(src){
        return Object.assign({}, src);
    }
}