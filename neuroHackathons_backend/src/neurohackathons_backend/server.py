from fastapi import FastAPI
import requests
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv
from  neurohackathons_backend.get_hackathon import get_hackathons_for_queries
load_dotenv() 
import os
app = FastAPI() 

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]         
)

@app.get("/")
async def root():
    return {"message": "Neural Hackathons Backend is running!"}

@app.get("/health")
async def health():
    return {"status": "healthy"}

@app.get("/get/all/hackathons")
async def get_all_hackathons():
    print("Fetching hackathons...")
    hackathons = get_hackathons_for_queries()
    for i in hackathons:
        print(i)
    return {"hackathons": hackathons}                   