import { useState, useMemo } from "react"
function App(){
  const [name,setName]=useState('ruslan')
  const [description,setDescription]=useState('')
  //select
  const genders=[
    {key:'1',value:'kisi'},
    {key:'2',value:'qadin'},
  ]
  const [gender,setGender]=useState('salam');
  const selectedGender=useMemo(()=>{
    return genders.find(g=>g.key===gender)
  },[gender])
  //categori
  const categoryList=[
    {key:1, value:'php'},
    {key:2, value:'java'},
    {key:3, value:'html'},
    {key:4, value:'sass'}
  ]
  const [categories,setCategories]=useState([2,4])
  const selectCategories=categories&&categoryList.filter(c=>categories.includes(c.key))
  //check
  const [rule,setRule]=useState(true)
  const [rules,setRules]=useState([
    {key:1,value:"1ci addimi qebul edirem", checked:false},
    {key:2,value:"2ci addimi qebul edirem", checked:false},
    {key:3,value:"3ci addimi qebul edirem", checked:true},
  ])
  const checkRule=(key,checked)=>{
    setRules(rules=>rules.map(rule=>{
      if(key===rule.key){
        rule.checked=checked
      }
      return rule
    }))
  }
  const enabled=rules.every(rule=>rule.checked);
  
  return(
    <>
    <button onClick={()=>setName('ehmed')}>ad deyis</button>
    <input type='text' value={name} onChange={e=>setName(e.target.value)}></input><br/>
    <textarea value={description} onChange={e=>setDescription(e.target.value)} /><br/>
    <select value={gender} onChange={e=>setGender(e.target.value)} >
      <option value=''>sec</option>
      {genders.map((gender)=>(
        <option value={gender.key} key={gender.key}>{gender.value}</option>
      ))}
    </select><br/>
    {/* category */}
    <button onClick={(()=>setCategories([2,3,4]))}>bas</button>
    <select value={categories} multiple={true} onChange={e=>setCategories([...e.target.selectedOptions].map(option=>+option.value))} >
      <option value=''>sec</option>
      {categoryList.map((category)=>(
        <option value={category.key} key={category.key}>{category.value}</option>
      ))}
    </select><br/>
    {JSON.stringify(selectCategories)}
    
    <br/>

    <label>
      <input type='checkbox' checked={rule} onChange={e=>setRule(e.target.checked)}/>
      qebul et
    </label>
    <br/>
    <button disabled={!rule}>davam et</button>
    <br/>
    {rules.map(rule=>(
      <label key={rule.key}>
        <input type='checkbox' checked={rule.checked} onChange={e=>checkRule(rule.key,e.target.checked)} />
        {rule.value}
      </label>
    ))}
    {JSON.stringify(rules)}
    <br/>
    <button disabled={!enabled}>davam et</button>

    </>
    
  )
}
export default App