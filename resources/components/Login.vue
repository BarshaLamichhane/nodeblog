    <template>
        <div class="container">
            <div class="jumbotron">
                <div class="card">
                    <div class="card-header">   </div>
                    <div class="card-body">
                      <!--  <img width="200px" height="200px" :src="image"/> -->
                        <form action="#">
                            <div>
                                <label class="mt-2">email:</label>
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                    <span class="input-group-text fa fa-envelope" ></span>
                                    </div>
                                    <input type="email" class="form-control"  placeholder="email"  required>
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
                                    <input type="password" class="form-control"  placeholder="Password"  required>
                                </div>
                            </div>
                            <button type="submit" v-bind:class={available:available} class="mt-4 btn btn-primary" >login</button>
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
            available:true,
            //image:"https://thumb7.shutterstock.com/display_pic_with_logo/1906715/261331787/stock-vector-abstract-creative-concept-vector-member-login-form-interface-for-web-page-site-mobile-261331787.jpg"
        };
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
                background:"";
                margin:auto
            }
            .jumbotron{
                width:500px;
                margin:auto;
                background: url('https://thumb7.shutterstock.com/display_pic_with_logo/1906715/261331787/stock-vector-abstract-creative-concept-vector-member-login-form-interface-for-web-page-site-mobile-261331787.jpg')
                //background-color: lightgrey;
            }     
        }

        // Medium devices (tablets, 768px and up)
        @media (min-width: 768px) { 
            
        label{
        display: flex;
        }
        .card{
                width:400px;
            }
            .jumbotron{
                width:600px;  
            } 
        }

        // Large devices (desktops, 992px and up)
        @media (min-width: 992px) { 
            label{
            display: flex;
            }
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


