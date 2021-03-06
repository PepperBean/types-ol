const fs = require('fs-extra');
const path = require('path');
const childProcess = require('child_process');

const srcPath = path.resolve(__dirname, '@types', 'ol');
const destPath = path.resolve(__dirname, 'ol');

console.log('# Preparing definitions before publishing to npmjs.org');

// Clean
console.log('# Cleaning output directory');
fs.removeSync(destPath);

// Build
console.log('# Rebuilding definitions');
childProcess.execSync('npm run build', { stdio: 'inherit' });
console.log('# Formatting definitions');
childProcess.execSync('npm run format', { stdio: 'inherit' });

// Lint
console.log('# Linting definitions');
childProcess.execSync('npm run lint', { stdio: 'inherit' });

// Test
console.log('# Testing definitions');
childProcess.execSync('npm run lint-test && npm run test', { stdio: 'inherit' });

// Copy
console.log('# Emitting definitions to output directory');
fs.copySync(srcPath, destPath);

// Add package.json
console.log('# Copying package.json');
const packageJsonPath = path.resolve(__dirname, 'package.json');
const packageJsonDestPath = path.join(destPath, 'package.json');

const src = require(packageJsonPath);
delete src.scripts;
delete src.devDependencies;
delete src.files;

fs.writeFileSync(packageJsonDestPath, JSON.stringify(src, null, 4));

console.log('# DONE');
