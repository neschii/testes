import React, { useState } from 'react';
import './ModalForm.css';
import ModalRequest from './ModalRequest';

function HomePage() {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [birthDate, setBirth] = useState("");
  const [errors, setErrors] = useState({});
  const [cpfCnpj, setCpfCnpjValue] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [openModalSuccess, setOpenModalSuccess] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    
    const newErrors = {};
    const emailRegex = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

    if (!firstName) newErrors.firstName = 'Nome é obrigatório';
    if (!lastName) newErrors.lastName = 'Sobrenome é obrigatório';
    if (!email) {
      newErrors.email = 'Email é obrigatório';
    } else if (!emailRegex.test(email)) {
      newErrors.email = 'Insira um e-mail válido';
    }
    if (!cpfCnpj) newErrors.cpfCnpj = 'CPF/CNPJ é obrigatório';
    if (!gender) newErrors.gender = 'Gênero é obrigatório';
    if (!birthDate) newErrors.birthDate = 'Data de nascimento é obrigatória';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setOpenModal(false);
    setOpenModalSuccess(true);
  };

  const handleCpfCnpjChange = (event) => {
    let data = event.target.value.replace(/\D/g, "");
    if (data.length > 11) {
      let cnpj = `${data.substr(0, 2)}.${data.substr(2, 3)}.${data.substr(5, 3)}/${data.substr(8, 4)}-${data.substr(12, 2)}`;
      data = cnpj;
    } else {
      let cpf = `${data.substr(0, 3)}.${data.substr(3, 3)}.${data.substr(6, 3)}-${data.substr(9, 2)}`;
      data = cpf;
    }
    setCpfCnpjValue(data);
  };


console.log('nome:', firstName, 'sobrenome:', lastName, 'email:' ,email, 'CPF:', cpfCnpj, 'genero:', gender, 'aniversário', birthDate)
  return (
    <div className="form-body">
        <div className="join-content">
      <button className="join-btn"  onClick={() => setOpenModal(true)}>
        INSCREVA-SE
      </button> </div>
      <div className="modal-container">
        <ModalRequest isOpen={openModalSuccess} setModalOpen={() => setOpenModalSuccess(!openModalSuccess)}>
            <div className="modal-succes-container">
      <h2 className="modal-succes-title">ENVIADO</h2>
          </div>
        </ModalRequest>
        <ModalRequest isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)}>
          <div className="modal-header">
            <h1 className="modal-title">INSCREVA-SE</h1>
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
                {errors.firstName && <span>{errors.firstName}</span>}
              </div>
              <div className="input-box">
                <input
                  value={lastName}
                  type="text"
                  onChange={(e) => setLastName(e.target.value)}
                  required
                  placeholder="Sobrenome"
                />
                {errors.lastName && <span>{errors.lastName}</span>}
              </div>
              <div className="input-box">
                <input
                  autoComplete="off"
                  value={email}
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="Email"
                />
                {errors.email && <span>{errors.email}</span>}
              </div>
              <div className="input-box">
                <input
                  value={cpfCnpj}
                  onChange={handleCpfCnpjChange}
                  placeholder="Digite seu CPF/CNPJ"
                  required
                />
                {errors.cpfCnpj && <span>{errors.cpfCnpj}</span>}
              </div>
              <div className="text-box">
                <div className="input-box">
                  <select value={gender} onChange={(e) => setGender(e.target.value)} required>
                    <option value="" disabled>Gênero</option>
                    <option value="Feminino">Feminino</option>
                    <option value="Masculino">Masculino</option>
                    <option value="Outro">Outro</option>
                    <option value="PREFIRO NÃO RESPONDER">PREFIRO NÃO RESPONDER</option>
                  </select>
                  {errors.gender && <span>{errors.gender}</span>}
                </div>
                <div className="input-box">
                  <input
                    id="date"
                    type="date"
                    value={birthDate}
                    onChange={(e) => setBirth(e.target.value)}
                    required
                  />
                  {errors.birthDate && <span>{errors.birthDate}</span>}
                </div>
              </div>
              <div className="continue-button">
                <button type="submit">Continuar</button>
              </div>
            </form>
          </div>
        </ModalRequest>
      </div>
    </div>
  );
}

export default HomePage;
