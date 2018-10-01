#!/usr/bin/env bash

## Provides efficient linking to node_module folders in sub modules so no
## arbitrary installs are needed
## Also copies css and js files over to their build folder counterparts
cd src;
find . -name '*.hbs' -not -path "*/*/*/node_modules/**" -type f -exec cp --parents {} ../build \;
find . -name '*.css' -not -path "*/*/*/node_modules/**" -type f -exec cp --parents {} ../build \;
find */*/* -maxdepth 1 -type d -name node_modules -exec ln -sfT ../../../../src/{} ../build/{} \;
