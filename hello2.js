#!/usr/bin/env node
var fs=require('fs');
var outfile="hello.txt";
var out="modify this script to write out something different. \n";
fs.writeFileSync(outfile,out);
console.log("script: "+__filename+"\nwrote: "+out+"to: "+outfile);
