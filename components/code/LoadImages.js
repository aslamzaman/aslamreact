const LoadImages = () => {


  const str = `

const getImageWidthHeight = (url) => {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = url;
        img.onload = () => {
            const imgWidth = img.width;
            const imgHeight = img.height;
            const orientation = imgWidth/imgHeight > 1 ? 'landscape' : 'portrait';
            resolve({ imgWidth, imgHeight, orientation });
        };
        img.onerror = (error) => reject(error);
    });
};


const fileChangeHandlerImage = async (e) => {
    try {
        const files = e.target.files;
        const imageDataPromises = Array.from(files).map(async (file) => {
            const imagBlobUrl = URL.createObjectURL(file);
            const { imgWidth, imgHeight, orientation } = await getImageWidthHeight(imagBlobUrl);
            return {
                url: imagBlobUrl,
                width: imgWidth,
                height: imgHeight,
                orientation: orientation,
                name: file.name,
                type: file.type,
                size: file.size,
            };
        });

        const imageData = await Promise.all(imageDataPromises);
        setImageDatas(imageData);
    } catch (error) {
        console.error("Error processing images:", error);
    }
};


const imagePosition = (orientation, w, h) => {
    const width = orientation === "landscape" ? (631.4175 * 0.75) : ((631.4175 / h) * w * 0.75);
    const height = (width / w) * h;
    const x = orientation === "landscape" ? ((631.4175 - width) / 2) : ((446.46 - width) / 2);
    const y = orientation === "landscape" ? ((446.46 - height) / 2) : ((631.4175 - height) / 2);
    return { x, y, width, height };
}



`;

  return str;

}

export default LoadImages;
