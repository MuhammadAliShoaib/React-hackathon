import * as React from 'react';

function SMInput(props) {

  const {label,id,value,placeholder,type,action,divClass,inputClass} = props;

  return (
    <>
      <div className={divClass}>
        {
          label?  <label id={id}>{label}</label> : null
        }
        <input onChange={(e) => { action(e.target.value) }} className={inputClass}
          value={value} type={type} placeholder={placeholder} />
      </div>
    </>
  );
}
export default SMInput;
