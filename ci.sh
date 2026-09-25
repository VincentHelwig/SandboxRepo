#!/bin/sh
# Sandbox CI: red while the stub's BROKEN file exists (see stubs/claude.ts).
if [ -f BROKEN ]; then echo "BROKEN: $(cat BROKEN)"; exit 1; fi
node --test || exit 1
echo "ok"
