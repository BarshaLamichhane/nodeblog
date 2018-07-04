    <template>
        <div class="container">
            <div class="jumbotron">
                <div class="card">
                    <div class="card-body">
                        <form v-on:submit.prevent="submitPost">
                            <div class="from-control">
                                <label >Username:</label>
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                    <span class="input-group-text fa fa-user" ></span>
                                    </div>
                                    <input type="text" class="form-control" placeholder="username">
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
                                    <input type="email" class="form-control"  placeholder="email" >
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
                                    <input type="password" class="form-control"  placeholder="Password">
                                </div>
                            </div>
                            <div>
                                <label class="mt-2">Confirm Password:</label>
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                    <span class="input-group-text fa fa-lock" ></span>
                                    </div>
                                    <input type="password" class="form-control"  placeholder="Re-enter password">
                                </div>
                            </div>
                            <button type="submit" v-bind:class={available:available} class="mt-4 btn btn-primary" >Submit</button>
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
                available:true
            };
        },
        methods:{
            submitPost(){
                this.$router.push("/login");
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


