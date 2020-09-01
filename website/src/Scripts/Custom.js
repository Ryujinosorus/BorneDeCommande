import {fb} from '../main';
export class Custom {
    constructor(){
        this.nom = "";
        this.prix = "5";
        this.content = [];
        this.picture = 'https://image.freepik.com/vecteurs-libre/cadres-photo-fond-couleur-pastel_1017-26512.jpg';
        this.categorie = "Pas classé";
        this.pushHimToFb = true;
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
            for(let j=0;j< this.content[i].data.length;j++)
                res+= (this.content[i].data[j].nom + ' ' + this.content[i].data[j].url) + j==this.content[i].data.length-1 ? '' :', ';
            res+='\n';
        }
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
                self.uploadWithoutPicture(email);
            });})
        }
        };
        xhr.send();
    }
}