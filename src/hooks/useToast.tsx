import { useState, useEffect, useContext } from 'react';
import { toast, ToastOptions, ToastPosition  } from 'react-toastify';
export default function useToast() {
  return (title: string | any, type?: string, duration?: number, position?: ToastPosition) => {
    const options: ToastOptions = {
      position: position ? position : 'bottom-left',
      autoClose: duration ? duration : 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    };
    if (!type) {
      type = 'info';
    }
    switch (type) {
      case 'success':
        toast.success(title, options);
        break;
      case 'warning':
        options.autoClose = 20000
        toast.warning(title, options);
        break;
      case 'error':
        options.autoClose = 30000
        toast.error(title, options);
        break;
      default:
        toast.info(title, options);
        break;
    }
  };
}