import React from 'react';
import "../alert.css"

export default function Alert(props) {
    let capitalize = (word)=>{
        let lower =word.toLowerCase();
        return (lower.charAt(0).toUpperCase() + lower.slice(1));
    }
  return (
    <div  className="alertBox">
{props.alert && <div class={`alert alert-${props.alert.type} alert-dismissible fade show role="alert" `}>
  {capitalize(props.alert.type)}:{props.alert.msg}
</div>}
</div>
  );
}
