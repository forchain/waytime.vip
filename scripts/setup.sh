#!/bin/bash

# Waytime Luxury Travel Website Setup Script

echo "🚀 Setting up Waytime Luxury Travel Website..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18.x or later."
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo "❌ Node.js version 18.x or later is required. Current version: $(node -v)"
    exit 1
fi

echo "✅ Node.js version: $(node -v)"

# Check if PNPM is installed
if ! command -v pnpm &> /dev/null; then
    echo "📦 Installing PNPM..."
    npm install -g pnpm
fi

echo "✅ PNPM version: $(pnpm --version)"

# Install dependencies
echo "📦 Installing project dependencies..."
pnpm install

# Create .env file if it doesn't exist
if [ ! -f .env ]; then
    echo "📝 Creating .env file..."
    cat > .env << EOF
# Environment variables for Waytime website
NODE_ENV=development
PUBLIC_SITE_URL=http://localhost:3000
EOF
fi

echo "✅ Setup complete!"
echo ""
echo "🎉 To start development:"
echo "   pnpm dev"
echo ""
echo "🌐 Open http://localhost:3000 in your browser"
echo ""
echo "📚 For more information, see README.md" 