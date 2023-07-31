import './Loader.module.css';
import { Circles } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <div className="loaderDiv">
      <Circles
        height="80"
        width="80"
        color="#003cb3"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};
export default Loader;
