
import SignupRouter from "./SignupRouter"

export function set(app){
    app.use("/signup", SignupRouter)
}