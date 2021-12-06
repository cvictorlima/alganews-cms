from sqlalchemy import Boolean, Column, ForeignKey, Integer, String
from sqlalchemy.orm import relationship

from .database import Base

class Editor(Base):
  __tablename__ = "editors"
  id = Column(Integer, primary_key= True, index= True)
  name = Column(String(255), index= True)
  cidade = Column (String(255))
  estado = Column (String(255))
  email = Column(String(255), unique= True, index=True)
  nascimento = Column (String(255))
  preview = Column (String(255))
  description = Column (String(255))
  skills = relationship ('Skills', back_populates='editors', secondary='editor_skills' )


class Skills(Base):
  __tablename__ = "skills"
  id = Column (Integer, primary_key= True)
  skill_name = Column (String(255), unique= True, nullable= False)
  editors = relationship('Editor', back_populates='skills', secondary= 'editor_skills')

class UserSkills(Base):
  __tablename__ = "editor_skills"
  editor_id = Column (Integer, ForeignKey("editors.id"), primary_key= True)
  skill_id = Column (Integer, ForeignKey("skills.id"), primary_key= True)
  level = Column (Integer, nullable= False)
  
