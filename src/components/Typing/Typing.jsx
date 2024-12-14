function Typing({ props }) {
   return (
      <li>
         <div className='message-data'>
            <span className='message-data-name'>
               <i className='fa fa-circle online'></i>
               {props.name}
            </span>
            <span className='message-data-time'>{props.time}</span>
         </div>
         <i className='fa fa-circle online'></i>
         <i className='fa fa-circle online' style={{ color: '#AED2A6' }}></i>
         <i className='fa fa-circle online' style={{ color: '#DAE9DA' }}></i>
      </li>
   );
}

export default Typing;
