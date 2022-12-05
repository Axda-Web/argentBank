import SwaggerUI from "swagger-ui-react"
import "swagger-ui-react/swagger-ui.css"
import StyledApiDocs from "./ApiDocs.styled"

const ApiDocs = () => {
  return (
    <StyledApiDocs>
        <SwaggerUI url='swagger.yaml' />
    </StyledApiDocs>
  )
}

export default ApiDocs