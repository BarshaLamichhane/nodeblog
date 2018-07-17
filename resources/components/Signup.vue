    <template>
        <div class="container">
            <div class="jumbotron">
                <div class="card">
                    <div class="card-body">
                        <form>
                            <div class="from-control">
                                <label >Username:</label>
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                    <span class="input-group-text fa fa-user" ></span>
                                    </div>
                                    <input type="text" class="form-control" placeholder="username" v-model="register.username">
                                    <div class="invalid-feedback">
                                    Please choose a username.
                                    </div>
                                </div>
                            </div>
                            <div >
                                <label class="mt-2">email:</label>
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                    <span class="input-group-text fa fa-envelope" ></span>
                                    </div>
                                    <input type="email" class="form-control"  placeholder="email" v-model="register.email" >
                                    <div class="invalid-feedback">
                                    Please enter valid email format.
                                    </div>
                                </div>
                            </div>
                            <div>
                                <label class="mt-2">Password:</label>
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                    <span class="input-group-text fa fa-lock" ></span>
                                    </div>
                                    <input type="password" class="form-control"  placeholder="Password" v-model="register.password">
                                </div>
                            </div>
                            <div>
                                <label class="mt-2">Confirm Password:</label>
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                    <span class="input-group-text fa fa-lock" ></span>
                                    </div>
                                    <input type="password" class="form-control"  placeholder="Re-enter password" v-model="register.confirmPassword">
                                </div>
                            </div>
							<div class="from-control">
                                <label >Contact No:</label>
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                    <span class="input-group-text fa fa-user" ></span>
                                    </div>
                                    <input type="text" class="form-control" placeholder="contact number" v-model="register.contact_no">
                                    <div class="invalid-feedback">
                                    Please choose contact_no.
                                    </div>
                                </div>
                            </div>
                            <button type="submit" v-bind:class={available:available} class="mt-4 btn btn-primary" @click="signUp">SignUp</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </template>
    <script>
    export default {
        data() {
            return {
                register:{
					username:null,
					email:null,
					password:null,
					confirmPassword:null,
					contact_no:null
				},
				available:true
            }
        },
        methods:{
            signUp(){
				//if(this.password===this.confirmPassword){
					axios.post('/signup', {
						payload: this.register
					}).then(function (response) {
						console.log(response)

					}).catch(function (err) {
						console.log(err)
					})
				//}else{
					console.log("please make sure your password and confirm passwords are same")
				//}
        	}
        },
        mounted() {
        }
    };
    </script>

    <style lang="scss" scoped>
        @media (min-width: 576px) { 
        label{
            display: flex;
        } 
        .card{
                width:300px;
                margin:auto
            }
            .jumbotron{
                width:500px;
                margin:auto;
                background-color: lightgrey;
            }     
        }

        // Medium devices (tablets, 768px and up)
        @media (min-width: 768px) { 
        .card{
                width:400px;
                
            }
            .jumbotron{
                width:600px;
                
            }
            
        }

        // Large devices (desktops, 992px and up)
        @media (min-width: 992px) { 
            
            .card{
                width:500px;
            }
            .jumbotron{
                width:700px; 
            }
        }

        // Extra large devices (large desktops, 1200px and up)
        @media (min-width: 1200px) {
            label{
            display: flex;
            }
            .card{
                width:500px;   
            }
            .jumbotron{
                width:700px;    
            } 
            .available{
                width:100%;
                background-color: green;
                border-bottom-color: green;
            }        
        }
        @media (min-width: 1400px){
            .jumbotron{
                margin-top:150px;
            }
        }
    </style>


