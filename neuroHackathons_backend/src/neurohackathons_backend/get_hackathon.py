import json

from fastapi import FastAPI
import requests
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv
from neurohackathons_backend.hackathon_struture_creator import extract_hackathons
import asyncio
load_dotenv() 
import os
def get_hackathons(query):
        serper_api = os.environ.get("serper_api_key")
        if not serper_api:
            return {"error": "Serper API key is not set in environment variables."}
        headers = {
            "X-API-KEY": serper_api,
            "Content-Type": "application/json"
        }
        url = "https://google.serper.dev/search"

        payload = {
        "q": query,
        "gl": "in",
        "page": 3
        }
        response = requests.request("POST", url, headers=headers, json=payload)
        return response.json()

def get_hackathons_for_queries():
    queries = [
                'site:devpost.com/hackathons',
                'site:devpost.com/hackathons',
                'site:unstop.com/hackathons AI',
                'site:hackerearth.com',
                '"AI hackathon" "2026"',
                '"ML hackathon" "2026"',
            ]
    total = []
    for query in queries:
        content = get_hackathons(query)       
        total.append(content)
    print("Total search results fetched:", len(total))
    hackathon_list = extract_hackathons(total)
    hackathon_list = json.loads(hackathon_list)
    return hackathon_list
