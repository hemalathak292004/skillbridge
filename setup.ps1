# SkillBridge Setup Script
# This script helps set up the project after cloning from GitHub

Write-Host "🚀 Setting up SkillBridge project..." -ForegroundColor Green

# Check if Node.js is installed
try {
    $nodeVersion = node --version
    Write-Host "✅ Node.js found: $nodeVersion" -ForegroundColor Green
} catch {
    Write-Host "❌ Node.js is not installed. Please install Node.js first." -ForegroundColor Red
    exit 1
}

# Check if MongoDB is running
try {
    $mongoStatus = Get-Service -Name "MongoDB" -ErrorAction SilentlyContinue
    if ($mongoStatus -and $mongoStatus.Status -eq "Running") {
        Write-Host "✅ MongoDB is running" -ForegroundColor Green
    } else {
        Write-Host "⚠️  MongoDB is not running. Please start MongoDB first." -ForegroundColor Yellow
        Write-Host "   Windows: net start MongoDB" -ForegroundColor Yellow
        Write-Host "   Or start manually: mongod" -ForegroundColor Yellow
    }
} catch {
    Write-Host "⚠️  Could not check MongoDB status. Please ensure MongoDB is running." -ForegroundColor Yellow
}

# Setup Backend
Write-Host "📦 Setting up backend..." -ForegroundColor Blue
Set-Location "skillbridge-backend"

# Install dependencies
Write-Host "Installing backend dependencies..." -ForegroundColor Yellow
npm install

# Create .env file if it doesn't exist
if (-not (Test-Path ".env")) {
    Write-Host "Creating .env file..." -ForegroundColor Yellow
    @"
PORT=5000
MONGO_URI=mongodb://localhost:27017/skillbridge
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
"@ | Out-File -FilePath .env -Encoding utf8
    Write-Host "✅ .env file created" -ForegroundColor Green
} else {
    Write-Host "✅ .env file already exists" -ForegroundColor Green
}

# Setup Frontend
Write-Host "📦 Setting up frontend..." -ForegroundColor Blue
Set-Location "../skillbridge-frontend"

# Install dependencies
Write-Host "Installing frontend dependencies..." -ForegroundColor Yellow
npm install

Write-Host "✅ Setup complete!" -ForegroundColor Green
Write-Host ""
Write-Host "🚀 To start the project:" -ForegroundColor Cyan
Write-Host "1. Start backend: cd skillbridge-backend && npm start" -ForegroundColor White
Write-Host "2. Start frontend: cd skillbridge-frontend && npm run dev" -ForegroundColor White
Write-Host "3. Open http://localhost:5173 in your browser" -ForegroundColor White
Write-Host ""
Write-Host "📚 For detailed instructions, see README.md" -ForegroundColor Cyan
