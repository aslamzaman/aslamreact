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

`;

  return str;

}

export default LoadImages;
