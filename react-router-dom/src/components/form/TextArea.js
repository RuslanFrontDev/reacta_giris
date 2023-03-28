import { useField } from "formik";
export  default function Input({label, ...props}){
   const [field, meta, helpers] = useField(props);
   return (
      <label className="block w-full">
         <div className="text-sm text-gray-600">{label}</div>
         <textarea className="w-full py-4 rounded resize-none border-b outline-none focus:border-black" {...field} {...props}></textarea>
      </label>
   )
}