import {useState} from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';

const ContactForm = () => {
    const {register, handleSubmit, formState: { errors }, reset} = useForm();
    const [requestStatus, setRequestStatus] = useState('default');

    const onSubmit = async data => {
        try{
            setRequestStatus('loading');
            await  axios.post('http://localhost:5001/api/request', data);
            setRequestStatus('success')
        }
        catch{
            setRequestStatus('error');
        }
        setTimeout(() => setRequestStatus('default'), 1500);
        reset();
    }
   
    const phoneMask = (e) => {
        let input = e.target;
        if ((e.charCode < 47 || e.charCode > 57)) {
            e.preventDefault();
        }
        if (input.value[0]!=='+') {
            input.value = '+7'+input.value
        }
        // +7 (777) 777 7777
        if(input.value[2]!==' '){
            input.value = input.value.slice(0,2) + ' ' + input.value.slice(2)
        }
        if(input.value[3]!=='('){
            input.value = input.value.slice(0,3) + '(' + input.value.slice(3)
        }
        if(input.value[7] && input.value[7]!==')'){
            input.value = input.value.slice(0,7) + ') ' + input.value.slice(7)
        }
        if(input.value[12] && input.value[12]!==' '){
            input.value = input.value.slice(0,12) + ' ' + input.value.slice(12)
        }
    }
      
    if(requestStatus==='success'){
        return <div>Данные успешно отправлены, ожидайте звонок нашего менеджера!</div>
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h1 className="textHi">Привет!</h1>
            <p className="textSay">Скажи нам что-то</p>
            <p className="myName">Меня зовут</p>
            <input placeholder="Имя" {...register('name', {required: true})}/>
            {errors.name && errors.name.type === 'required' && <p style={{color: "red", fontSize: "12px"}}>Это поле обязательно</p>}
            <p className="myNumber">Телефон</p>
            <input placeholder="+7"  onKeyPress={phoneMask} {...register('phone', {required: true, minLength: 17, maxLength: 17})}  maxLength="17"/>
            {errors.phone && errors.phone.type === 'required' && <p style={{color: "red", fontSize: "12px"}}>Это поле обязательно</p>}
            {errors.phone && errors.phone.type !== 'required' && <p style={{color: "red", fontSize: "12px"}}>Введите до конца</p>}
            {requestStatus==='error' && <p style={{color: "red", fontSize: "12px", marginTop: "30px", marginBottom: "-25px"}}>Произошла ошибка попробуйте позднее</p>}
            <div>
                <button className="sendButton" >Отправить</button>
            </div>
        </form>
    )
}

export default ContactForm;