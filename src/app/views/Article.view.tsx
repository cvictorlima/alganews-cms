import usePageTitle from "../../core/hooks/usePageTitle"
import DefaultLayout from "../layouts/Default/Default.layout"

export default function Article () {

  usePageTitle('Artigo')

  return <DefaultLayout>
    <h1>Artigo</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium optio aut illum tempore rerum at in, beatae, quam ut laudantium inventore deleniti aspernatur eos soluta odit enim doloribus veritatis corrupti? Aliquam fuga sapiente dicta reprehenderit voluptatibus, in quos cum numquam. Quam at fugiat minima corporis rem laborum deleniti maiores nihil.</p>
  </DefaultLayout>
}
