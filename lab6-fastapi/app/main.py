from fastapi import FastAPI
from .database import Base, engine
from .routes import user_routes, todo_routes

# Create tables
Base.metadata.create_all(bind=engine)

app = FastAPI(title="LAB6 Todo App")

# Include routes
app.include_router(user_routes.router)
app.include_router(todo_routes.router)