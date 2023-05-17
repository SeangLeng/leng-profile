'use client'; // eslint-disable-line
import Image from 'next/image'
import backendlogo from './Images/logo-backend.png'
import leng_image from './Images/leng-exam.png'
import skill_image from './Images/skillsbackground.png'
import contact from './Images/contact.png'
import form_image from './Images/form-image.png'
import {Form, Formik, ErrorMessage, Field} from "formik";
import * as Yup from 'yup';

export default async function Home() {
    const validation = Yup.object({name: Yup.string().required("Username can not be blank"), email: Yup.string().email("Invalid email address"), address: Yup.string().required("Address cannot be blank"), description: Yup.string().required("Say something for your interest in this field")})
    const postUsers = (user) => {
        fetch("http://localhost:8080/userSent/responseMessage", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        }).then(response => response.json()).then(response => console.log(response));
    }
    return (
        <main data-aos="fade-up" data-aos-anchor=".other-element" className="content flex min-h-screen flex-col items-center jus  tify-between p-20">
            <p className='text-5xl font-semibold'>SENG SEANG
                <span className='text-orange-600'>LENG</span>
            </p>
            <p className='mt-2 text-2xl mb-10 text-gray-400'>Full-Stack web developer</p>
            <img src="https://z-p3-scontent.fpnh5-4.fna.fbcdn.net/v/t39.30808-6/329835809_735322284655079_3345566267683874665_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGDKM0rLosNjEgzcn51JLUQlsYWsTy7q3aWxhaxPLurdghLgugRx1rSwWpgd9aI4kszaopKRdTL1WmvmsdoRZsr&_nc_ohc=hHgVwgMayZcAX-rhLxj&_nc_zt=23&_nc_ht=z-p3-scontent.fpnh5-4.fna&oh=00_AfD3xHLC1VRy9Ex-gJO8g9dH_Sdpgxq8aJ67G4KHrVAoLg&oe=6465BF33" alt="seangleng-profile" className='rounded-full'/>
            <div className='multiskills flex justify-between -mt-44 gap-10 w-full'>
                <div className='skills p-5 rounded-2xl'>
                    <p className='text-2xl font-semibold text-center'>Skills</p>
                    <div className='flex flex-wrap mt-10'>
                        <img src="https://www.frontend-gmbh.de/wp-content/themes/frontendgmbh/downloads/frontend-logo.png" alt="front-end-logo" className='h-20 object-cover w-20 mr-3 rounded-full'/>
                        <div className='grid gap-3 w-80'>
                            <p className='font-semibold text-lg'>Front-end development</p>
                            <p>Created websites with HTML, CSS, BOOTSTRAP, JavaScript, Next.js, React.js and make them quality.
                            </p>
                        </div>
                        <Image src={backendlogo}
                            alt="front-end-logo"
                            className='h-20 object-contain w-20 mr-3 rounded-full mt-10'/>
                        <div className='grid gap-3 w-80 mt-10'>
                            <p className='font-semibold text-lg'>Back-end development</p>
                            <p>I was a part of project that handle on searching and database (Data modeling) and other ... etc.
                            </p>
                            <svg width="36" height="24" viewBox="0 0 36 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M35.0626 13.0587C35.6473 12.4718 35.6456 11.5221 35.0587 10.9374L25.4952 1.40905C24.9083 0.82434 23.9586 0.82609 23.3739 1.41295C22.7892 1.99982 22.7909 2.94957 23.3778 3.53427L31.8787 12.0039L23.409 20.5048C22.8243 21.0917 22.8261 22.0414 23.413 22.6261C23.9998 23.2108 24.9496 23.2091 25.5343 22.6222L35.0626 13.0587ZM1.00276 13.5608L34.0028 13.5L33.9972 10.5L0.997237 10.5608L1.00276 13.5608Z" fill="black"/>
                            </svg>

                        </div>
                    </div>
                </div>
                <div className='Website-project p-5 rounded-2xl'>
                    <p className='text-2xl font-semibold text-center'>Website project</p>
                    <div className='flex flex-wrap mt-10'>
                        <img src="https://gamereview-009.web.app/homepage_image/wolf_logo.png" alt="front-end-logo" className='h-20 object-cover w-20 mr-3 rounded-full'/>
                        <div className='grid gap-3 w-80'>
                            <p className='font-semibold text-lg'>GAMER REVIEW</p>
                            <p>Is a kind of website that, show the latest information of pc game.
                            </p>
                        </div>
                        <img src="https://static.vecteezy.com/system/resources/thumbnails/011/316/464/small/brown-cup-of-coffee-logo-on-transparent-background-free-png.png" alt="front-end-logo" className='h-20 object-contain w-20 mr-3 rounded-full mt-10'/>
                        <div className='grid gap-3 w-80 mt-10'>
                            <p className='font-semibold text-lg'>LengCoffee</p>
                            <p>Website that created to make user feel easier to buy them coffee.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='Development p-5 rounded-2xl'>
                    <p className='text-2xl font-semibold text-center'>Development</p>
                    <div className='flex flex-wrap mt-10'>
                        <img src="https://i.pinimg.com/originals/1c/7b/0b/1c7b0b918b0598001a5cdab782abed91.png" alt="front-end-logo" className='h-20 object-contain w-20 mr-3 rounded-full'/>
                        <div className='grid gap-3 w-80'>
                            <p className='font-semibold text-lg'>FRONT-ENT</p>
                            <p>HTML, CSS, BOOTSTRAP, JAVASCRIPT, REACT.JS, NEXT.JS
                            </p>
                        </div>
                        <img src="https://cdn-icons-png.flaticon.com/512/2166/2166823.png" alt="front-end-logo" className='h-20 object-fit w-20 mr-3 mt-10'/>
                        <div className='grid gap-3 w-80 mt-10'>
                            <p className='font-semibold text-lg'>BACK-END</p>
                            <p>Spring boot, Java
                            </p>
                        </div>
                        <img src="https://www.pngplay.com/wp-content/uploads/7/Database-Logo-Transparent-PNG.png" alt="front-end-logo" className='h-20 object-cover w-20 mr-3 rounded-full mt-10'/>
                        <div className='grid gap-3 w-80 mt-10'>
                            <p className='font-semibold text-lg'>DATABASE</p>
                            <p>SQL, mybatis, jpa, provider</p>
                        </div>
                    </div>
                </div>
            </div>
            <section id='about'>
                <div className='about'>
                    About me
                </div>
                <div className='aboutme mt-32 flex justify-between items-start'>
                    <div className='text'>
                        <p className='text-3xl font-semibold'>SENG SEANG LENG</p>
                        <p className='text-2xl font-semibold text-orange-600'>JENZY</p>
                        <p className='mt-10 text-gray-500'>A Full-stack developer who studied at ISTAD which teach about the IT skills. I am passionate about staying up-to-date with the latest technologies and industry trends, and I am always looking for opportunities to learn and improve my skills. I am committed to delivering high-quality work that meets the needs of my clients and exceeds their expectations.</p>
                    </div>
                    <div className='text'>
                        <Image id='image'
                            src={leng_image}
                            alt="about-me"
                            className='w-full'/>
                    </div>
                </div>
            </section>
            <section id='skill'>
                <p className='font-semibold text-5xl mt-20'>Skills</p>
                <div className='skill-part flex justify-center items-center'>
                    <div className='image-profile relative flex justify-start item-start mt-20 mx-10'>
                        <Image src={skill_image}
                            alt='background'
                            className='background-profile-skill'/>
                    </div>
                    <div className='leng-skills w-full'>
                        <p className='font-semibold text-3xl mb-10'>FRONT-END</p>
                        <div className='frontend-code'>
                            <p className='text-lg mb-2'>HTML, CSS, BOOTSTRAP, Tailwind</p>
                            <div className='rating'></div>
                        </div>
                        <div className='frontend-framework'>
                            <p className='text-lg mb-2 mt-10'>React.js , Next.js</p>
                            <div className='rating'></div>
                        </div>
                        <p className='font-semibold text-3xl mb-10 mt-20'>BACK-END</p>
                        <div className='backend'>
                            <p className='text-lg mb-2'>Spring boot 3</p>
                            <div className='rating'></div>
                        </div>
                        <div className='database'>
                            <p className='text-lg mb-2 mt-10'>Database</p>
                            <div className='rating'></div>
                        </div>
                    </div>
                </div>
            </section>
            <section id='contact' className='mt-20 flex justify-between items-start'>
                <div className='part'>
                    <p className='text-5xl font-semibold'>Contact me</p>
                    <p className='mt-10 text-gray-500'>If you are interested in working with me or have any questions, please do not hesitate to get in touch! You can reach me at:</p>
                    <ul className='mt-5 text-gray-500'>
                        <li>Email: mr.lengseng@gmail.com</li>
                        <li>Phone: 011348219</li>
                        <li>LinkedIn: www.leng-profile.wep.app</li>
                        <li>GitHub:
                            <a href="https://github.com/SeangLeng">SeangLeng</a>
                        </li>
                    </ul>
                </div>
                <div className='part'>
                    <Image src={contact}
                        alt=''
                        id='image'/>
                </div>
            </section>
            <section id='getInTouch' className='flex justify-between items-center'>
                <div className='form-part'>
                    <Image src={form_image}
                        alt=""
                        className='form-image'/>
                </div>
                <div className='form-part'>
                    <p className='font-semibold text-2xl'>Connect me</p>
                    <Formik initialValues={
                            {
                                name: "",
                                email: "",
                                address: "",
                                description: ""
                            }
                        }
                        validationSchema={validation}
                        onSubmit={
                            (values, {setSubmitting}) => {
                                setTimeout(() => {
                                    alert(JSON.stringify(values, null, 2));
                                    setSubmitting(false);
                                    postUsers(values);
                                }, 400);

                            }
                    }>
                        {
                        ({isSubmitting}) => (
                            <Form>
                                <div className="mb-3">
                                    <Field type="text" name="name" className="form-control"/>
                                    <ErrorMessage name="name" className="text-danger"/>
                                </div>
                                <div className="mb-3">
                                    <Field type="email" name="email" className="form-control"/>
                                    <ErrorMessage name="email"/>
                                </div>
                                <div className="mb-3">
                                    <Field type="text" name="address" className="form-control"/>
                                    <ErrorMessage name="address"/>
                                </div>
                                <div className="mb-3">

                                    <Field as="textarea" type="text" name="description" className="form-control"/>
                                    <ErrorMessage name="role"/>
                                </div>
                                <button className="btn bg-success text-white" type="submit"
                                    disabled={isSubmitting}>
                                    Send
                                </button>
                            </Form>
                        )
                    } </Formik>
                </div>
            </section>
        </main>
    )
}
