import { useState } from "react";
import './ModalForm.css';
import ModalRequest from './ModalRequest'


function HomePage() {
  
 const [email, setEmail] = useState("");
 const [firstName, setFirstName] = useState("");
 const [lastName, setLastName] = useState("");
 const [gender, setGender] = useState("");
 const [birthDate, setBirth] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
  };

const [cpfCnpj, setcpfCnpjValue] = useState("");
const handleCpfCnpjChange = (event) => {
  let data = event.target.value.replace(/\D/g, "");
  if (data.length > 11) {
    let cnpj = `${data.substr(0, 2)}.${data.substr(2,3)}.${data.substr(5,3)}/`;
    if (data.length > 12)
      cnpj += `${data.substr(8, 4)}-${data.substr(12, 2)}`;
    else 
      cnpj += data.substr(8);
    data = cnpj;
  } else {
    let cpf = "";
    let parts = Math.ceil(data.length / 3);
    for (let i = 0; i < parts; i++) {
      if (i === 3) {
        cpf += `-${data.substr(i * 3)}`;
        break;
      }
      cpf += `${i !== 0 ? "." : ""}${data.substr(i * 3, 3)}`;
    }
    data = cpf;
  }
  setcpfCnpjValue(data);
};


const [openModal, setOpenModal] = useState(false)
console.log('infos', cpfCnpj, firstName, lastName, email, birthDate, gender);

return (

<div> 
<button 
onClick={() => setOpenModal(true)}>
Abrir o modal
</button>
 <div className="modal-container"> 
<ModalRequest isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)}> 
        <div className="modal-header">
           <h1 className="modal-title">
                JOIN US!
          </h1> 
      </div>

    
<div className="input-group">    
     <form onSubmit={handleSubmit}>  

          <div className="input-box">
           <input 
              value={firstName}
              type="text" 
              onChange={(e) => setFirstName(e.target.value)}
              required
              placeholder="Nome"
            />
        
           </div>

          <div className="input-box">
        <input 
          value={lastName}
          type="text" 
          onChange={(e) => setLastName(e.target.value)}
          required
          placeholder="Sobrenome"
        /> 

      </div>
          
        <div className="input-box">
      <input 
            value={email}
            type="email" 
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Email"
        />

        </div>

          <div className="input-box">
       <input 
          value={cpfCnpj}
          onChange= {handleCpfCnpjChange}
          id="cpfCnpj"
          defaultValue={cpfCnpj}
          placeholder="Digite seu CPF" 
          required
        />

    

    </div> 

        <div className="text-box"> 
      <div className="input-box">
      <select value={gender} onChange={(e) => setGender(e.target.value)}>
        <option selected >Gênero</option>
        <option>FEMININO</option>
        <option>MASCULINO</option>
        <option>OUTRO </option>
        <option>PREFIRO NÃO RESPONDER</option>
      </select>

      </div>

      <div className="input-box"> 
        <input 
        id="date" type="date" value={birthDate} onChange={(e) => setBirth(e.target.value)} required
        /> 

      </div>   
    </div>

       <div class="continue-button">
        <button><a href="#">Continuar</a> </button> </div>
    </form>
</div>
   </ModalRequest>
 </div>
</div>

  )
}

export default HomePage
