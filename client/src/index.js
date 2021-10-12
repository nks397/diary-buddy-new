import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import { BrowserRouter } from "react-router-dom"
import { EntriesContextProvider } from "./contexts/userEntryContext"
import { TemplateContextProvider } from "./contexts/templateContext"
import "./styles.css"

ReactDOM.render(
    <BrowserRouter>
        <EntriesContextProvider>
            <TemplateContextProvider>
                <App />
            </TemplateContextProvider>  
        </EntriesContextProvider>
    </BrowserRouter>, 
    document.getElementById("root")
)