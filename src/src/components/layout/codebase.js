import Editor from '@monaco-editor/react';

const code = `import { createCheckoutWithCardElement } from '@nonstopay/js-client-sdk';
    <CheckoutWithCard
    sdkClientSecret="input your client secret key"
    onPaymentSuccess={(result) => console.log(result)}
    onReview={(result) => console.log(result)}
    onError={(error) => console.error(error)}
    options={{
        colorBackground: '#fefae0',
        colorPrimary: '#606c38',
        colorText: '#283618',
        borderRadius: 10,
        inputBackgroundColor: '#041417',
        inputBorderColor: '#00FF66 ',
    }}
    />;`

export const CodeEditor = () => {
    return (
        <div className="code-editor-windows">
            <div className="text-center code-editor-window-title py-2">Editor<span className="windows-controller">● ● ●</span></div>
            <Editor
                height="35vh"
                theme="vs-dark"
                defaultLanguage="javascript"
                defaultValue={code}
                options={{readOnly: true}}
            />
        </div>
    )
}