import React, { useState } from "react";
import "./form.css"
import FormCreateDataStore from "../content/FormContent";
import { RiCloseLine } from "react-icons/ri";
import { useForm } from "react-hook-form";



const Form = ({setIsFormOpen}) => {

  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data)
  

  return (
  <div className="hideBG" >
      
        <div className="centered">
        <div className="modal">
          <div className= "modalHeader" >
            <h5 className="heading">Create Data Source</h5>
          </div>

          <button className= "closeBtn" onClick={() => setIsFormOpen(false)}> <RiCloseLine style={{ marginBottom: "-3px" }} /></button>
            <form className="formContainer" onSubmit={handleSubmit(onSubmit)}>
                <div className="formLabelArea" > 
                <label>{FormCreateDataStore.title}</label><br></br><br></br>
                <label>{FormCreateDataStore.code}</label><br></br> <br></br> <br></br> <br></br>
                <label>{FormCreateDataStore.status}</label><br></br>
                <label>{FormCreateDataStore.advancefilter}</label><br></br>
                <label>{FormCreateDataStore.deleteDataSource} Schedule Time</label><br></br>
                <label>{FormCreateDataStore.dataStoreLog} </label><br></br>
                 </div>
                <div className="formInputArea"> 
                <input className="inputText" name="Title" {...register("title",{ required: true, maxLength: 20 })} type="text"></input>
                <input className="inputText" name="Code" {...register("code",{ required: true})}  type="text"></input> <br></br> <br></br> <br></br>
                <div className="enabled">
                <input className="input-radio-btn" type="radio"  value="Yes"name="enabled" {...register("enabled")}  /> yes
                <input className="input-radio-btn" type="radio" value="No"name="enabled" {...register("enabled")}   /> No
                </div>
                <div>
                <input className="input-radio-btn" type="radio" value="Yes" name="enabled-Advance-Filter" {...register("enabled-Advance-Filter")}  /> yes
                <input className="input-radio-btn" type="radio" value="No" name="enabled-Advance-Filter" {...register("enabled-Advance-Filter")} /> No
                </div>
                <div>
                <input className="input-radio-btn" type="radio" value="Yes" name="delete-Data-Source-After-Schedule-Time" {...register("delete-Data-Source-After-Schedule-Time")} /> yes
                <input className="input-radio-btn" type="radio" value="No" name="delete-Data-Source-After-Schedule-Time" {...register("delete-Data-Source-After-Schedule-Time")}/> No
                </div>
                <div>
                <input className="input-radio-btn" type="radio" value="Yes" name="enable-Data-Store-Logs" {...register("enable-Data-Store-Logs")}  /> yes
                <input className="input-radio-btn" type="radio" value="No" name="enable-Data-Store-Logs" {...register("enable-Data-Store-Logs")} /> No
                </div>
                
                </div>
            <button  className="saveBtn"  >{FormCreateDataStore.submit}</button>
            <button  className="cancelBtn" onClick={() => setIsFormOpen(false)}> Cancel</button>
            </form>
        </div>
      </div> 
      </div>
       
      )
  ;
}

export default Form;