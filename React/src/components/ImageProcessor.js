import img_avatar from '../imgs/avatar.jpg'

export default function FromBlob(img_blob){
     // Trate img
     if (img_blob !== "") {
        let arrayBufferView = new Uint8Array(img_blob)
        let blob = new Blob([arrayBufferView], { type: 'image/jpeg' })
        let urlCreator = window.URL || window.webkitURL
        // let img_url = urlCreator.createObjectURL(blob)
        let ff = []
        for (const i in img_blob) {
            if (img_blob.hasOwnProperty(i)) {
                const element = img_blob[i];
                ff.push(element)
            }
        }
        arrayBufferView = new Uint8Array(ff)
        blob = new Blob([arrayBufferView], {type: 'image/jpeg'})
        return urlCreator.createObjectURL(blob)
    }else{
        return img_avatar
    }
}

export { FromBlob }