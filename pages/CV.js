import React from 'react'
import BaseLayout from '../components/layout/BaseLayout'
import BasePage from '../components/BasePage'

class CV extends React.Component {
    render () {
        return(
            <BaseLayout>
                <BasePage>
                    <h1 className="customClass">Hi I'm the CV page!</h1>
                </BasePage>
            </BaseLayout>
        )
    }
}
  
export default CV