import * as Yup from "yup";
Yup.setLocale({
   mixed: {
      required: 'Bu alan doldurulmalidir'
   },
   string:{
      min:'Bu alan en az 6 karakterli olmalidir'
   }
})
export default Yup