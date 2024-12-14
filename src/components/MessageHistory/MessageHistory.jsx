import Response from '../Response/Response';
import Message from '../Message/Message';
import Typing from '../Typing/Typing';

function MessageHistory({ list }) {
   return (
      <ul>
         {list.map((i) =>
            i.type === 'response' ? (
               <Response props={i} key={i.id} />
            ) : i.type === 'message' ? (
               <Message props={i} key={i.id} />
            ) : (
               <Typing props={i} key={i.id} />
            )
         )}
      </ul>
   );
}

export default MessageHistory;
