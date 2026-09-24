import IndexField from './components/Fields/IndexField.vue'
import DetailField from './components/Fields/DetailField.vue'
import FormField from './components/Fields/FormField.vue'
import Gallery from './components/Gallery.vue'
import GalleryModal from './components/GalleryModal.vue'
import CustomPropertiesModal from './components/CustomPropertiesModal.vue'
import GalleryItem from './components/GalleryItem.vue'
import GalleryPicture from './components/GalleryPicture.vue'
// import Dropzone from './components/Dropzone'
import ThumbnailField from './components/Fields/ThumbnailField.vue'
import '../css/field.css'

Nova.booting((app, store) => {
    const fileManager = window.NovaFileManager
    if (fileManager?.createPinia) {
        app.use(fileManager.createPinia())
    }

    app.component('index-nova-media-field', IndexField)
    app.component('detail-nova-media-field', DetailField)
    app.component('form-nova-media-field', FormField)
    app.component('index-nova-media-thumbnail', ThumbnailField)
    app.component('detail-nova-media-thumbnail', ThumbnailField)
    app.component('form-nova-media-thumbnail', ThumbnailField)
    app.component('Gallery', Gallery)
    app.component('GalleryItem', GalleryItem)
    app.component('GalleryModal', GalleryModal)
    app.component('GalleryPicture', GalleryPicture)
    app.component('CustomPropertiesModal', CustomPropertiesModal)
    // app.component('Dropzone', Dropzone)
})
