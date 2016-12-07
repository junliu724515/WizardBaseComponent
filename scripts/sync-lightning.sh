#!/bin/bash
if [ ! -d "src/aura" ] 
then
    mkdir -p "src/aura" || exit 1
    echo "src/aura created"
else
    echo "src/aura folder found"
fi


if [ -d "metadata/aura" ]
then
    cp -R metadata/aura/ src/aura/ || exit 1
    echo "Files copied!"
else
	echo "Please refresh lightning metadata!"
fi