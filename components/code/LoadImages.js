const LoadImages = () => {


  const str = `
// npm install browser-image-compression@2.0.2
// npm install jspdf@2.5.1
// import imageCompression from 'browser-image-compression';
// import { jsPDF } from "jspdf";


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


const compressedImage = (file) => {
    return new Promise(async (resolve, reject) => {
        try {
            const options = {
                maxSizeMB: 0.5, // Maximum size in MB
                maxWidthOrHeight: 1024, // Maximum width or height
                useWebWorker: true,
            };

            const compressedFile = await imageCompression(file, options);
            const url = URL.createObjectURL(compressedFile);
            resolve(url);
        } catch (error) {
            console.error('Error compressing the image:', reject(error));
        }
    })
}




const fileChangeHandlerImage = async (e) => {
    setBtnPrint(false);
    setMsg("Please wait. Image compresing and loading...");
    try {
        const files = e.target.files;
        const imageDataPromises = Array.from(files).map(async (file) => {
            const dataUrl = await compressedImage(file);
            const { imgWidth, imgHeight, orientation } = await getImageWidthHeight(dataUrl);
            const type2 = file.type
            .split("/")[1]
            .toUpperCase();
            console.log(type2);

            return {
                url: dataUrl,
                width: imgWidth,
                height: imgHeight,
                name: file.name,
                type: file.type,
                size: file.size,
                type2: type2,
                orientation: orientation
            };
        });

        const imageData = await Promise.all(imageDataPromises);
        console.log(imageData);
        setImageDatas(imageData);
        setMsg("Ready to creating pdf.");
        setBtnPrint(true);
    } catch (error) {
        console.error("Error processing images:", error);
    }
};



const createPdfHandler = (e) => {
    e.preventDefault();
    if (imageDatas.length.length < 1) {
        return false;
    }

    try {
        const doc = new jsPDF({
            orientation: 'landscape',
            unit: 'px',
            format: 'a4',
            putOnlyUsedFonts: true
        });

        const pdfWidth = doc.internal.pageSize.getWidth();
        const pdfHeight = doc.internal.pageSize.getHeight();

        setMsg("Please wait...");
        //--------------------------------------------------------------------
        setTimeout(() => {
            imageDatas.forEach((item) => {
                const orientation = item.orientation;
                doc.addPage('a4', \`\${orientation}\`);
                
                // Image size reduce
                const imageWidth = item.width * 0.5;
                const imageHeight = item.height * 0.5;

                let x = 0;
                let y = 0;
                if (orientation === 'landscape') {
                    x = (pdfWidth - imageWidth) / 2;
                    y = (pdfHeight - imageHeight) / 2;
                    textLeft = pdfWidth / 2;
                } else {
                    x = (pdfHeight - imageWidth) / 2;
                    y = (pdfWidth - imageHeight) / 2;
                }

                doc.addImage(\`\${item.url}\`, \`\${item.type2}\`, x, y, imageWidth, imageHeight);
            })
            doc.deletePage(1);
            const fileName = 'Imaage-Merge.pdf';
            doc.save(fileName);
            setMsg("PDF created completed.");
            setImageDatas([]);
        }, 100);

    } catch (error) {
        console.log(error);
    }
}



`;

  return str;

}

export default LoadImages;
