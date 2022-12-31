import fs from 'fs'
import path from 'path'

const deepReaddirSync = (
    p: string,
    a: string[] = []
) => {
    if (fs.statSync(p).isDirectory())
        fs.readdirSync(p).map(f =>
            deepReaddirSync(a[a.push(path.join(p, f)) - 1], a)
        )
    return a
}

const deepReadFilesSync = (
    p: string
) => {
    const paths = deepReaddirSync(p);
    return paths.filter(path => fs.statSync(path).isFile());
}

export default deepReadFilesSync;