<template>
    <div class="container">
        <div class="jumbotron">
            <div class="card">
                <div class="card-body">
                    <form action="/action_page.php">
                        <div class="form-group">
                            <label for="email">Email address:</label>
                            <span class="input-group-text fa fa-envelope" id="email"></span>
                            <input type="email" class="form-control " >
                        </div>
                        <div class="form-group">
                            <label for="pwd">Password:</label>
                            <span class="input-group-text fa fa-lock" id="password"></span>
                            <input type="password" class="form-control" id="pwd">
                        </div>
                        <div class="form-group">
                            <label for="pwdd">Confirm Password:</label>
                            <span class="input-group-text fa fa-lock" id="passwordconform"></span>
                            <input type="password" class="form-control" id="pwdd">
                        </div>
                       <!-- <div class="form-group form-check">
                            <label class="form-check-label">
                            <input class="form-check-input" type="checkbox"> Remember me
                            </label>
                        </div>-->
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            
        }
    },
    mounted(){
        $("label").addClass("float-left")
        $(".input-group-text").css("position","absolute")
                              .css("width","40px")
                              .css("height","38px")
                              .css("margin-top","32px")
        $(".jumbotron").css("width","500px")
                        .css("margin","auto")
        $("button").css("width","100%")
                    //.css("margin-left" ,"120px")
       
                   
        

    }
}
</script>


