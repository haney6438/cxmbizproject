import { useNavigate } from 'react-router-dom';

import { IoIosArrowBack } from "react-icons/io";

export default function BackBar() {
    const navigate = useNavigate();
    const onClickBtn = () => {
      navigate(-1); // 바로 이전 페이지로 이동
    };
    return (
        
      <div
        style={{
            backgroundColor:'black',
            width: '100vw',
            height: '6vh',
            alignContent:'center',
        }}
      >
    <IoIosArrowBack size={24} color='white' style={{marginLeft:10}} onClick={onClickBtn}></ IoIosArrowBack>
    </div>
    );
}
