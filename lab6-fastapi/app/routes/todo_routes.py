from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from .. import models, schemas, database, auth

router = APIRouter(tags=["Todos"], prefix="/todos")

@router.post("/", response_model=schemas.TodoOut)
def create_todo(todo: schemas.TodoCreate, db: Session = Depends(database.get_db),
                current_user: models.User = Depends(auth.get_current_user)):
    new_todo = models.Todo(title=todo.title, owner=current_user)
    db.add(new_todo)
    db.commit()
    db.refresh(new_todo)
    return new_todo

@router.get("/", response_model=list[schemas.TodoOut])
def get_todos(db: Session = Depends(database.get_db),
              current_user: models.User = Depends(auth.get_current_user)):
    return db.query(models.Todo).filter(models.Todo.user_id == current_user.id).all()