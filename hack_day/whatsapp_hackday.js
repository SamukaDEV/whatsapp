/* 

Step by step to enable Whatsapp Desktop DevTools on Windows; node - i believe that stil the same to other OS's.

 1 - First extract the app.asar in "C:\Users\%USERNAME%\AppData\Local\WhatsApp\app-%VERSION%\resources\app.asar"
    and rename the original filename 

    $ npx asar extract app.asar app
    $ move app.asar _app.asar

    After that, the application will run directly from new app folder, without the asar file

 2 - Enable NodeIntegration to electron application in main.js, changing two lines form "nodeIntegration:!1" to "nodeIntegration:true"
    a quick string replace can solve that!

 3 - Catch the node instance from preload.js to index.html with a simple injection in preload.js:
    turn this: "use strict";var n=r(0),i=r(1),
    into this: "use strict";window.smk = r(1);var n=r(0),i=r(1),

    other simple string replace can solve!

 4 - Add smk script and update index.html
    replace: <script src="renderer.js"></script>
         to: <script src="renderer.js"></script><script src="smk.js"></script>

 5 - intersept WebSocket Packets
    on renderer.js 
    replace: t.openSocket=function(e){return new WebSocket(e)}
         to: t.openSocket=function(e){let nws = new WebSocket(e);window.smk.nws = nws;return nws}
*/
console.clear()
const fs = require('fs')
const spawn = require('child_process').spawn
const os = require('os')

const getDirectories = source =>
    fs.readdirSync(source, { withFileTypes: true })
        .filter(dirent => dirent.isDirectory() && dirent.name != 'packages')
        .map(dirent => dirent.name)

const app_folder = `C:\\Users\\${os.userInfo().username}\\AppData\\Local\\WhatsApp\\`
const versions = getDirectories(app_folder)
const latest = versions[versions.length - 1]
const extract_cmd_file = app_folder + latest + '\\resources\\extract.cmd'

if (!fs.existsSync(app_folder + latest + '\\resources\\app.asar')) {
    console.log('app.asar not found')
    process.exit()
}
fs.writeFileSync(extract_cmd_file, `@echo off
cd "${app_folder + latest + '\\resources\\'}"
echo Killing whatsapp.exe
taskkill /f /im "whatsapp.exe"
echo Extracting app.asar file
npx asar e app.asar app`, { encoding: 'utf8' })

// let extract = spawn('asar', ['e', app_folder + latest + '\\resources\\app.asar', 'app'], { shell: true })
let extract = spawn(extract_cmd_file, [], { shell: false })
extract.stdout.on('data', data => {
    console.log(data.toString().replace(/\n/gi, ''))
})

function replace_in_file(filename, str, nstr, callback) {
    let content = fs.readFileSync(filename, { encoding: 'utf8' })
    content = content.replace(str, nstr)
    fs.writeFile(filename, content, { encoding: 'utf8' }, err => {
        if (err) {
            console.log(err)
            return
        }
        callback()
    })
}

extract.on('close', (code) => {
    console.log(`extract process exited with code ${code}`);
    replace_in_file(app_folder + latest + "\\resources\\app\\main.js", /nodeIntegration:!1/gi, 'nodeIntegration:true', _ => {
        replace_in_file(app_folder + latest + '\\resources\\app\\preload.js', '"use strict";var n=r(0),i=r(1),', '"use strict";window.smk = r(1);var n=r(0),i=r(1),', _ => {
            replace_in_file(app_folder + latest + '\\resources\\app\\index.html', '<script src="renderer.js"></script>', '<script src="renderer.js"></script><script src="smk.js"></script>', _ => {
                replace_in_file(app_folder + latest + '\\resources\\app\\renderer.js', 't.openSocket=function(e){return new WebSocket(e)}', 't.openSocket=function(e){let nws = new WebSocket(e);window.smk.nws = nws;return nws}', _ => {
                    let smk_js = fs.readFileSync('./smk.js', { encoding: 'utf8' })
                    fs.writeFileSync(app_folder + latest + '\\resources\\app\\smk.js', smk_js, { encoding: 'utf8' })
                })
            })
        })
    })
    // let main_js = fs.readFileSync(app_folder + latest + "\\resources\\app\\main.js", { encoding: 'utf8' })
    // main_js = main_js.replace(/nodeIntegration:!1/gi, 'nodeIntegration:true')
    // fs.writeFile(app_folder + latest + '\\resources\\app\\main.js', main_js, { encoding: 'utf8' }, (err) => {
    //     if (err) {
    //         console.log(err)
    //         return
    //     }
    //     let preload_js = fs.readFileSync(app_folder + latest + '\\resources\\app\\preload.js', { encoding: 'utf8' })
    //     preload_js = preload_js.replace('"use strict";var n=r(0),i=r(1),', '"use strict";window.smk = r(1);var n=r(0),i=r(1),')
    //     fs.writeFile(app_folder + latest + '\\resources\\app\\preload.js', preload_js, { encoding: 'utf8' }, err => {
    //         if (err) {
    //             console.log(err)
    //             return
    //         }
    //         let index_html = fs.readFileSync(app_folder + latest + '\\resources\\app\\index.html', { encoding: 'utf8' })
    //         index_html = index_html.replace('<script src="renderer.js"></script>', '<script src="renderer.js"></script><script src="smk.js"></script>')
    //         fs.writeFile(app_folder + latest + '\\resources\\app\\index.html', index_html, { encoding: 'utf8' }, err => {
    //             if (err) {
    //                 console.log(err)
    //                 return
    //             }
    //             let smk_js = fs.readFileSync('./smk.js', { encoding: 'utf8' })
    //             fs.writeFileSync(app_folder + latest + '\\resources\\app\\smk.js', smk_js, { encoding: 'utf8' })
    //         })
    //     })
    // })
});