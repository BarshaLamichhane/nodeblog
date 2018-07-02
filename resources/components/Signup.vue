<template>
    <div class="container">
        <div class="jumbotron">
            <div class="card">
                <div class="card-body">
                    <form action="/action_page.php">
                        <div class="from-control">
                            <label class="mt-1">Username</label>
                            <div class="input-group">
                                <div class="input-group-prepend">
                                <span class="input-group-text fa fa-user" id="inputGroupPrepend"></span>
                                </div>
                                <input type="text" class="form-control" placeholder="username"  required>
                                <div class="invalid-feedback">
                                Please choose a username.
                                </div>
                            </div>
                        </div>
                        <div >
                            <label class="mt-1">email</label>
                            <div class="input-group">
                                <div class="input-group-prepend">
                                <span class="input-group-text fa fa-envelope" id="inputGroupPrepend"></span>
                                </div>
                                <input type="email" class="form-control"  placeholder="email"  required>
                                <div class="invalid-feedback">
                                Please enter valid email format.
                                </div>
                            </div>
                        </div>
                         <div>
                            <label class="mt-1">Password</label>
                            <div class="input-group">
                                <div class="input-group-prepend">
                                <span class="input-group-text fa fa-lock" ></span>
                                </div>
                                <input type="password" class="form-control"  placeholder="Password"  required>
                            </div>
                        </div>
                        <div>
                            <label class="mt-1">Confirm Password</label>
                            <div class="input-group">
                                <div class="input-group-prepend">
                                <span class="input-group-text fa fa-lock" ></span>
                                </div>
                                <input type="password" class="form-control"  placeholder="Re-enter password"  required>
                            </div>
                        </div>
                        <button type="submit" class="mt-4 btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {};
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
            margin:auto
        } 
           

    }

    // Medium devices (tablets, 768px and up)
    @media (min-width: 768px) { 
        
       label{
       display: flex;
       }
       .card{
            width:400px;
            margin:auto
        }
        .jumbotron{
            width:600px;
            margin:auto
        } 
           

    }

    // Large devices (desktops, 992px and up)
    @media (min-width: 992px) { 
        label{
         display: flex;
        }
        .card{
            width:500px;
            margin:auto
        }
        .jumbotron{
            width:700px;
            margin:auto
        }
    }

    // Extra large devices (large desktops, 1200px and up)
    @media (min-width: 1200px) {
        label{
         display: flex;
        }
        .card{
            width:500px;
            margin:auto
        }
        .jumbotron{
            width:700px;
            margin:auto
        }

             

    }
</style>


