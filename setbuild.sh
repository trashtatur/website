#!/usr/bin/env bash
cd src;
find . -name '*.hbs' -not -path "*/*/*/node_modules/**" -type f -exec cp --parents {} ../build \;
find . -name '*.css' -not -path "*/*/*/node_modules/**" -type f -exec cp --parents {} ../build \;
find */*/* -maxdepth 1 -type d -name node_modules -exec ln -s ../../../../src/{} ../build/{} \;
