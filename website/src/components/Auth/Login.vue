<template>
    <section class="grey lighten-3">
        <div class="container" id="container" ref="container" >
            <div class="form-container sign-up-container">
                <form action="#">
                    <h1>Créer votre compte avec </h1>
                    <div class="social-container">
                        <a class="social"><i class="fab fa-facebook-f"></i></a>
                        <a class="social"><i class="fab fa-google-plus-g"></i></a>
                        <a class="social"><i class="fab fa-linkedin-in"></i></a>
                    </div>
                    <span>ou juste avec une adresse mail</span>
                    <input type="text" placeholder="Name" v-model="form.signUp.name" />
                    <input type="text" placeholder="Email" v-model="form.signUp.email"/>
                    <input type="password" placeholder="Password" v-model="form.signUp.password" />
                    <button @click="createAccount()">Sign Up</button>
                    <span>{{this.error}}</span>
                </form>
            </div>
            <div class="form-container sign-in-container">
                <div class="myForm">
                    <h1>Connectez vous avec</h1>
                    <div class="social-container">
                        <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
                        <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
                        <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
                    </div>
                    <span>ou juste avec une adresse mail</span>
                    <input type="email" placeholder="Email" v-model="form.signIn.email" />
                    <input type="password" placeholder="Password" v-model="form.signIn.password"/>
                    <a >Forgot your password?</a>
                    <button @click="login()">Sign In</button>
                </div>
            </div>
            <div class="overlay-container">
                <div class="overlay">
                    <div class="overlay-panel overlay-left">
                        <h1>Bientot fini !</h1>
                        <p>Une fois votre compte créer vous serez connecté automatiquement</p>
                        <button class="ghost" id="signIn" @click="swap(false)">Sign In</button>
                    </div>
                    <div class="overlay-panel overlay-right">
                        <h1>Pas de compte ?</h1>
                        <p>Créer en un gratuitement et commencez votre aventure avec nous !</p>
                        <button class="ghost" id="signUp" @click="swap(true)">Sign Up</button>
                    </div>
                </div>
            </div>
        </div>

    </section>
