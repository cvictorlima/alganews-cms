from fastapi import FastAPI


app = FastAPI()

@app.get('/')
def index():
  return {'Editors' : [

  {
    'id': 1,
    'name': 'Cláudio Victor',
    'cidade': 'Fortaleza',
    'estado': 'Ceará',
    'celular': '+55 85 99999-9999',
    'email': 'victorlima@xilito.com',
    'nascimento': '6 de fevereiro de 1992',
    'preview': 'Frontend Developer',
    'skills': {
      'python': 70,
      'react': 50,
      'javascript': 60
    },
    'description': 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt non veritatis odit atque soluta, corporis aut dolores, rem vero nulla quos, minus id adipisci. At consectetur sapiente ab aliquam beatae.',

  },

  {
    'id': 2,
    'name': 'Luiza Marinho',
    'cidade': 'Fortaleza',
    'estado': 'Ceará',
    'celular': '+55 85 99999-9999',
    'email': 'luizamarinho@xilito.com',
    'nascimento': '6 de fevereiro de 1992',
    'preview': 'Editora',
    'skills': {
      'python': 70,
      'react': 50,
      'javascript': 60
    },
    'description': 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt non veritatis odit atque soluta, corporis aut dolores, rem vero nulla quos, minus id adipisci. At consectetur sapiente ab aliquam beatae.',
  },

  {
    'id': 3,
    'name': 'Rodrigo Parente',
    'cidade': 'Fortaleza',
    'estado': 'Ceará',
    'celular': '+55 85 99999-9999',
    'email': 'rodrigoparente@xilito.com',
    'nascimento': '6 de fevereiro de 1992',
    'preview': 'Backend Developer',
    'skills': {
      'python': 100,
      'C': 50,
      'javascript': 60
    },
    'description': 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt non veritatis odit atque soluta, corporis aut dolores, rem vero nulla quos, minus id adipisci. At consectetur sapiente ab aliquam beatae.',
  },

  {
    'id': 4,
    'name': 'Sayonara Santos',
    'cidade': 'Fortaleza',
    'estado': 'Ceará',
    'celular': '+55 85 99999-9999',
    'email': 'sayonarasantos@xilito.com',
    'nascimento': '6 de fevereiro de 1992',
    'preview': 'Frontend Developer',
    'skills': {
      'angular': 70,
      'docker': 90,
      'javascript': 70
    },
    'description': 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt non veritatis odit atque soluta, corporis aut dolores, rem vero nulla quos, minus id adipisci. At consectetur sapiente ab aliquam beatae.',
  },

  {
    'id': 5,
    'name': 'Logan',
    'cidade': 'Fortaleza',
    'estado': 'Ceará',
    'celular': '+55 85 99999-9999',
    'email': 'logan@xilito.com',
    'nascimento': '6 de fevereiro de 1992',
    'preview': 'Mascote',
    'skills': {
      'sentar': 90,
      'pata': 90,
      'falar': 80
    },
    'description': 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt non veritatis odit atque soluta, corporis aut dolores, rem vero nulla quos, minus id adipisci. At consectetur sapiente ab aliquam beatae.',
  },
]}