# Image Drag Dropper

**image-drag-dropper** is a lightweight library designed to facilitate **image drag and drop** functionality.

![Cat](./src/demo.png)
Just assign an **id** to the HTML tags as shown above, and image-drag-dropper will handle the rest.

## Installation

You can install image-drag-dropper via npm:

```
npm i image-drag-dropper
```

## Usage 

**Import** in your js
```
// Import your file uploader functionality
import initializeFileUploader from './node_modules/image-drag-dropper/src/index.js'

initializeFileUploader();
```

Create a **Drop Area**:
```
<div id="file-drop-area">
    <!-- Your drop area content goes here -->
</div>
```
Add a Hidden **File Input**:
```                             
<input type="file" id="file-input" multiple accept="image/*" class="d-none">
```
Display Dropped **Image**:
```
<img id="dropped-img">

```


##Example
Here's a simple example demonstrating the **usage** of image-drag-dropper (with **Bootstrap 5**):

```
<div id="file-drop-area" class="border rounded d-flex justify-content-center align-items-center"
        style="width: 300px; height: 200px; cursor: pointer;">
        <div class="text-center">
            <svg class="text-primary" xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24">
                <path fill="currentColor"
                    d="m19.21 12.04l-1.53-.11l-.3-1.5A5.484 5.484 0 0 0 12 6C9.94 6 8.08 7.14 7.12 8.96l-.5.95l-1.07.11A3.99 3.99 0 0 0 2 14c0 2.21 1.79 4 4 4h13c1.65 0 3-1.35 3-3c0-1.55-1.22-2.86-2.79-2.96m-5.76.96v3h-2.91v-3H8l4-4l4 4z"
                    opacity=".3" />
                <path fill="currentColor"
                    d="M19.35 10.04A7.49 7.49 0 0 0 12 4C9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 0 0 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5c0-2.64-2.05-4.78-4.65-4.96M19 18H6c-2.21 0-4-1.79-4-4c0-2.05 1.53-3.76 3.56-3.97l1.07-.11l.5-.95A5.469 5.469 0 0 1 12 6c2.62 0 4.88 1.86 5.39 4.43l.3 1.5l1.53.11A2.98 2.98 0 0 1 22 15c0 1.65-1.35 3-3 3M8 13h2.55v3h2.9v-3H16l-4-4z" />
            </svg>

            <p class="mt-3 px-5">Drag and drop your image here or click to select a file.</p>
        </div>
    </div>
    <input type="file" id="file-input" multiple accept="image/*" class="d-none">


    <img id="dropped-img" style="width: 300px;" class="img-thumbnail">
```

With **image-drag-dropper**, incorporating **image drag and drop** functionality into your project becomes a seamless process, enhancing user interaction and experience.