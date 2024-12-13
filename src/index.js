import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import Chat from './components/Chat/Chat';
import './styles.css';

const messages = [
   {
      id: 'chat-5-1001',
      from: { name: 'Ольга' },
      type: 'response',
      time: '10:10',
      text: 'Привет, Виктор. Как дела? Как идет работа над проектом?',
   },
   {
      id: 'chat-5-1002',
      from: { name: 'Виктор' },
      type: 'message',
      time: '10:12',
      text: 'Привет. Давай сегодня созвонимся. Проект практически готов, и у меня есть что показать.',
   },
];

ReactDOM.createRoot(document.getElementById('root')).render(
   <StrictMode>
      <Chat list={messages} />
   </StrictMode>
);
