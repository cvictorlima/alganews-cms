import { mdiDelete, mdiUpload } from '@mdi/js'
import Icon from '@mdi/react'
import { ChangeEvent, useState } from 'react'
import FileService from '../../../sdk/services/File.service'
import Button from '../Button/Button'
import * as IU from './ImageUpload.styles'
export interface ImageUploadProps {
  label: string
  onImageUpload: (imageUrl:string) => any
}

function ImageUpload (props:ImageUploadProps) {

  const [filePreview, setFilePreview] = useState<string | null>(null)

  function handleChange (e:ChangeEvent<HTMLInputElement>) {
    const file = e.target.files![0]

    if (file) {
      const reader = new FileReader ()

      reader.addEventListener('load', async e=> {
        setFilePreview(String(e.target?.result));
        const imageUrl = await FileService.upload(file)
        props.onImageUpload(imageUrl)
      })

      reader.readAsDataURL(file)

    }

  }

  if (filePreview) 
    return <IU.ImagePreviewWrapper>
      <IU.ImagePreview preview = {filePreview}>
        <Button 
          variant= {'primary'} 
          onClick={()=> {
            setFilePreview(null);
            props.onImageUpload('')
          }}
          label= {<IU.ButtonLabel className= {'label'}>Remover imagem 
              <Icon 
                path= {mdiDelete}
                size= {'24px'}
                color={'#274060'}
              />
            </IU.ButtonLabel>} 
        />
      </IU.ImagePreview>
    </IU.ImagePreviewWrapper>

  return <IU.Wrapper>
    <IU.Label>
      <Icon 
        path= {mdiUpload}
        size= {'24px'}
        color= {'#fff'}
      />
      {props.label}
      <IU.Input 
        type= 'file'
        onChange={handleChange}
      />
    </IU.Label>
  </IU.Wrapper>
}

export default ImageUpload