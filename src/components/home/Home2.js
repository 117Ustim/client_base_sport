// import Box from "@mui/material/Box";
// import TextField from "@mui/material/TextField";
// import Stack from "@mui/material/Stack";
// import Button from "@mui/material/Button";
// import InputLabel from "@mui/material/InputLabel";
// import MenuItem from "@mui/material/MenuItem";
// import FormControl from "@mui/material/FormControl";
// import Select from "@mui/material/Select";
// import '../../style.scss';
export default function Home2() {
  return (

    <>
    <h1>Введите данные</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        
        
        <fieldset className="textgroup" aria-labelledby="txt-q">
          <legend id="txt-q">Новый клиент</legend>
           <label htmlFor="t1">Фамилия</label>
          <input id="t1" type="text" name="t1" />
         <label htmlFor="t2">Имя</label>
          <input id="t2" type="email" name="t2" />
          <label htmlFor="t3">Телефон</label>
          <input id="t3" type="text" name="t3" />
         
           {/* <legend id="rad-q">Radio Button Group</legend>  */}
          <div className="radgroup" role="radiogroup" aria-labelledby="rad-q">
          <input id="r1" type="radio" name="r"  />
          <label htmlFor="r1">Аватар</label>
          <input id="r2" type="radio" name="r" />
          <label htmlFor="r2">Галактика</label>
         </div>

<div className="radgroup_2" role="radiogroup" aria-labelledby="rad-q">
          {/* <legend id="cb-q">Checkbox Button Group</legend> */}
          <input id="r1" type="radio" name="r" />
          <label htmlFor="r1">Мужской</label>
          <input id="r2" type="radio" name="r" />
          <label htmlFor="r2">Женский</label>
          
        </div> 


          <div className="btngroup" aria-labelledby="btn-q">
          {/* <legend id="btn-q">Action Buttons</legend> */}
          <input id="b3" className="btn cncl" type="button" value="Ввод" />
        </div>
        </fieldset>
        
        
        
        </form>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className='search'>
          <legend id="txt-q">Поиск</legend>
        <fieldset className="textgroup" aria-labelledby="txt-q">
        <div className="radgroup2" role="radiogroup" aria-labelledby="rad-q">
          
          <input id="r3" type="radio" name="r"  />
          <label htmlFor="r1">Аватар</label>
          <input id="r2" type="radio" name="r" />
          <label htmlFor="r2">Галактика</label>
         </div>

         <div className="radgroup_3" role="radiogroup" aria-labelledby="rad-q">
         
          <input id="r1" type="radio" name="r" />
          <label htmlFor="r1">Мужской</label>
          <input id="r2" type="radio" name="r" />
          <label htmlFor="r2">Женский</label>
          
        </div> 
        <div className="btngroup" aria-labelledby="btn-q">
          <legend id="btn-q">Action Buttons</legend>
          <input id="b4" className="btn cncl" type="button" value="Ввод" />
        </div>
         </fieldset>
         </div>
        </form>
    </>
  )}
   
      
     

  



