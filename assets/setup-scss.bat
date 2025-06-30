@echo off
REM Create root folder
mkdir scss
cd scss

REM Create subfolders
mkdir abstract
mkdir globals
mkdir blocks
mkdir composition
mkdir utility

REM Create files in abstract
cd abstract
type nul > _breakpoints.scss
type nul > _functions.scss
(
    echo @forward "breakpoints";
    echo @forward "functions";
) > _index.scss
cd ..

REM Create files in globals
cd globals
type nul > _colors.scss
type nul > _fonts.scss
type nul > _resets.scss
type nul > _boilerplate.scss
(
    echo @forward "colors";
    echo @forward "fonts";
    echo @forward "resets";
    echo @forward "boilerplate";
) > _index.scss
cd ..

REM Create empty _index.scss for remaining folders
cd blocks
type nul > _index.scss
cd ..

cd composition
type nul > _index.scss
cd ..

cd utility
type nul > _index.scss
cd ..

REM Create main entry SCSS file
(
    echo @use "abstract";
    echo @use "globals";
    echo @use "blocks";
    echo @use "composition";
    echo @use "utility";
) > styles.scss

echo SCSS architecture setup complete! 🎉
pause
