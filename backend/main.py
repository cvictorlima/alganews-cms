from typing import List
from fastapi import FastAPI, status, HTTPException, Depends
from sqlalchemy.orm import Session

from . import schemas, models
from .database import Base, engine, SessionLocal

app = FastAPI()

Base.metadata.create_all(bind=engine)

def get_conn():
  conn = SessionLocal()
  try:
    yield conn
  finally:
    conn.close()

@app.post('/editors', status_code=status.HTTP_201_CREATED)
def create_editor (request: List[schemas.EditorsBase],conn: Session = Depends(get_conn)):
  for edt in request:
    editor = models.Editor(name=edt.name, cidade=edt.cidade, estado=edt.estado, email= edt.email, nascimento=edt.nascimento, preview=edt.preview, description=edt.description)
    conn.add(editor)
    conn.commit()
    conn.refresh(editor)
    for skill in edt.skills:
      skill_cadastrada = conn.query(models.Skills).filter(models.Skills.skill_name == skill.skill_name).first()
      if skill_cadastrada:
        # skills_id.append((skill_cadastrada.id, skill.level))
        skill_id = skill_cadastrada.id
      else:
        new_skill = models.Skills(skill_name = skill.skill_name)
        conn.add(new_skill)
        conn.commit()
        conn.refresh(new_skill)
        skill_id = new_skill.id
      user_skills = models.UserSkills(editor_id=editor.id, skill_id=skill_id, level=skill.level)
      conn.add(user_skills)
      conn.commit()
      conn.refresh(user_skills)

@app.get('/editors')
def all(conn: Session = Depends(get_conn)):
  editor = conn.query(models.Editor).first() 
  skills = conn.query(models.UserSkills).filter(models.UserSkills.editor_id == editor.id).all()
  # import ipdb; ipdb.set_trace()
  return editor, {"skills" : skills}

# @app.post('/teste', status_code=status.HTTP_201_CREATED)
# def create(request: schemas.Teste, conn: Session = Depends(get_conn)):
#   new_test = models.Teste(name=request.name, description = request.description)
#   conn.add(new_test)
#   conn.commit()
#   conn.refresh(new_test)
#   return new_test

# @app.get('/test')
# def all(conn: Session = Depends(get_conn)):
#   testes = conn.query(models.Teste).all()
#   return testes

# @app.get('/test/{id}')
# def user(id,conn: Session = Depends(get_conn)):
#   user = conn.query(models.Teste).filter(models.Teste.id == id).first()
#   return user

# @app.delete ('/teste/{id}', status_code=status.HTTP_204_NO_CONTENT)
# def destroy (id, conn: Session = Depends(get_conn)):
#   target = conn.query(models.Teste).filter(models.Teste.id == id)
#   target.delete(synchronize_session=False)
#   conn.commit()
#   return 'done'

# @app.put('/test/{id}', status_code=status.HTTP_200_OK )
# def update (id, conn: Session = Depends(get_conn)):
  

#'id': 1,
#'name': 'Cláudio Victor',
#'cidade': 'Fortaleza',
#'estado': 'Ceará',
#'celular': '+55 85 99999-9999',
#'email': 'victorlima@xilito.com',
#'nascimento': '6 de fevereiro de 1992',
#'preview': 'Frontend Developer',
#'skills': [
#  {
#     'skill': 'Python',
#     'level': 70
#  },
#  {
#     'skill': 'Python',
#     'level': 70
#  },
#  {
#     'skill': 'Python',
#     'level': 70
#  },
#],
#'description': 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt non veritatis odit atque soluta, corporis aut dolores, rem vero nulla quos, minus id adipisci. At consectetur sapiente ab aliquam beatae.',
