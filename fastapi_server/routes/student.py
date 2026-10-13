from fastapi import APIRouter

student_router = APIRouter(prefix="/student")


# localhost:8000/student/addStudent
@student_router.post("/addStudent")
def addStudent():
    return "add student method called"


# localhost:8000/student/getStudent
@student_router.get("/getStudent")
def getStudent():
    return "get student method called"


# localhost:8000/student/getStudent
@student_router.put("/updateStudent")
def updateStudent():
    return "update student method called"


