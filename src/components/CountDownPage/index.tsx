
import './index.css';

import { format } from 'date-fns'
import { es } from 'date-fns/locale/es';
import { CountDown } from '../CountDown';


interface CountDownPageProps {
  weddingDate: string;
}

export const CountDownPage = ({ weddingDate }: CountDownPageProps) => {

  const dateEvent = new Date(weddingDate);

  const formatWeddingDate = format(weddingDate, 'cccc dd \'de\' MMMM \'del\' yyyy', { locale: es })

  return (
    <section className="container">
      <p className='date-event-title'>{formatWeddingDate}</p>
      <div><CountDown initialDate={dateEvent} /></div>
      <div></div>
    </section>
  );
};