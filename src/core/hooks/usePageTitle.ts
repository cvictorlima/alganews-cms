import { useEffect } from 'react';
export default function usePageTitle (title: string) {
  useEffect(()=> {
    const BASE_TITLE = 'AlgaNews'
    document.title = ` ${BASE_TITLE} - ${title} `
  }, []) //eslint-disable-line
}