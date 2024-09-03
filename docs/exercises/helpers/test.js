// isolate the editor component
editor = document.querySelector('#tabset-1-2 div.editor-container div.cm-content')

// read the editor content
old = editor.textContent


// define the new content
neww = `from shiny.express import ui, render, input

ui.input_text("name", "Type a name", value="world")

@render.text
def greeting():
  return f"Hello {input.name()}!"`


// set the new content
editor.textContent = neww


// isolate the viewer
document.querySelector('#tabset-1-2 div.shinylive-viewer')

// isolate the editor
editor = document.querySelector('#tabset-1-2 div.shinylive-editor')
editor.style.display = 'grid'
editor.style.display = 'none'

// container
container = document.querySelector('#tabset-1-2 div.shinylive-container')
container.style.display='grid'
container.style.display=''




editor = document.querySelector('#tabset-1-2 .shinylive-editor');
container = document.querySelector('#tabset-1-2 .shinylive-container');

// hide editor
editor.style.display='none'; container.style.display=''

// show editor
editor.style.display='grid'; container.style.display='grid'


editor = document.querySelector('#tabset-1-2 .shinylive-editor');

