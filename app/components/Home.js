import React    from 'react';
import Header from './Header';
import ProjectSection from './ProjectSection';
import Contact  from './Contact';
import Footer   from './Footer';

class Home extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <ProjectSection />
                <Contact />
                <Footer />
            </div>
        )
    }
}

export default Home;
