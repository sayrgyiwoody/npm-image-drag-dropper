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
import initializeFileUploader from 'image-drag-dropper'

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
Here's a simple example demonstrating the **usage** of image-drag-dropper:

```
<div id="file-drop-area">
    <!-- Your drop area content goes here -->
</div>
<input type="file" id="file-input" multiple accept="image/*" class="d-none">
<img id="dropped-img">
```

With **image-drag-dropper**, incorporating **image drag and drop** functionality into your project becomes a seamless process, enhancing user interaction and experience.