import React from "react";
// import { useEffect, useState  } from 'react';
import image_main_1 from '../../assets/image_main_1.png';
import { Service } from '../../components/Service';
import { Header } from "../../components/Header";
import { ShopContext } from "../../Context";
import { ServiceLoading } from "../../components/ServiceLoading";
export const Home=()=>{   
    const{
        load,     
        services
    }=React.useContext(ShopContext)
    return (        
        <div className="App"> 
                <Header/> 
                <main className='App-main'>                        
                    <article>
                        <img src={image_main_1} alt='imagen corte de barba'className="img-main"/>
                        <p>  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque recusandae veniam est maiores eum </p>
                    </article>
                    <section id="servicios" className='servicios'>
                            <div className="servicios-title"><h1>Servicios</h1></div>
                            {load? <ServiceLoading/>: services.map(service=>(
                            <Service key={service.id} id={service.id} name={service.nombreservicio} price={service.valorservicio} image={service.imagen}/>    
                            ))}                                    
                    </section>
                    <section id="container-aboutUs">
                        <h1>Sobre Nosotros</h1>
                        <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque recusandae veniam est maiores eum temporibus commodi quasi aperiam consectetur, repudiandae ea perferendis ipsa ipsum tenetur excepturi autem ex aliquid necessitatibus.
                        Ab aut doloremque iste dolorum dolore numquam deleniti quibusdam debitis ipsum inventore distinctio, nobis optio nam aspernatur? Iusto dolore quas quisquam eaque, totam dolorum voluptas aperiam assumenda, tempora labore est!
                        Maxime commodi dolor at nesciunt molestiae nisi recusandae quidem quae minima alias laboriosam modi in accusantium quibusdam incidunt consectetur, voluptatum asperiores dolore minus? Dolorum, ipsam quos sapiente tenetur sint animi?
                        Nostrum, incidunt et quibusdam molestias corporis accusamus? Saepe deleniti eligendi laboriosam eum sequi? Adipisci porro, dicta inventore aut molestias, officiis blanditiis sed corrupti officia ex sit quidem nisi harum quod.

                        </p>

                    </section>
                    <section id="container-contact">
                        <h1>Contacto</h1>
                        <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque recusandae veniam est maiores eum temporibus commodi quasi aperiam consectetur, repudiandae ea perferendis ipsa ipsum tenetur excepturi autem ex aliquid necessitatibus.
                        
                        </p>
                    </section>
                </main>
                <footer className='App-footer'>
                    © 2024 Fernando García
                </footer>
    </div>
 
    )
}