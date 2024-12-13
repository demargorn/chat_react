import MessageHistory from '../MessageHistory/MessageHistory';

function Chat({ list }) {
   return (
      <div className='chat'>
         <div className='chat-history'>
            <MessageHistory list={list} />            
         </div>
      </div>
   );
}

export default Chat;
