
export const addtodo=(data)=>{
    return{
        type:"addtodo",
        payload:{
            id:new Date().getTime().toString(),
            data:data
        }
    }
}

export const deletetodo=(id)=>{

    return{
        type:"deletetodo",
         id:id
    }

}

export const removeall=()=>{ 
    return{
        type:"removeall"
    }
}