import { useNavigate } from 'react-router-dom';


export const useLanding = () => {
    const navigate = useNavigate();

    return{navigate}
}