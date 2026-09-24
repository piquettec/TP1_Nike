var inputFolder = Folder.selectDialog("Choisissez un dossier de sources pour débuter"),
outputFolder = Folder.selectDialog("Choisissez un dossier cible pour les images créées"),
imageSizes = [
    ["1200px", "1200px", "w1200-demo"],
    ["600px", "600px", "w600-demo"],
    ["150px", "150px", "w150-demo"],
],
numImageSizes = imageSizes.length;

if (inputFolder != null && outputFolder != null) {  
    var fileList = inputFolder.getFiles(/\.(jpg|jpeg|png|gif)$/i);
    for(var i=0; i<fileList.length; i++) {
        var doc = app.open( fileList[i] );
         for (var j = 0; j < imageSizes.length; j++) {
            var currentImageSize = imageSizes[j],
            currentImageWidth = currentImageSize[0],
            currentImageHeight = currentImageSize[1],
            currentImageVersion = currentImageSize[2],
            fullname = doc.name,
            filename = fullname.substr(0, fullname.lastIndexOf(".")) || fullname,
            extension = fullname.split(".").pop(),
            exportOptionsSaveForWeb = new ExportOptionsSaveForWeb();
            doc.resizeImage(currentImageWidth, currentImageHeight);
            exportOptionsSaveForWeb.includeProfile = true;
            exportOptionsSaveForWeb.optimized = true;
                if (extension == "jpg" || extension == "jpeg") {
                    exportOptionsSaveForWeb.format = SaveDocumentType.JPEG;
                    exportOptionsSaveForWeb.includeProfile = true;
                    exportOptionsSaveForWeb.quality = 100;
                    }
                 if (extension == "png") {
                    exportOptionsSaveForWeb.format = SaveDocumentType.PNG;
                    }        
                 if (extension == "gif") {
                    exportOptionsSaveForWeb.format = SaveDocumentType.GIF;
                    } 
                    var documentPath = decodeURI(outputFolder) + "/" + filename + "_" + currentImageVersion + "." + extension,
                    file = new File(documentPath);
                    doc.exportDocument (file, ExportType.SAVEFORWEB, exportOptionsSaveForWeb);
          }
    doc.close(SaveOptions.DONOTSAVECHANGES);
    }
}