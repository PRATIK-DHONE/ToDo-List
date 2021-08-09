import React from 'react'
import logo from '../image/logo.svg'

const Todo = () =>{
    return(
        <>
            <div className = "main-div">
                <div className = "child-div">
                    <figure>
                        <img src={logo} alt='todologo'/>
                        <figcaption>Add Your List Here</figcaption>
                    </figure>
                    <div className="addItems">
                        <input type='text' placeholder="Add Items" id=""/>
                        <i className="fa fa-plus add-btn" title="Add Item"></i>
                    </div>
                    <div className="showItems">
                        <div className="eachItem">
                            <h3>Apple</h3>
                            <i class="fa fa-trash-alt add-btn" title="Delete Item"></i>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Todo