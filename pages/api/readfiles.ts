import fs from 'fs'
import path from 'path'
import {imageSize} from 'image-size';

export default (req: any, res: any) => {
  const dirRelativeToPublicFolder = 'gallery'

  const dir = path.resolve('./public', dirRelativeToPublicFolder);
  
  const filenames = fs.readdirSync(dir);
  
  const images = filenames.map((name) => {
    
    return path.join('/', dirRelativeToPublicFolder, name)
    
})

let sizes: any = []

images.forEach((imageName: string)=>{
    if(imageName.endsWith("Store")){
        
    }
    else{
        let currImgSize = imageSize("./public/" + imageName);
        let temp =  {"name": imageName,
                "width": currImgSize.width,
                "height": currImgSize.height}
        sizes.push(temp)
    }
  })

  res.statusCode = 200
  res.json(sizes);
}