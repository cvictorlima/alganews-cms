import { confirmAlert } from 'react-confirm-alert'
import 'react-confirm-alert/src/react-confirm-alert.css';
import Confirm from '../../app/components/Confirm/Confirm'


interface ConfirmProps {
  onConfirm?: (...args: any[]) => any
  onCancel?: (...args: any[]) => any
  title: string
}

export default function confirm(props: ConfirmProps) {
  confirmAlert({
    closeOnEscape: true,

    overlayClassName: 'confirm-overlay',
    customUI: ({ onClose }) => {
      return (
        <Confirm
          question={props.title}
          onConfirm={() => {
            if (props.onConfirm)
              props.onConfirm()
            onClose()
          }}
          onCancel={() => {
            if (props.onCancel)
              props.onCancel()
            onClose()
          }}
        />
      );
    }
  });
}