export class Custom {
    constructor(){
        this.nom = "";
        this.prix = "5";
        this.content = [];
        this.picture = 'https://image.freepik.com/vecteurs-libre/cadres-photo-fond-couleur-pastel_1017-26512.jpg';
        this.categorie = "Pas classé";
        this.pushHimToFb = true;
        this.linkedWith = [];
        this.otherCustom = [];
        this.nb = 1;
    }

    init(data){
        this.file = data;
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
                            payable : false,
                            selected : [],
                        };
                        if(arg[1]!=''){ 
                            let tmp = arg[1].split(', ');
                            for(let i=0; i< tmp.length;i++){
                                let tmpp = tmp[i].split(' - ');
                                obj.data.push({
                                    nom : tmpp[0],
                                    url : tmpp[1],
                                    price : tmpp[2],
                                    selected : false
                                });
                                obj.selected.push(false);
                            }
                        }
                        this.content.push(obj);
                    }
                }
        }
        return this;
    }
    reset(){
        for(let i=0;i<this.content.length;i++)
            for(let j=0;j<this.content[i].data.length;j++)
                this.content[i].data[j].selected = false;
    }
    clone(){
        let res = new Custom();
        res.nom = this.nom ;
        res.prix = this.prix ;
        res.content = this.content ;
        res.picture = this.picture ;
        res.categorie = this.categorie ;
        res.linkedWith = this.linkedWith ;
        res.otherCustom = this.otherCustom ;
        res.nb = 1;

    }
    toJSON(){
    var result = {};
    for (var x in this) {
        if (x !== "privateProperty1" && x !== "privateProperty2") {
            result[x] = this[x];
        }
    }
    return result;
    }

    pareil(com){
        console.log("COMPARE");
        console.log(com);
        console.log("AVEC");
        console.log(this);
        if(this.nom !=com.nom)
            return false;
        for(let x=0;x<this.content.length;x++)
            for(let y=0;y<this.content[x].data.length;y++)
                if(this.content[x].data[y].selected != com.content[x].data[y].selected)
                    return false;
        return true;
    }
}