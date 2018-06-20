#!/usr/bin/env bash

echo "Adding sym links to module directories"
cd "node_modules"
ln -s "../ven/ven_modules" "vm"
ln -s "../core/core_modules" "cm"
echo "Links added"