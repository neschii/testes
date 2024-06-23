
import './ModalRequest.css';


const BUTTON_STYLE = {
  position: 'absolute', 
  top: '10px', 
  right: '10px', 
  border: 'none', 
  cursor: 'pointer',
  borderRadius: '8px', 
  backgroundColor: '#3b3b3b',
  width: '25px',
  height: '25px',
};


export default function ModalRequest({isOpen, children, setModalOpen}) {

if(isOpen) {  /* se esta aberto */
 return ( 
    <div className="bg-modal">  
      <div className="modal-style">
       <button 
        onClick={() => setModalOpen()} /* quando ser clickado ele vai ser fechado */
        style={BUTTON_STYLE}
        aria-label="Fechar" /* botão para fechar */
        >
          <span aria-hidden="true">&times;</span>
        </button>

      <div className="">{children}</div> /* aqui é o que permite ter o corpo do formulario */
      </div>
</div>
)
 
}

return null
}