import {KeyboardEvent, useEffect, useRef} from 'react'

export const DeepDive1 = () => {
    const textareaRef = useRef<HTMLTextAreaElement>(null)
    const iframeRef = useRef<HTMLIFrameElement>(null)
    const scriptRef = useRef<HTMLIFrameElement>(null)

    const handleCodeClick = () => {
        if (!textareaRef.current || !scriptRef.current?.contentWindow) return

        const code = textareaRef.current.value
        const preview = scriptRef.current.contentWindow.document

        const result = window.eval(code)
        console.log(result)

        // preview?.open()
        // preview?.write(`<script>${code}</script>`)
        // preview?.close()
    }
    
    const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key == 'Tab') {
            e.preventDefault();

            if (textareaRef.current) {
                let start = textareaRef.current.selectionStart
                let end = textareaRef.current.selectionEnd

                textareaRef.current.value = textareaRef.current.value.substring(0, start) + "\t" + textareaRef.current.value.substring(end)
                textareaRef.current.selectionStart = textareaRef.current.selectionEnd = start + 1
            }
          }
    }

    const consoleToHtml = function() {

        if (!iframeRef.current?.contentWindow) return

        const preview = iframeRef.current.contentWindow.document
        let code = ""

        Array.from(arguments).forEach((el: Object) => {
            const insertValue = JSON.stringify(el)
            code += insertValue
        })

        preview?.open()
        preview?.write(code)
        preview?.close()
    }

    useEffect(() => {
        // Override console.log with a function that displays the output
        const originalConsoleLog = window.console.log;
        
        window.console.log = (...args: any[]) => {
          const result = args.map((arg) => JSON.stringify(arg)).join(' ');
          const output = document.createElement('div');
          output.innerHTML = result;
          iframeRef.current?.contentWindow?.document.body.appendChild(output);
    
          // Call the original console.log
          originalConsoleLog.apply(null, args);
        };
    
        // Cleanup function to restore original console.log on component unmount
        return () => {
          window.console.log = originalConsoleLog;
        };
      }, []);
    
    return <>
    <div>deep-dive 1~5장</div>
    <textarea ref={textareaRef} css={{ width: 500, height: 500}} onKeyDown={handleKeyDown} />
    <iframe ref={scriptRef} css={{
        display: 'none'
    }} />
    <iframe ref={iframeRef}  />
    <button onClick={handleCodeClick}>미리보기</button>
    </>
}