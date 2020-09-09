import {fb} from '../main';
export class Custom {
    constructor(){
        this.nom = "";
        this.prix = "5";
        this.content = [];
        this.picture = 'https://firebasestorage.googleapis.com/v0/b/bornekebab.appspot.com/o/data%2Fpicture%2FdefaultCustomPicture.jpg?alt=media&token=cfba1e04-2899-4a0d-9ece-bbc7d1773334';
        this.categorie = "Pas classé";
        this.pushHimToFb = true;
        this.linkedWith = [];
        this.otherCustom = [];
    }
    canBeSafe(){
        return true;
    }
    toString(){
        let res='';
        res += 'Nom : '  + this.nom + '\n';
        res += 'Prix : '  + this.prix + '\n';
        res += 'Catégorie : '  + this.categorie + '\n';
        for(let i=0;i<this.content.length;i++)
            res += (this.content[i].nom + ' : ' + this.content[i].data.length + ' éléments\n')
        return res;

    }
    upload(email){
        if(this.picture.startsWith('blob:'))
            this.uploadWithPicture(email);
        else this.uploadWithoutPicture(email);
    }
    uploadWithoutPicture(email){ 
        this.pushHimToFb = false;
        let res='';
        res += 'Nom : '  + this.nom + '\n';
        res += 'Prix : '  + this.prix + '\n';
        res += 'Catégorie : '  + this.categorie + '\n';
        res += 'Picture : ' + this.picture + '\n';
        for(let i=0;i<this.content.length;i++){
            res += (this.content[i].nom + ' : ');
            for(let j=0;j< this.content[i].data.length;j++){
                res += this.content[i].data[j].nom + ' - ' + this.content[i].data[j].url + ' - ' + this.content[i].data[j].price;
                res += j==this.content[i].data.length-1 ? '' :', ';
                console.log(this.content[i].data[j].nom);
            }
            res+='\n';
            if(this.content[i].payable)
                res += ('Payable : ' + this.content[i].nom + '\n')
            
        }
        res += this.linkedWith.length == 0 ? '' : 'LinkedWith : ';
        for(let x=0;x<this.linkedWith.length;x++)
            res +=(this.linkedWith[x] + (x == this.linkedWith.length - 1 ? '' : ', '));
        res += this.linkedWith.length == 0 ? '' : '\n';

        res += this.otherCustom.length == 0 ? '' : 'OtherCustom : ';

        for(let x=0;x<this.otherCustom.length;x++)
            res +=(this.otherCustom[x] + (x == this.linkedWith.length - 1 ? '' : ', '));
        res += this.otherCustom.length == 0 ? '' : '\n';

       let route = fb.storage().ref('dataOfUser/' + email + '/Custom/'+ this.nom + '/recap.txt');
       route.put(new Blob([res], {type: 'text/plain'}));
    }
    uploadWithPicture(email){
        console.log('UPLOAD A PICTURE !');
        //UPLOAD PICTURE
        let routePicture = fb.storage().ref('dataOfUser/' + email + '/Custom/'+ this.nom + '/picture.png');
        var xhr = new XMLHttpRequest();
        xhr.open('GET', this.picture, true);
        xhr.responseType = 'blob';
        let self = this;
        xhr.onload = function() {
        if (this.status == 200) {   
            var myBlob = this.response;
            let uploadTask = routePicture.put(myBlob);
            //GET URL
            uploadTask.then((snapshot) => {
                snapshot.ref.getDownloadURL().then((url) => {
                self.picture = url;
                }).then(() => self.uploadWithoutPicture(email)) ;
            })
        }
        };
        xhr.send();
    }
    init(data){
        console.log(data);
        this.nom = 'aaaaaa';
        let file = data.split('\n');
        for(let x=0;x<file.length;x++)
            if(file[x]!=''){
                let arg = file[x].split(' : ');
                switch(arg[0]){
                    case 'Nom' : {
                        this.nom = arg[1];
                        break;
                    }
                    case 'Prix' : {
                        this.prix = arg[1];
                        break;
                    }
                    case 'Catégorie': {
                        this.categorie = arg[1];
                        break;
                    }
                    case 'Picture' : {
                        this.picture = arg[1];
                        break;
                    }
                    case 'Payable':{
                        for(let i=0;i<this.content.length;i++)
                            if(this.content[i].nom == arg[1])
                                this.content[i].payable = true;
                        break;
                    }
                    case 'LinkedWith' : {
                        if(arg[1]=='')
                            break;
                        let tmp = arg[1].split(', ');
                        for(let i=0; i< tmp.length;i++)
                            this.linkedWith.push(tmp[i]);
                        break;
                    }
                    case 'OtherCustom' : {
                        if(arg[1]=='')
                            break;
                        let tmp = arg[1].split(', ');
                        for(let i=0; i< tmp.length;i++)
                            this.otherCustom.push(tmp[i]);
                        break;
                    }
                    default : {
                        let obj = {
                            nom : arg[0],
                            data : [],
                            payable : false
                        };
                        if(arg[1]!=''){ 
                            let tmp = arg[1].split(', ');
                            for(let i=0; i< tmp.length;i++){
                                let tmpp = tmp[i].split(' - ');
                                obj.data.push({
                                    nom : tmpp[0],
                                    url : tmpp[1],
                                    price : tmpp[2]
                                });
                            }
                        }
                        this.content.push(obj);
                    }
                }
        }
        return this;
    }
}