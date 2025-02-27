import {KeyboardEvent, useEffect, useLayoutEffect, useRef} from 'react'

export const DeepDive2 = () => {
    const iframeRef = useRef<HTMLIFrameElement>(null)
    const preRef = useRef<HTMLPreElement>(null)
    
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
        window.console.log = consoleToHtml
        console.log(1+3)
    }, [])

    return <>
    <div>deep-dive 6~7장</div>
    <pre ref ={preRef} css={{
        width: 500,
        height: 500,
        background: 'white'
    }}></pre>
    <iframe ref={iframeRef} />
    </>
}