</template>
<script>
    /* eslint-disable */
    import {fb} from "../../main";
    import {Custom} from '../../Scripts/Custom';

    export default {
        name: 'Login',
        data() {
        return {
            error:'',
            title :' Login',
            form:{
                signIn:{
                    email:'',
                    password:''
                },
                signUp:{
                    name:'',
                    email:'',
                    password:''
                }
            }
            }
        },
    methods:{
        swap:function(whatToDO){
            if(whatToDO)
                this.$refs["container"].classList.add("right-panel-active");
            else
                this.$refs["container"].classList.remove("right-panel-active");
            },
        login(){
            
            fb.auth().signInWithEmailAndPassword(this.form.signIn.email, this.form.signIn.password).then(data => {
                this.$emit("updateUser");
                }).catch(err => {this.error = err.message;});
                
            fb.auth().onAuthStateChanged(user => {
                if(user){
                this.$store.dispatch("fetchUser", user);
                this.load('BorneSettings.txt');
                this.load('custom.txt');

                this.loadIcon('back');
                this.loadIcon('iconIN');
                this.loadIcon('iconOUT');
                this.loadIcon('next');
                this.loadIcon('add');
                this.loadIcon('cancel');

                this.loadTypeDataForCustom('Pains');
                this.loadTypeDataForCustom('Legumes');
                this.loadTypeDataForCustom('Fromages');
                this.loadTypeDataForCustom('Viande');
                }
});
        },
        load(name){
            let storageRef = fb.storage().ref('dataOfUser/'+this.$store.getters.user.data.email+'/');
            console.log('mail is');
            console.log(this.$store.getters.user);
            var xhr = new XMLHttpRequest();
            const self = this;
            storageRef.child(name).getDownloadURL().then(function(url) {
                xhr.responseType = '';
                xhr.onload = function() {
                    self.SET_UP(name,xhr.response);
                }
                xhr.open('GET', url);
                xhr.send();
            }).catch(function() {
                if(name=='BorneSettings.txt'){
                    self.$store.commit('ADD_BORNESETTINGS',new BorneSetting());
                    getFont();
                }

                console.log("file not found");
            });
        },
        SET_UP(name,data){
            switch(name){
                case 'BorneSettings.txt':{
                    this.$store.commit('ADD_BORNESETTINGS',JSON.parse(data));
                    console.log("bss is");
                    console.log(JSON.parse(data));
                    this.$router.replace("/ingredient");
                    break;
                }
                case 'custom.txt':{
                    this.ADD_CUSTOM(data);
                    break;
                }
            }
        },
        ADD_CUSTOM(data){
            let file = data.split("\n");
            var res=[];
            console.log(file);
            for(let x=0;x<file.length;x++)
                if(file[x] !=''){
                let storageRef = fb.storage().ref('dataOfUser/'+this.$store.getters.user.data.email+'/Custom/'+file[x]+'/recap.txt');
                let xhr = new XMLHttpRequest();
                storageRef.getDownloadURL().then(function(url) {
                    xhr.responseType = '';
                    xhr.onload = function() {
                        res.push(new Custom().init(xhr.response));
                    }
                    xhr.open('GET', url);
                    xhr.send();
                }).catch(function(error) {
                    console.log(error);
                });
            }
            this.$store.commit('INIT_CUSTOM',res);
        },
        loadIcon(name){
            let storageRef = fb.storage().ref('picture/iconSelector/');
            let res=[];
            var xhr = new XMLHttpRequest();
            const self = this;
            storageRef.child(name+'.txt').getDownloadURL().then(function(url) {
                xhr.responseType = '';
                xhr.onload = function() {
                    let data = xhr.response.split('\n');
                    for(let i=0;i<data.length;i++)
                        if(data[i]!=''){
                            let line = data[i].split(' : ');
                            let obj = {
                                name : '',
                                url : '',
                            }
                            obj.name = line[0];
                            obj.url = line[1];
                            res.push(obj);
                        }
                    self.$store.commit('SET_ICON',[name,res]);
                }
                xhr.open('GET', url);
                xhr.send();
            }).catch(function() {
                if(name =='BorneSettings.txt'){
                    self.$store.commit('ADD_BORNESETTINGS',new BorneSetting());
                    getFont();
                }

                console.log("file not found");
            });
        },
        loadTypeDataForCustom(name){
            let storageRef = fb.storage().ref('data/typeDataForCustom/');
            let res=[];
            var xhr = new XMLHttpRequest();
            const self = this;
            storageRef.child(name+'.txt').getDownloadURL().then(function(url) {
                xhr.responseType = '';
                xhr.onload = function() {
                    let data = xhr.response.split('\n');
                    for(let i=0;i<data.length;i++)
                        if(data[i]!=''){
                            let line = data[i].split(' : ');
                            let obj = {
                                name : '',
                                url : '',
                            }
                            obj.name = line[0];
                            obj.url = line[1];
                            res.push(obj);
                        }
                    self.$store.commit('SET_FOOD',[name,res]);
                }
                xhr.open('GET', url);
                xhr.send();
            }).catch(function() {
                if(name =='BorneSettings.txt'){
                    self.$store.commit('ADD_BORNESETTINGS',new BorneSetting());
                }

                console.log("file not found");
            });
        },
        createAccount(){
        fb
                .auth()
                .createUserWithEmailAndPassword(this.form.signUp.email, this.form.signUp.password)
                .then(data => {
            data.user
                .updateProfile({
                    displayName: this.form.signUp.name
                })
                .then(() => {});
    })
    .catch(err => {
        this.error = err.message;
        console.log(err);
    });
        if(this.error=='') {
            this.$refs["container"].classList.remove("right-panel-active");
            this.form.signUp.email='';
            this.form.signUp.name='';
            this.form.signUp.password='';
        }

    }

    }
    }

    /* eslint-enable */
</script>

