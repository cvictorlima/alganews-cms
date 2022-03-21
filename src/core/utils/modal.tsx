import { confirmAlert } from "react-confirm-alert";
import 'react-confirm-alert/src/react-confirm-alert.css';

interface ModalProps {
  children: React.ReactNode
}

export default function modal (props:ModalProps) {
  confirmAlert({
    overlayClassName: 'modal-overlay',
    customUI: () => {
      return props.children
    }
  })
}