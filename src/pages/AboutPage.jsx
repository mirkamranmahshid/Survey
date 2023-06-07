import {Link} from 'react-router-dom'
import Card from "../components/shared/Card"

function AboutPage() {
return <Card>
    <div className="about">
        <h1> About this project</h1>
        <p>This is a React app to leave feedback for a product or service.</p>
<p><i>Version 1.0.0</i></p>

<h2>
    <Link to="/">Back to Home</Link>
</h2>
    </div>
</Card>
    
}

export default AboutPage