<style scoped>

    @import url('https://fonts.googleapis.com/css?family=Montserrat:400,800');

    * {
        box-sizing: border-box;
    }

    body {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        font-family: 'Montserrat', sans-serif;
        height: 100vh;
        margin: -20px 0 50px;
    }

    h1 {
        font-weight: bold;
        margin: 0;
    }

    h2 {
        text-align: center;
    }

    p {
        font-size: 16px;
        font-weight: 120;
        line-height: 20px;
        letter-spacing: 0.5px;
        margin: 20px 0 30px;
        color : #fff;
    }

    span {
        font-weight: bold;
        font-size: 15px;
    }

    a {
        color: green;
        font-size: 14px;
        text-decoration: none;
        margin: 15px 0;
    }

    button {
        border-radius: 20px;
        border: 1px solid #1976D0;
        background-color: #1976D0;
        color: #FFFFFF;
        font-size: 12px;
        font-weight: bold;
        padding: 12px 45px;
        letter-spacing: 1px;
        text-transform: uppercase;
        transition: transform 80ms ease-in;
    }

    button:active {
        transform: scale(0.95);
    }

    button:focus {
        outline: none;
    }

    button.ghost {
        background-color: transparent;
        border-color: #FFFFFF;
    }

    .myForm {
        background-color: #FFFFFF;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding: 0 50px;
        height: 100%;
        text-align: center;
    }

    input {
        background-color: #fff;
        border: none;
        padding: 12px 15px;
        margin: 8px 0;
        width: 100%;
    }

    .container {
        background-color: #fff;
        border-radius: 10px;
        box-shadow: 0 14px 28px rgba(0,0,0,0.25),
        0 10px 10px rgba(0,0,0,0.22);
        position: relative;
        overflow: hidden;
        width: 1000px;
        height: 600px;
        max-width: 100%;
        min-height: 480px;
        margin-top: 100px;
    }

    .form-container {
        position: absolute;
        top: 0;
        height: 100%;
        transition: all 0.6s ease-in-out;
    }

    .sign-in-container {
        left: 0;
        width: 50%;
        z-index: 2;
    }

    .container.right-panel-active .sign-in-container {
        transform: translateX(100%);
    }

    .sign-up-container {
        left: 0;
        width: 50%;
        opacity: 0;
        z-index: 1;
    }

    .container.right-panel-active .sign-up-container {
        transform: translateX(100%);
        opacity: 1;
        z-index: 5;
        animation: show 0.6s;
    }

    @keyframes show {
        0%, 49.99% {
            opacity: 0;
            z-index: 1;
        }

        50%, 100% {
            opacity: 1;
            z-index: 5;
        }
    }

    .overlay-container {
        position: absolute;
        top: 0;
        left: 50%;
        width: 50%;
        height: 100%;
        overflow: hidden;
        transition: transform 0.6s ease-in-out;
        z-index: 100;
    }

    .container.right-panel-active .overlay-container{
        transform: translateX(-100%);
    }

    .overlay {
        background: #1976D0;
        background: #1976D0;
        background: #1976D0;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: 0 0;
        color: #FFFFFF;
        position: relative;
        left: -100%;
        height: 100%;
        width: 200%;
        transform: translateX(0);
        transition: transform 0.6s ease-in-out;
    }

    .container.right-panel-active .overlay {
        transform: translateX(50%);
    }

    .overlay-panel {
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding: 0 40px;
        text-align: center;
        top: 0;
        height: 100%;
        width: 50%;
        transform: translateX(0);
        transition: transform 0.6s ease-in-out;
    }

    .overlay-left {
        transform: translateX(-20%);
    }

    .container.right-panel-active .overlay-left {
        transform: translateX(0);
    }

    .overlay-right {
        right: 0;
        transform: translateX(0);
    }

    .container.right-panel-active .overlay-right {
        transform: translateX(20%);
    }

    .social-container {
        margin: 20px 0;
    }

    .social-container a {
        border: 1px solid #DDDDDD;
        border-radius: 50%;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        margin: 0 5px;
        height: 40px;
        width: 40px;
    }
</style>