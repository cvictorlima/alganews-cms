from os import name
from pydantic import BaseModel
from typing import ( List, Optional)

class UserSkills(BaseModel):
  skill_name :str
  level: int
  
  class Config:
    orm_mode=True
    

class EditorsBase(BaseModel):
  name: str
  cidade: str
  estado: str
  email: str
  nascimento: str
  preview: Optional[str] = None
  description: Optional[str] = None
  skills: List[UserSkills] = []
  

class Editor (EditorsBase):
  id:int
  
  class Config:
    orm_mode=True