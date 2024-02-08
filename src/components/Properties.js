import './Properties.css';
import img1 from '../img/properties_bg.webp';
import img2 from '../img/property2.jpg';
import img3 from '../img/property3.png';

function Properties(){
    return(
    <div>



        <div className="card-group">
  <div className="card">
    <img src={img1} className="card-img-top" alt="..."/>
    <div className="card-body">
    <h3>The palace</h3>
      <p className="card-text">Gota Ahmedabad</p>
      <p>Bh shanti mall, nr goras road , 348722</p>
      
    </div>
  </div>
  <div className="card">
    <img src={img2} className="card-img-top" alt="..."/>
    <div className="card-body">
    <h3>The palace</h3>
      <p className="card-text">Nava Naroda</p>
      <p>Opp Sthaptya residency , nr manosharvilla cross road , 382345</p>
    </div>
  </div>
  <div className="card">
    <img src={img3} className="card-img-top" alt="..."/>
    <div className="card-body">
    <h3>The palace</h3>
      <p className="card-text">Science City</p>
      <p>NR sukan mall , science city road , nr sola ,328877</p>
      </div>
        </div>
        </div>

        <div className="heading">
            <span>Recent</span>
            <h2>Our featured properties</h2>
            <p>Explore from Apartments, builder floors, villas and more <br/> Enjoy your whole day</p>
        </div>
</div>

    );
}

export default Properties;