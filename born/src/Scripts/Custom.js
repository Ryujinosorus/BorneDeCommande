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
                    case 'NbSelection' : {
                        let tmp = arg[1].split(', ');
                        for(let x=0;x<tmp.length;x++)
                            if(tmp[x]!=''){
                                let line = tmp[x].split('-');
                                for(let y=0;y<this.content.length;y++)
                                    if(this.content[y].nom == line[0]){
                                        this.content[y].nbSelection = line[1];
                                        break;
                                    }
                            }
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
                            nbSelection : -1
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
        for(let k=0;k<this.otherCustom.length;k++)
            if(this.otherCustom[k] !='')
            this.otherCustom[k].reset();
    }
    getPrice(){
        let prix = this.price;
        for(let i=0;i<this.content.length;i++)
            if(this.content.payable)
                for(let j=0;j<this.content[i].data.length;j++)
                    if(this.content[i].data[j].selected)
                        prix += this.content[i].data[j].price;
        for(let k=0;k<this.otherCustom.length;k++)
            prix += this.otherCustom[k].getPrice();
        return prix;
    }
}