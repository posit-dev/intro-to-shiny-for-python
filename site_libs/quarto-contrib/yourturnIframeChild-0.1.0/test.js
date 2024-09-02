
function toggleEditor(show = true) {
  editor = document.querySelector('#tabset-1-1 .shinylive-editor');
  container = document.querySelector('#tabset-1-1 .shinylive-container');
  if (show) {
    container.style.gridTemplate='"editor viewer" 800px / 1fr 1fr'
    document.getElementById("sledShow").style.display='none'
    document.getElementById("sledHide").style.display=''

  } else {
    container.style.gridTemplate='"editor viewer" 800px / 0fr 1fr'
    document.getElementById("sledShow").style.display=''
    document.getElementById("sledHide").style.display='none'
  }
}


let previousProblemContent = '';

function insertProblemCode() {
  document.getElementById('sledProb').style.display = 'none'
  document.getElementById('sledSoln').style.display = ''
  // await insertSolutionCode(previousProblemContent);
  insertSolutionCode(previousProblemContent)
}

function insertSolutionCode(code = '') {
  if (code == '') {
    code = document.getElementById('sledSolutionCode').outerText
  }

  editor = document.querySelector('#tabset-1-1 div.editor-container div.cm-content')
  previousProblemContent = editor.innerText;
  previousProblemContent = editor.outerText;

  document.getElementById('sledProb').style.display = ''
  document.getElementById('sledSoln').style.display = 'none'

  code = code.replace(/\n{3,}/g, '\n\n')
  code = code.replace(/^\n+/, '')

  editor.textContent = code

  // previousProblemContent = await requestFileContentsFromWindow()
  // window.postMessage({type: "setFiles", files: [{name: "app.py", content: code, type: "text"}]})

  // Wait a small amount of time before clicking the run button
  setTimeout(() => {
    document.querySelector('button.code-run-button[aria-label^="Re-run app"').click()
  }, 500)

}


async function requestFileContentsFromWindow() {

  const reply = await postMessageAndWaitForReply(
    window, { type: "getFiles" }
  );

  return reply;
}

function postMessageAndWaitForReply(targetWindow, message) {
  return new Promise((resolve) => {
    const channel = new MessageChannel();

    channel.port1.onmessage = (event) => {
      resolve(event.data);
    };

    targetWindow.postMessage(message, "*", [channel.port2]);
  });
}