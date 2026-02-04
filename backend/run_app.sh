# Start Backend in the background
cd backend
source ../.venv/bin/activate
uvicorn main:app --port 8000 & 
BACKEND_PID=$!

# start Frontend (Vite will open the browser automatically)
cd ..
npm run dev &
FRONTEND_PID=$!

# Handle closing: if I stop the script, it kills both servers
trap "kill $BACKEND_PID $FRONTEND_PID" EXIT
wait