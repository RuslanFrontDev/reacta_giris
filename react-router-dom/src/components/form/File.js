import { useField } from "formik";
import { BiCheck} from "react-icons/bi"
export  default function File({label, ...props}){
   const [field, meta, helpers] = useField(props);
   // const changeHandle = (e)=>{
   //    helpers.setValue(e.target.files[0])
   // }
   async function fileOpen(){
      try{
         const [fileHandle] = await window.showOpenFilePicker();
         const file = await fileHandle.getFile();
         helpers.setValue(file)
      }catch(e){
         helpers.setValue('')
      }
   }
   return (
      <div className="block w-[111.91px]">
      <div className="text-sm text-gray-600">{label}</div>
      {/* <input type='file' className="hidden" onChange={changeHandle} {...props}/> */}
      <button type='button' onClick={fileOpen} className="px-5 rounded  bg-blue-50 text-blue-500 h-10">
         {field.value && <>Dosya Secildi <BiCheck size={15}/></> }
         {!field.value && 'Dosya Sec' }
      </button>
      {field.value && <button onClick={()=>helpers.setValue('')} className="flex w-full t-sm underline text-gray-600 rounded bg-red-600 border-2 ">Dosyayi kaldir</button>}
   </div>
   
   )
}