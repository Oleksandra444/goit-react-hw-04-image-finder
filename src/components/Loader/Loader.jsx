import { Hourglass } from 'react-loader-spinner';
import css from '../styles.module.css';


export const Loader = () => { 
    return (
        <div className = {css.loaderWrapper}>
    <Hourglass
  visible={true}
  height="40"
  width="40"
  ariaLabel="hourglass-loading"
  wrapperStyle={{}}
  wrapperClass=""
                colors={['#306cce', '#72a1ed']} />
        </div>
)

}