class PreviewPicture {
    
    placeholdUrl;
    
    constructor(obj){
        this.setPlaceholdUrl(obj.placeholdConfig)
        this.setPreview(obj.previews)
    }

    setPreview(previews){
        previews.forEach(element => {
            let inputFile = document.getElementById(element.inputFileID)
            let previewEl = document.getElementById(element.previewID)
            
            previewEl.setAttribute('src', this.placeholdUrl)

            inputFile.addEventListener('change', function(event){
                let file = event.target.files[0];
                let reader = new FileReader();
                reader.onload = function(e){
                    previewEl.setAttribute('src', e.target.result);
                }
                reader.readAsDataURL(file);
            })
        });
    }

    setPlaceholdUrl(placeholdConfig){
        if (placeholdConfig !== undefined) {
            this.placeholdUrl = 'https://placehold.co/' + placeholdConfig.width + 'x' + placeholdConfig.height;
        } else {
            this.placeholdUrl = 'https://placehold.co/600x400';
        }
    }
}