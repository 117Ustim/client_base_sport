import './listTraining.scss';

export default function ListTraining(props) {
return (
<div className='list-training'>
{props.textModal?.map((text,index)=> {
  return(
    <h5 key={index}>{text.primaryText} {text.secondaryText}</h5>
  )
})}
 </div>
);
}