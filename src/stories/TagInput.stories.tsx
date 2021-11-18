import { Story, Meta } from '@storybook/react';
import { useState } from 'react';
import { Tag } from 'react-tag-input';
import TagInput, {TagInputProps} from '../app/components/TagInput/Index'

export default {
  title: 'Example/TagInput',
  component: TagInput,
} as Meta;

const Template: Story<TagInputProps> = (args) => <TagInput {...args} />;

export const Default = Template.bind({})
Default.args = {
  tags:[{id: '1', text: 'javascript'}],
  placeholder: 'Insira as tags deste post'
}

export const VariousTags = Template.bind({})
VariousTags.args = {
  placeholder: 'Insira as tags deste post',
  tags:[
    {id: '1', text: 'javascript'},
    {id: '2', text: 'Python'},
    {id: '3', text: 'CSS'},
    {id: '4', text: 'TypeScript'},
    {id: '5', text: 'C'},
    {id: '6', text: 'Java'},
    {id: '7', text: 'HTML'},
    {id: '8', text: 'jQuery'},
  ],
}

export function WorkingLiveExample () {
  const [tags, setTags] = useState<Tag[]>([])
  
  return <TagInput 
    placeholder = 'Insira as tags deste post'
    tags={tags}
    onAdd = {tag => setTags([...tags, tag])}
    onDelete = {index => setTags(tags.filter((tag, i)=> i !== index ))}
  />


}