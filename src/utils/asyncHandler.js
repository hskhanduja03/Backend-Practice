//      Using promises

const asyncHandler = (requestHanlder)=>{
    (req,res,next)=>{
        Promise
        .resolve(requestHanlder(req,res,next))
        .catch((err)=>{next(err)})
    }
}

export {asyncHandler}


//      Using TRY CTACH

// const asyncHandler = async (fn) =>(req,res,next)=>{
//     try {
        // await fn(req,res,next)
//     } catch (error) {
//         res.
//         status(error.code || 500)
//         .json({
//             success: false,
//             message: error.message 
//         })
//     }
// }
