import React,{useState} from 'react'
import logo from '../image/logo.svg'
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';

const Todo = () =>{
    const [inputData, setInputData] = useState('');
    const [items , setItems] = useState([]);
    const addItem =()=>{
        if(!inputData){

        }else{
            setItems([...items,inputData])
            setInputData("")
        }
    }
    const deleteItem= (id) =>{
        const updateitems = items.filter((elem,ind)=>{
            return ind !== id}
        )
        setItems(updateitems)
    }
    const removeAll=()=>{
        setItems([])
    }
    return(
        <>
            <div className = "main-div">
                <div className = "child-div">
                    <figure>
                        <img src={logo} alt='todologo'/>
                        <figcaption>Add Your List Here</figcaption>
                    </figure>
                    <div className="addItems">
                        <input type='text' placeholder="Add Items" id=""
                            value={inputData}
                            onChange={(e)=> setInputData(e.target.value)}
                        />
                        {/* <i className="fa fa-plus add-btn" title="Add Item"
                        onClick={addItem}></i> */}
                        <AddIcon className="fa fa-plus add-btn" onClick={addItem}/>
                    </div>
                    <div className="showItems">
                        {
                            items.map((elem,ind) => {
                                return(
                                    <div className="eachItem" key={ind}>
                                    <h3>{elem}</h3>
                                    {/* <i className="fa fa-trash-alt add-btn" title="Delete Item"
                                        onClick={()=>deleteItem(ind)}
                                    ></i> */}
                                    <DeleteIcon className="fa fa-trash-alt add-btn" onClick={()=>deleteItem(ind)} />
                                    </div>
                                )
                            })
                        } 
                        
                    </div>
                    <div className="showItems">
                        <button
                            className='btn effect04'
                            data-sm-link-text='Remove All'
                            onClick={removeAll}
                        ><span>Check List</span></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Todo