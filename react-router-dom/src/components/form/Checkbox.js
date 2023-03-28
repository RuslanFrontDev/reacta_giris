import { useField } from "formik";
import {BiCheck} from 'react-icons/bi'
import classNames from "classnames";

export  default function Checkbox({label, ...props}){
   const [field, meta, helpers] = useField(props);
   return (
      <label className="flex gap-x-2 cursor-pointer text-sm items-center">
         <button onClick={()=>{
            helpers.setValue(!field.value)
         }} className={classNames({
            "w-5 h-5 rounded border flex transition-all items-center justify-center": true,
            "text-transparent": !field.value,
            "border-blue-600 text-white bg-blue-600" : field.value
         })}>
            <BiCheck size={16}/>
         </button>
         {label}
      </label>
   )
}