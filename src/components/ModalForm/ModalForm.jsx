import React, { useState } from "react";
import "./ModalForm.css";
import ModalRequest from "./ModalRequest";

function HomePage() {
  // Estados para armazenar dados do formulário e controle de modais
  const [email, setEmail] = useState(""); // Estado para o email
  const [firstName, setFirstName] = useState(""); // Estado para o primeiro nome
  const [lastName, setLastName] = useState(""); // Estado para o sobrenome
  const [gender, setGender] = useState(""); // Estado para o gênero
  const [birthDate, setBirth] = useState(""); // Estado para a data de nascimento
  const [errors, setErrors] = useState({}); // Estado para erros de validação
  const [cpfCnpj, setCpfCnpjValue] = useState(""); // Estado para CPF/CNPJ
  const [openModal, setOpenModal] = useState(false); // Estado para controle do modal de inscrição
  const [openModalSuccess, setOpenModalSuccess] = useState(false); // Estado para controle do modal de sucesso

  // Função para lidar com o envio do formulário
  const handleSubmit = (event) => {
    event.preventDefault(); // Evita o envio padrão do formulário, que recarregaria a página

    const newErrors = {}; // Objeto para armazenar novos erros de validação
    const emailRegex =
      /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

    // Validando os campos do formulário
    if (!firstName) newErrors.firstName = "Nome é obrigatório"; // Verifica se o primeiro nome está preenchido
    if (!lastName) newErrors.lastName = "Sobrenome é obrigatório"; // Verifica se o sobrenome está preenchido
    if (!email) {
      newErrors.email = "Email é obrigatório"; // Verifica se o email está preenchido
    } else if (!emailRegex.test(email)) {
      newErrors.email = "Insira um e-mail válido"; // Verifica se o email possui um formato válido
    }
    if (!cpfCnpj) newErrors.cpfCnpj = "CPF/CNPJ é obrigatório"; // Verifica se o CPF/CNPJ está preenchido
    if (!gender) newErrors.gender = "Gênero é obrigatório"; // Verifica se o gênero está selecionado
    if (!birthDate) newErrors.birthDate = "Data de nascimento é obrigatória"; // Verifica se a data de nascimento está preenchida

    // Se houver erros de validação, atualiza o estado de erros e não prossegue com o envio do formulário
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors); // Define os novos erros
      return; // Retorna para interromper o fluxo
    }

    // Limpa os erros caso não haja nenhum erro
    setErrors({});

    // Fecha o modal de inscrição e abre o modal de sucesso
    setOpenModal(false);
    setOpenModalSuccess(true);
  };

  // Função para formatar CPF/CNPJ conforme o usuário digita
  const handleCpfCnpjChange = (event) => {
    let data = event.target.value.replace(/\D/g, ""); // Remove caracteres não numéricos do valor digitado

    // Formatação para CPF
    if (data.length <= 11) {
      let cpf = `${data.substr(0, 3)}.${data.substr(3, 3)}.${data.substr(
        6,
        3
      )}-${data.substr(9, 2)}`;
      data = cpf; 
    }
    // Formatação para CNPJ
    else {
      let cnpj = `${data.substr(0, 2)}.${data.substr(2, 3)}.${data.substr(
        5,
        3
      )}/${data.substr(8, 4)}-${data.substr(12, 2)}`;
      data = cnpj; 
    }

    setCpfCnpjValue(data); // Atualiza o estado com o valor formatado de CPF/CNPJ
  };

  // Estrutura do componente renderizado na página
  return (
    <div className="form-body">
      <div className="join-content">
        {/* Botão para abrir o modal de inscrição */}
        <button className="join-btn" onClick={() => setOpenModal(true)}>
          INSCREVA-SE
        </button>
      </div>
      <div className="modal-container">
        {/* Modal de sucesso */}
        <ModalRequest
          isOpen={openModalSuccess}
          setModalOpen={() => setOpenModalSuccess(!openModalSuccess)}
        >
          <div className="modal-success-container">
            <h2 className="modal-success-title">ENVIADO</h2>
          </div>
        </ModalRequest>

        {/* Modal de inscrição */}
        <ModalRequest
          isOpen={openModal}
          setModalOpen={() => setOpenModal(!openModal)}
        >
          <div className="modal-header">
            <h1 className="modal-title">INSCREVA-SE</h1>
          </div>
          <div className="input-group">
            {/* Formulário dentro do modal de inscrição */}
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
                  <select
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    required
                  >
                    <option value="" disabled>
                      Gênero
                    </option>
                    <option value="Feminino">Feminino</option>
                    <option value="Masculino">Masculino</option>
                    <option value="Outro">Outro</option>
                    <option value="Prefiro não responder">
                      Prefiro não responder
                    </option>
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
