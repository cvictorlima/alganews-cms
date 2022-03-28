import { mdiDelete, mdiUpload } from '@mdi/js'
import Icon from '@mdi/react'
import { ChangeEvent, useEffect, useState } from 'react'
import FileService from '../../../sdk/services/File.service'
import Button from '../Button/Button'
import Loading from '../Loading'
import * as IU from './ImageUpload.styles'
export interface ImageUploadProps {
  label: string
  onImageUpload: (imageUrl: string) => any
  preview?: string
}

function ImageUpload(props: ImageUploadProps) {

  const [filePreview, setFilePreview] = useState<string | undefined>(undefined)
  const [awaitImg, setAwaitImg] = useState(false)

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files![0]

    if (file) {
      const reader = new FileReader()

      reader.addEventListener('load', async e => {
        try {
          setAwaitImg(true)
          setFilePreview(String(e.target?.result));
          const imageUrl = await FileService.upload(file)
          props.onImageUpload(imageUrl)
        } finally {
          setAwaitImg(false)
        }
      })

      reader.readAsDataURL(file)

    }

  }

  useEffect(() => {
    setFilePreview(props.preview)
  }, [props.preview])

  if (filePreview)
    return <IU.ImagePreviewWrapper>
      <Loading show={awaitImg} />
      <IU.ImagePreview preview={filePreview}>
        <Button
          variant={'primary'}
          onClick={() => {
            setFilePreview(undefined);
            props.onImageUpload('')
          }}
          label={<IU.ButtonLabel className={'label'}>Remover imagem
            <Icon
              path={mdiDelete}
              size={'24px'}
              color={'#274060'}
            />
          </IU.ButtonLabel>}
        />
      </IU.ImagePreview>
    </IU.ImagePreviewWrapper>

  return <IU.Wrapper>
    <Loading show={awaitImg} />
    <IU.Label>
      <Icon
        path={mdiUpload}
        size={'24px'}
        color={'#fff'}
      />
      {props.label}
      <IU.Input
        type='file'
        onChange={handleChange}
      />
    </IU.Label>
  </IU.Wrapper>
}

export default ImageUpload