import { File } from "../@Types/File";
import Service from "../Service";
import { v4 as uuid_v4 } from 'uuid'
class FileService extends Service {
  private static getSignedUrl (fileInfo: File.UploadRequestInput) {
    return this.Http
      .post<File.UploadRequest>('/upload-requests', fileInfo)
      .then(this.getData)
      .then(res => res.uploadSignedUrl)
  }

  private static uploadFileToSignedUrl (signedUrl: string, file: File) {
    return this.Http
      .put<{}>(signedUrl, file, {
        headers: {'Content-Type': file.type}
      })
      .then(this.getData)
  }

  private static getFileExtension (fileName: string) {
    const [extension] = fileName.split('.').slice(-1)
    return extension
  }

  private static generateFileName (extension: string) {
    return `${uuid_v4()}.${extension}`
  }

  static async upload (file: File) {
    const extension = this.getFileExtension(file.name);
    const fileName = this.generateFileName(extension)

    const signedUrl = await FileService.getSignedUrl({
      fileName,
      contentLength: file.size
    })

    await FileService
      .uploadFileToSignedUrl(signedUrl, file)

    return signedUrl.split('?')[0]
  } 
}

export default FileService
