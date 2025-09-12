# 🚀 Quick Setup Guide

## The Problem You Had
When you cloned the project from GitHub, you got these errors:
- `⚠️ MongoDB URI not found, running without database`
- `MongooseError: Operation users.findOne() buffering timed out`

This happened because the `.env` file (which contains sensitive configuration) was not included in the GitHub repository for security reasons.

## ✅ What I Fixed

1. **Created `.env` file** - Contains the necessary environment variables
2. **Created `.env.example`** - Template file for future clones
3. **Updated `.gitignore`** - Ensures `.env` files are never committed to Git
4. **Created comprehensive README.md** - Detailed setup instructions
5. **Created setup scripts** - Automated setup process

## 🚀 How to Use This Fixed Project

### Option 1: Quick Setup (Recommended)
```bash
# Run the setup script
./setup.bat
# or
powershell -ExecutionPolicy Bypass -File setup.ps1
```

### Option 2: Manual Setup
```bash
# 1. Install dependencies
cd skillbridge-backend
npm install

cd ../skillbridge-frontend
npm install

# 2. Create .env file (already done for you)
# The .env file is already created with correct values

# 3. Start the servers
cd skillbridge-backend
npm start

# In another terminal:
cd skillbridge-frontend
npm run dev
```

## 🔧 What's in the .env file
```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/skillbridge
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
```

## 📁 Files I Created/Updated

- ✅ `.env` - Environment variables (not in Git)
- ✅ `.env.example` - Template for future clones
- ✅ `.gitignore` - Excludes sensitive files from Git
- ✅ `README.md` - Comprehensive documentation
- ✅ `setup.ps1` - PowerShell setup script
- ✅ `setup.bat` - Windows batch file
- ✅ `package.json` - Root package.json for easy management

## 🎯 Next Steps

1. **Test the project** - Make sure everything works
2. **Commit these changes** to your GitHub repository:
   ```bash
   git add .
   git commit -m "Add setup files and documentation"
   git push origin main
   ```

3. **Future clones** will now work perfectly with the setup instructions

## 🆘 If You Still Get Errors

1. **MongoDB not running**: Start MongoDB service
2. **Port in use**: Kill existing Node processes
3. **Missing dependencies**: Run `npm install` in both directories

The project should now work perfectly for anyone who clones it from GitHub! 🎉
