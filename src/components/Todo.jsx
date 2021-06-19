import React,{useState} from 'react'

 

import { addtodo ,deletetodo,removeall} from '../action/index'

 import { useDispatch,useSelector} from 'react-redux'

export default function Todo() {

//    const  list = useSelector((state)=> state.rootReducer.list)
    

    const [inputData,setInputData]=useState('')
    
    const dispatch=useDispatch();

    const list= useSelector((state)=>state.todoReducer.list)
     
     
    return (
        <>
            <div className="conatiner mt-5">
                <div className="row">
                    <div className="col-md-4 mx-auto text-white text-center border py-5 text-center">
                        <h4>TO do app React_With_Redux</h4>

                        <div className="wrap d-flex mt-5">
                            <input onChange={(e)=>setInputData(e.target.value)} value={inputData} className='form-control' type="text" placeholder=' ✍️ Add your Task ..' />

                            <button onClick={()=> dispatch( addtodo(inputData),setInputData(''))} className='btn btn-info'>AddTask</button>
                        </div>


                                    {/* show this todo  */}

                                   
                        {
                               list.map((elem)=>{
                                return (
                                  <div className="wrap2 d-flex mt-2" key={elem.id}>
                                   <input className='form-control' type="text" value={elem.data} disabled={true} />
                                   <button onClick={()=>dispatch(deletetodo(elem.id))} className='btn btn-secondary text-white '> Delete </button>
                     
                                  </div>   
                                                   
                                    )
                                     })
                         }
  
                <div className="removeBtn"> 

                            <button onClick={()=>dispatch(removeall())}  className='btn w-50 mt-4 text-center btn-dark text-white'>Remove all </button>

                    </div>

                    </div>
                </div>
            </div>


        </>
    )
}
