import { TextField } from "@material-ui/core";





const ForgotPassword = ()=>{
    return(
        <>
        <div className="bg-rose-500 h-screen w-full">
            <div className="py-44 px-16 md:px-64  md:py-64 lg:py-12 xl:py-28 2xl:py-44">
                <div className="lg:mt-20">
                    <h1 className="flex justify-center text-3xl font-bold italic text-white">Fogot password</h1>
                    <h1 className="flex justify-center  mt-4 text-white ">sign in to continue</h1>
                    <h1 className="mt-12 mx-8 flex justify-center">
              <TextField
                inputProps={{ style: { color: "white" } }}
                InputLabelProps={{
                  style: { color: "white" },
                }}
                id="filled-password-input"
                label="Email"
                type="text"
                name="email"
                autoComplete="current-password"
                
              />
            </h1>
            <div>
            <h1 className="mt-24 flex justify-center"><button className="px-12 py-4 rounded-lg bg-rose-200 font-bold 2xl: flex justify-center" >Submit</button></h1>
          </div>
                </div>
            </div>
        </div>
        
        
        
        </>
    );
};




export default ForgotPassword;