const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm');
const root=path.resolve(__dirname,'../public');
let checked=0;
function local(ref,from){
 if(/^(?:[a-z][\w+.-]*:|\/\/|#)/i.test(ref)||!ref)return;
 ref=ref.split(/[?#]/)[0];if(!ref)return;
 let target=path.resolve(path.dirname(from),decodeURIComponent(ref));
 if(!path.extname(target))target+='.html';
 if(!fs.existsSync(target))throw Error('Missing local asset/link: '+ref+' in '+path.relative(root,from));
}
function walk(dir){for(const entry of fs.readdirSync(dir,{withFileTypes:true})){
 const file=path.join(dir,entry.name);if(entry.isDirectory()){walk(file);continue;}
 const ext=path.extname(file);if(!['.html','.css','.js'].includes(ext))continue;
 const source=fs.readFileSync(file,'utf8');
 if(ext==='.html'){
  for(const m of source.matchAll(/(?:src|href)="([^"]+)"/g))local(m[1],file);
  for(const m of source.matchAll(/<script\b[^>]*>([\s\S]*?)<\/script>/g))if(m[1].trim())new vm.Script(m[1],{filename:file});
 }
 if(ext==='.css')for(const m of source.matchAll(/url\(\s*['"]?([^)'"\s]+)['"]?\s*\)/g))local(m[1],file);
 if(ext==='.js')new vm.Script(source,{filename:file});
 checked++;
}}
walk(root);console.log('Validated local references and JavaScript syntax in '+checked+' source files.');
