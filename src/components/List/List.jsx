import React, {useEffect, useState} from 'react';
import Api from '../../Api/Api';



function List({profile}){
    // data API
    const [HealthCenterList, setHealthCenterList] = useState([]);
    const [PharmacyList, setPharmacyList] = useState([]);
    const [HospitalList, setHospitalList] = useState([]);
    const [ReloadFav, setReloadFav] = useState(true)

    // modification state chronic disease
    useEffect(() => {
        getFavList()
    });

    // Get fav list for the profile
    const getFavList = () => {
        if(ReloadFav === true){
            Api.get('/api/centre_de_santes?Profil=' + profile.id)
                .then(response => {
                    setHealthCenterList(response.data['hydra:member']);
                });

            Api.get('/api/pharmacies?Profil=' + profile.id)
                .then(response => {
                    setPharmacyList(response.data['hydra:member']);
                });

            Api.get('/api/hopitals?Profil=' + profile.id)
                .then(response => {
                    setHospitalList(response.data['hydra:member']);
                });

            setReloadFav(false);
        }
    };

    let healthCenterToShow = [];
    healthCenterToShow = HealthCenterList.map(item => {
        let timeStart = new Date(item.timeStart);
        let timeEnd = new Date(item.timeEnd);

        const rewriteTime = (time) => {
            if(time.toString().length === 1){
                return '0' + time;
            }else{
                return time;
            }
        };

        return (
            <div className="favItem" key={item.id}>
                <div className="favName">{item.name}</div>
                <hr/>
                <div className="moreInfo">
                    <div>{item.address}</div>
                    <div>{item.phone}</div>
                    <div>{rewriteTime(timeStart.getHours() - 1)}h{rewriteTime(timeStart.getMinutes())} - {rewriteTime(timeEnd.getHours() - 1)}h{rewriteTime(timeEnd.getMinutes())}</div>
                </div>
            </div>
        )
    });

    let PharmacyToShow = [];
    PharmacyToShow = PharmacyList.map(item => {
        return (
            <div className="favItem" key={item.id}>
                <div className="favName">{item.name}</div>
                <hr/>
                <div className="moreInfo">
                    <div>{item.address}</div>
                    <div>{item.phone}</div>
                    <div>{item.horraires[0]}</div>
                </div>
            </div>
        )
    });

    let HospitalToShow = [];
    HospitalToShow = HospitalList.map(item => {
        console.log(item);
        return (
            <div className="favItem" key={item.id}>
                <div className="favName">{item.name}</div>
                <hr/>
                <div className="moreInfo">
                    <div>{item.address}</div>
                    <div>{item.telephone}</div>
                </div>
            </div>
        )
    });

    getFavList();


    // Render of component List
    return (
        <div className="list">
            <h2>List of {profile.name} {profile.surname}</h2>
            <hr/>

            <h3>Health center : </h3>
            {healthCenterToShow}

            <h3>Pharmacy : </h3>
            {PharmacyToShow}

            <h3>Hospital : </h3>
            {HospitalToShow}
        </div>
    )
}



export default List
