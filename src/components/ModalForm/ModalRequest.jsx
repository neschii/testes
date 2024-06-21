
import './ModalRequest.css';


const BUTTON_STYLE = {
  position: 'absolute', // Change to absolute
  top: '10px', // Adjust top position as needed
  right: '10px', // Adjust left position as needed
  border: 'none', // No border
  cursor: 'pointer', // Pointer cursor on hover
  borderRadius: '8px', 
  backgroundColor: '#3b3b3b',
  width: '25px',
  height: '25px',
};


export default function ModalRequest({isOpen, children, setModalOpen}) {

if(isOpen) { 
 return ( 
    <div className="bg-modal">  
      <div className="modal-style">
       <button 
        onClick={() => setModalOpen()}
        style={BUTTON_STYLE}
        aria-label="Fechar"
        >
          <span aria-hidden="true">&times;</span>
        </button>

      <div>{children}</div>
      </div>
</div>
)
 
}

return null
}