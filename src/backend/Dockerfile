FROM python:3.10-slim

WORKDIR /app

# 1) Instala deps
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# 2) Copia todo el back
COPY . .

# 3) Arranca uvicorn apuntando a app.main
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000", "--reload"]
