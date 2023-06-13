import React from 'react';
import SectionTitle from '../../elements/section-title/SectionTitle';

const Datas = [
    {
        id: 1,
        title: "Exceed clients’ and colleagues’ expectations",
        para: "At our company, we strive to exceed client and colleagues' expectations by delivering high-quality IT and digital marketing solutions that drive growth, innovation, and success for all stakeholders involved."
    },
    {
        id: 2,
        title: "Take ownership and question the status quo in a constructive manner",
        para: "We encourage our team to take ownership of their work, constantly question the status quo, and propose constructive solutions that drive innovation and growth in IT and digital marketing."


    },
    {
        id: 3,
        title: "Be brave, curious and experiment – learn from all successes and failures",
        para: "We foster a culture of bravery, curiosity, and experimentation, where our team is encouraged to learn from both successes and failures to drive continuous improvement and innovation in IT and digital marketing."
    },
    {
        id: 4,
        title: "Act in a way that makes all of us proud",
        para: "We hold ourselves to high ethical standards and act in a way that makes us all proud, delivering impactful IT and digital marketing solutions that positively impact our clients, colleagues, and the community."
    },
    {
        id: 5,
        title: "Build an inclusive, transparent and socially responsible culture",
        para: "We are committed to building an inclusive, transparent, and socially responsible culture that celebrates diversity and drives positive change in IT and digital marketing, both within our company and the wider community."
    }
]




const AboutThree = () => {
    return (
        <div className="section section-padding bg-color-dark pb--80 pb_lg--40 pb_md--20">
            <div className="container">
                <SectionTitle 
                    subtitle="Our Valus"
                    title="Why should you work with us?"
                    description="We are a dynamic team of experts, dedicated to delivering innovative and effective IT and digital marketing solutions for your business's success."
                    textAlignment="heading-left heading-light-left mb--100"
                    textColor=""
                />

                <div className="row">
                    {Datas.map((data) => (
                        <div className="col-lg-4" key={data.id}>
                            <div className="about-quality">
                                <h3 className="sl-number">{data.id}</h3>
                                <h5 className="title">{data.title}</h5>
                                <p>{data.para}</p>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
            <ul className="list-unstyled shape-group-10">
                <li className="shape shape-1"><img src={process.env.PUBLIC_URL + "/images/others/circle-1.png"} alt="Circle" /></li>
                <li className="shape shape-2"><img src={process.env.PUBLIC_URL + "/images/others/line-3.png"} alt="Circle" /></li>
                <li className="shape shape-3"><img src={process.env.PUBLIC_URL + "/images/others/bubble-5.png"} alt="Circle" /></li>
            </ul>
        </div>
    )
}

export default AboutThree;