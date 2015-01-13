(function(){
    // Picture Configuration

    document.addEventListener("deviceready", initialize);

    function initialize(){
        document.getElementById('cameraBtn').addEventListener('click', takePicture);
        document.getElementById('cameraChooseBtn').addEventListener('click', choosePicture);
    }

    function takePicture(){
        console.log("Taking Picture");
        
        if (!navigator.camera){
            alert("Camera Plugin Not Available");
            return;
        }

        var options             = {};
        options.quality         = 75;
        options.destinationType = Camera.DestinationType.DATA_URL;
        options.sourceType      = Camera.PictureSourceType.CAMERA;
        options.allowEdit       = false;
        options.encodingType    = Camera.EncodingType.JPEG;
        options.popoverOptions  = CameraPopoverOptions;
        options.saveToPhotoAlbum= false;

        var result = navigator.camera.getPicture(onPicSuccess, onPicError, options);
        console.log(result);
    }


    function onPicSuccess(imageData){
        console.log("Successfully Retrieved Picture");
        var image = document.getElementById('myImage');
        image.src = "data:image/jpeg;base64," + imageData;
    }

    function onPicError(message){
        console.log("Error Occurred: " + message);
    }


    function choosePicture(){
        console.log("Choosing Picture");
        if (! navigator.camera){
            alert("Camera Plugin Not Available");
            return;
        }

        var options = {};
        options.quality         = 75;
        options.sourceType      = Camera.PictureSourceType.PHOTOLIBRARY;
        options.destinationType = Camera.DestinationType.DATA_URL;

        var result = navigator.camera.getPicture(onChoosePicSuccess, onPicError, options);
        console.log(result);
    }

    function onChoosePicSuccess(imageData){
        var image = document.getElementById('myImage');
        image.src = "data:image/jpeg;base64," + imageData;
    }
}());