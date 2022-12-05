import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';
import { save } from './redux/todoreducer';

function Modalcomponent({flag , setflag}) {
  const dispatch= useDispatch();
  var inputTask;
  const functionInvokedOnSaveButton=()=>{
    dispatch(save(inputTask))
    setflag(false)
  }
  return (
    <Modal
      show={flag}
      onHide={()=>setflag(false)}
     >
      <Modal.Header closeButton>
        <Modal.Title>Add Your Task</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <input type="text" value={inputTask} onChange={(e)=>inputTask=e.target.value}/>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={()=>setflag(false)}>Close</Button>
        <Button variant="primary" onClick={functionInvokedOnSaveButton}>Save</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Modalcomponent;