import { useField } from "formik";
export  default function SelectBox({label, options, original = false, ...props}){
   const [field, meta, helpers] = useField(props);
   const changeHandle = (e)=>{
      let selected = options.find(option=>option.key === +e.target.value)
      helpers.setValue( original ? selected : +e.target.value)
   }
   return (
      <label className="block w-full">
         <div className="text-sm text-gray-600">{label}</div>
         <select className="w-full py-4 rounded resize-none border-b outline-none focus:border-black" onChange={changeHandle} defaultValue={field.value} {...props}>
            {options.map((option,key)=>(
               <option key={key} value={option.key}>{option.value}</option>
            ))}
         </select>

      </label>
   )
}