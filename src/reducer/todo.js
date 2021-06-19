const initialState={ 
    list:[]
}

  const todoReducer=(state=initialState,action)=>{

        switch(action.type){
            case "addtodo":
                const {id,data}=action.payload;

                if(data){

                    if(data.length>2){

                        return{

                            ...state,
                            list:[
                                ...state.list,
                                {
                                    id,
                                    data
                                }
                            ]
                            };
          
                    }else{
                        window.alert(" 😄 Babu minimum 2 digit required : let's try again ")
                    }

                }else{
                    window.alert("  😄 No Never fill up your input Box :) ")
                }


               case "deletetodo" :
                 const newList=  state.list.filter((elem)=> elem.id !== action.id)
               
               return{
                   ...state,
                   list:newList
                   
               } 

               case "removeall":
                   if( !state.list.length){
                       window.alert('Your TOdo list is emty 😄 I am cleaver undrstand 😏')
                   }else{
                    return{
                        ...state, list:[]
                    }
                   }


           default : return state       

        }

  }


  export default todoReducer