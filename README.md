# Preview Picture

Un script très simple permettant la prévisualisation d'une image chargé dans un input file avant la soumission du formulaire. <br>
La balise img servant à la preview n'est pas générer afin d'avoir le choix de la placement et du style.

## Doc
Définir la balise img pour la preview avec un id
```
<img id="picture_preview_id" src="#" alt="preview picture" />
```

Import

```
<script src="PreviewPicture.js"></script>
```

Utilisation : <br>

```
 new PreviewPicture({
    previews: [
        {
            inputFileID : 'input_file_id',
            previewID : 'picture_preview_id'
        }
    ]
});
```

Option : config du placehold

```
 new PreviewPicture({
    placeholdConfig : { 
        width: 250, 
        height: 150 
    }
});
```