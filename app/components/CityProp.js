const React = require('react'),
    // Modules
    ContactBox = require('./Contact/ContactBox'),
    DMCILogo = require('./DmciLogo');

class CityProp extends React.Component {
    render() {
        const cities = [
            {
                "cityName": "Las Piñas",
                "id": "lasPinasSection",
                "photo": "app/img/locations/lasPinas.jpg",
                "link": "#lasPinasSection",
                "lists": [{
                    "properties": []
                }, {
                    "title": "Ready for Occupancy",
                    "properties": [{
                        "propName": "Maricielo Villas",
                        "link": "app/properties/MaricieloVillasLasPinas.html#mainSection",
                        "namePhoto": "app/img/propertiesName/lasPinas-MaricieloVillas.jpg",
                        "mapPhoto": "app/img/propertiesMap/lasPinas-MaricieloVillas.jpg",
                        "address": "Casimiro Avenue, Las Piñas"
                    }],
                    "collapse": "collapseLasPinas",
                    "color": "readOc"
                }]
            },
            {
                "cityName": "Makati",
                "id": "makatiSection",
                "photo": "app/img/locations/makati.jpg",
                "link": "#makatiSection",
                "lists": [{
                    "title": "Under Construction",
                    "properties": [{
                        "propName": "Brio Tower",
                        "link": "app/properties/BrioTowerMakati.html#mainSection",
                        "namePhoto": "app/img/propertiesName/makati-BrioTower.jpg",
                        "mapPhoto": "app/img/propertiesMap/makati-BrioTower.jpg",
                        "address": "Guadalupe Viejo, Makati City"
                    }],
                    "collapse": "collapseMakati",
                    "color": "unCons"
                }, {
                    "properties": []
                }]
            },
            {
                "cityName": "Mandaluyong",
                "id": "mandaluyongSection",
                "photo": "app/img/locations/mandaluyong.jpg",
                "link": "#mandaluyongSection",
                "lists": [
                    {
                        "properties": []
                    },
                    {
                        "title": "Ready for Occupancy",
                        "properties": [{
                            "propName": "Dansalan Gardens",
                            "link": "app/properties/DansalanGardensCondoMandaluyong.html#mainSection",
                            "namePhoto": "app/img/propertiesName/mandaluyong-DansalanGardens.jpg",
                            "mapPhoto": "app/img/propertiesMap/mandaluyong-DansalanGardens.jpg",
                            "address": "M. Vicente St., Mandaluyong City"
                        }, {
                            "propName": "Flair Towers",
                            "link": "app/properties/FlairTowersMandaluyong.html#mainSection",
                            "namePhoto": "app/img/propertiesName/mandaluyong-FlairTowers.jpg",
                            "mapPhoto": "app/img/propertiesMap/mandaluyong-FlairTowers.jpg",
                            "address": "Reliance St. Corner Pines Highway Hills, Mandaluyong City"
                        }, {
                            "propName": "Tivoli Garden",
                            "link": "app/properties/TivoliGardenResidencesMandaluyong.html#mainSection",
                            "namePhoto": "app/img/propertiesName/mandaluyong-TivoliGarden.jpg",
                            "mapPhoto": "app/img/propertiesMap/mandaluyong-TivoliGardenResidences.jpg",
                            "address": "Coronoado Street, Brgy. Hulo, Mandaluyong City"
                        }],
                        "collapse": "collapseMandaluyong",
                        "color": "readOc"
                    }]
            },
            {
                "cityName": "Muntinlupa",
                "id": "muntinlupaSection",
                "photo": "app/img/locations/muntinlupa.jpg",
                "link": "#muntinlupaSection",
                "lists": [{
                    "properties": []
                }, {
                    "title": "Ready for Occupancy",
                    "properties": [{
                        "propName": "Rhapsody Residences",
                        "link": "app/properties/RhapsodyResidencesMuntinlupa.html#mainSection",
                        "namePhoto": "app/img/propertiesName/muntinlupa-Rhapsody.jpg",
                        "mapPhoto": "app/img/propertiesMap/muntinlupa-Rhapsody.jpg",
                        "address": "East Service Road, Barrio Cupang, Muntinlupa City"
                    }],
                    "collapse": "collapseMuntinlupa",
                    "color": "readOc"
                }]
            },
            {
                "cityName": "Parañaque",
                "id": "paranaqueSection",
                "photo": "app/img/locations/paranaque.jpg",
                "link": "#paranaqueSection",
                "lists": [{
                    "title": "Under Construction",
                    "properties": [{
                        "propName": "Calathea Place",
                        "link": "app/properties/CalatheaPlaceParanaque.html#mainSection",
                        "namePhoto": "app/img/propertiesName/paranaque-CalatheaPlace.jpg",
                        "mapPhoto": "app/img/propertiesMap/paranaque-CalatheaPlace.jpg",
                        "address": "Dr. A. Santos Ave. Parañaque City"
                    }, {
                        "propName": "Oak Harbor Residences",
                        "link": "app/properties/OakHarborResidencesParanaque.html#mainSection",
                        "namePhoto": "app/img/propertiesName/paranaque-OakHarbor.jpg",
                        "mapPhoto": "app/img/propertiesMap/paranaque-OakHarborResidences.jpg",
                        "address": "Jackson Ave. Asiaworld City, Brgy. Don Galo, Parañaque City"
                    }],
                    "collapse": "collapse1Paranaque",
                    "color": "unCons"
                }, {
                    "title": "Ready for Occupancy",
                    "properties": [{
                        "propName": "Arista Place",
                        "link": "app/properties/AristaPlaceParanaque.html#mainSection",
                        "namePhoto": "app/img/propertiesName/paranaque-AristaPlace.jpg",
                        "mapPhoto": "app/img/propertiesMap/paranaque-AristaPlace.jpg",
                        "address": "JP Rizal St., Brgy. Sto. Niño, Parañaque City"
                    }, {
                        "propName": "Asteria Residences",
                        "link": "app/properties/AsteriaResidencesParanaque.html#mainSection",
                        "namePhoto": "app/img/propertiesName/paranaque-AsteriaResidences.jpg",
                        "mapPhoto": "app/img/propertiesMap/paranaque-AsteriaResidences.jpg",
                        "address": "San Pedro Street , San Antonio Valley 2 Brgy San Isidro, Sucat, Parañaque City"
                    }, {
                        "propName": "Raya Garden",
                        "link": "app/properties/RayaGardenCondoParanaque.html#mainSection",
                        "namePhoto": "app/img/propertiesName/paranaque-RayaGarden.jpg",
                        "mapPhoto": "app/img/propertiesMap/paranaque-RayaGarden.jpg",
                        "address": "West Service Road, Merville, Parañaque City"
                    }, {
                        "propName": "Siena Park Residences",
                        "link": "app/properties/SienaParkResidencesParanaque.html#mainSection",
                        "namePhoto": "app/img/propertiesName/paranaque-SienaPark.jpg",
                        "mapPhoto": "app/img/propertiesMap/paranaque-SienaParkResidences.jpg",
                        "address": "West Service Road, Sun Valley, Bicutan, Parañaque City"
                    }],
                    "collapse": "collapse2Paranaque",
                    "color": "readOc"
                }]
            },
            {
                "cityName": "Pasay",
                "id": "pasaySection",
                "photo": "app/img/locations/pasay.jpg",
                "link": "#pasaySection",
                "lists": [{
                    "title": "Under Construction",
                    "properties": [{
                        "propName": "Fairway Terraces",
                        "link": "app/properties/FairwayTerracesPasay.html#mainSection",
                        "namePhoto": "app/img/propertiesName/pasay-FairwayTerraces.jpg",
                        "mapPhoto": "app/img/propertiesMap/pasay-FairwayTerraces.jpg",
                        "address": "Villamor Airbase, Pasay City"
                    }],
                    "collapse": "collapse1Pasay",
                    "color": "unCons"
                }, {
                    "title": "Ready for Occupancy",
                    "properties": [{
                        "propName": "La Verti Residences",
                        "link": "app/properties/LaVertiResidencesPasay.html#mainSection",
                        "namePhoto": "app/img/propertiesName/pasay-LaVerti.jpg",
                        "mapPhoto": "app/img/propertiesMap/pasay-LaVertiResidences.jpg",
                        "address": "Taft Avenue, Pasay City"
                    }],
                    "collapse": "collapse2Pasay",
                    "color": "readOc"
                }]
            },
            {
                "cityName": "Pasig",
                "id": "pasigSection",
                "photo": "app/img/locations/pasig.jpg",
                "link": "#pasigSection",
                "lists": [{
                    "title": "Under Construction",
                    "properties": [{
                        "propName": "Brixton Place",
                        "link": "app/properties/BrixtonPlacePasig.html#mainSection",
                        "namePhoto": "app/img/propertiesName/pasig-BrixtonPlace.jpg",
                        "mapPhoto": "app/img/propertiesMap/pasig-BrixtonPlace.jpg",
                        "address": "27 Brixton St., Kapitolyo, Pasig City"
                    }, {
                        "propName": "Lumiere Residences",
                        "link": "app/properties/LumiereResidencesPasig.html#mainSection",
                        "namePhoto": "app/img/propertiesName/pasig-LumiereResidences.jpg",
                        "mapPhoto": "app/img/propertiesMap/pasig-LumiereResidences.jpg",
                        "address": "Pasig Blvd., cor. Shaw Blvd., Pasig City"
                    }, {
                        "propName": "Mirea Residences",
                        "link": "app/properties/MireaResidencesPasig.html#mainSection",
                        "namePhoto": "app/img/propertiesName/pasig-MireaResidences.jpg",
                        "mapPhoto": "app/img/propertiesMap/pasig-MireaResidences.jpg",
                        "address": "Amang Rodriquez Ave., Brgy Santolan, Pasig City"
                    }, {
                        "propName": "Prisma Residences",
                        "link": "app/properties/PrismaResidencesPasig.html#mainSection",
                        "namePhoto": "app/img/propertiesName/pasig-PrismaResidences.jpg",
                        "mapPhoto": "app/img/propertiesMap/pasig-PrismaResidences.jpg",
                        "address": "Pasig Boulevard, Brgy. Bagong Ilog, 1600"
                    }, {
                        "propName": "Sheridan Towers",
                        "link": "app/properties/SheridanTowersPasig.html#mainSection",
                        "namePhoto": "app/img/propertiesName/pasig-SheridanTowers.jpg",
                        "mapPhoto": "app/img/propertiesMap/pasig-SheridanTowers.jpg",
                        "address": "Sheridan St., Pasig City"
                    }],
                    "collapse": "collapse1Pasig",
                    "color": "unCons"
                }, {
                    "title": "Ready for Occupancy",
                    "properties": [{
                        "propName": "East Raya Gardens",
                        "link": "app/properties/EastRayaGardensPasig.html#mainSection",
                        "namePhoto": "app/img/propertiesName/pasig-EastRayaGardens.jpg",
                        "mapPhoto": "app/img/propertiesMap/pasig-EastRayaGardens.jpg",
                        "address": "One Mercedes Avenue, Corner Luis St. Brgy. Mercedes, Pasig City"
                    }, {
                        "propName": "Levina Place",
                        "link": "app/properties/LevinaPlacePasig.html#mainSection",
                        "namePhoto": "app/img/propertiesName/pasig-LevinaPlace.jpg",
                        "mapPhoto": "app/img/propertiesMap/pasig-LevinaPlace.jpg",
                        "address": "Jenny's Ave., Pasig City"
                    }],
                    "collapse": "collapse2Pasig",
                    "color": "readOc"
                }]
            },
            {
                "cityName": "Taguig",
                "id": "taguigSection",
                "photo": "app/img/locations/taguig.jpg",
                "link": "#taguigSection",
                "lists": [{
                    "title": "Under Construction",
                    "properties": [{
                        "propName": "Maple Place",
                        "link": "app/properties/MaplePlaceTaguig.html#mainSection",
                        "namePhoto": "app/img/propertiesName/taguig-MaplePlace.jpg",
                        "mapPhoto": "app/img/propertiesMap/taguig-MaplePlace.jpg",
                        "address": "Acacia Estates, Taguig City"
                    }, {
                        "propName": "Ivory Wood",
                        "link": "app/properties/IvoryWoodTaguig.html#mainSection",
                        "namePhoto": "app/img/propertiesName/taguig-Ivorywood.jpg",
                        "mapPhoto": "app/img/propertiesMap/taguig-IvoryWood.jpg",
                        "address": "Acacia Estates, Taguig City"
                    }, {
                        "propName": "The Birchwood",
                        "link": "app/properties/TheBirchwoodTaguig.html#mainSection",
                        "namePhoto": "app/img/propertiesName/taguig-TheBirchwood.jpg",
                        "mapPhoto": "app/img/propertiesMap/taguig-TheBirchwood.jpg",
                        "address": "Acacia Estates, Taguig City"
                    }],
                    "collapse": "collapse1Taguig",
                    "color": "unCons"
                }, {
                    "title": "Ready for Occupancy",
                    "properties": [{
                        "propName": "Cedar Crest",
                        "link": "app/properties/CedarCrestTaguig.html#mainSection",
                        "namePhoto": "app/img/propertiesName/taguig-CedarCrest.jpg",
                        "mapPhoto": "app/img/propertiesMap/taguig-CedarCrest.jpg",
                        "address": "Acacia Estates, Taguig City"
                    }, {
                        "propName": "Cypress Tower",
                        "link": "app/properties/CypressTowersTaguig.html#mainSection",
                        "namePhoto": "app/img/propertiesName/taguig-CypressTowers.jpg",
                        "mapPhoto": "app/img/propertiesMap/taguig-CypressTowers.jpg",
                        "address": "C5 Corner Diego Silang St., Taguig City"
                    }, {
                        "propName": "Verawood Residences",
                        "link": "app/properties/VerawoodResidencesTaguig.html#mainSection",
                        "namePhoto": "app/img/propertiesName/taguig-Verawood.jpg",
                        "mapPhoto": "app/img/propertiesMap/taguig-VerawoodResidences.jpg",
                        "address": "Acacia Estates, Taguig City"
                    }],
                    "collapse": "collapse2Taguig",
                    "color": "readOc"
                }]
            }];

        return (
            <div>
                {cities.map(function(city){
                    return (
                        <section key={city.cityName} id={city.id} className="container-fluid">
                            <ContactBox />

                            <div className="cityProp">
                                <DMCILogo />

                                <h2 className="text-left" style={{ background: "url('app/img/icons/locationIcon.png') 8px 15px/25px no-repeat padding-box" }}>{city.cityName} Condo</h2>
                                <hr />

                                {city.lists.map(function(subSec, index){
                                    return (
                                        <div key={index} className="panel-group accordion">
                                            <div className="panel panel-default" style={subSec.properties[0] === undefined ? {display: 'none'} : {display: 'block'}}>
                                                <div className={`panel-heading ${subSec.color}`}>
                                                    <a data-toggle="collapse" data-parent="#accordion" href={`#${subSec.collapse}`}>
                                                        <h4 className="panel-title">{subSec.title}</h4>
                                                    </a>
                                                </div>

                                                <div id={subSec.collapse} className="panel-collapse collapse in">
                                                    <div className="panel-body text-center">
                                                        {subSec.properties.map(function(condoLoc){
                                                            return (
                                                                <div key={condoLoc.propName} >
                                                                    <h5>{condoLoc.propName}</h5>
                                                                    <div className="propName">
                                                                        <a target="_blank" href={condoLoc.link}>
                                                                            <img src={condoLoc.namePhoto} alt={condoLoc.propName} className="img-responsive" />
                                                                            <img src={condoLoc.mapPhoto} alt={condoLoc.propName} className="img-responsive" />
                                                                            <br />
                                                                            <p className="infoBtn">More Info</p>
                                                                            <p className="text-left">Location:&nbsp; {condoLoc.address}</p>
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            );
                                                        })}
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </section>
                    );
                })}
            </div>
        )
    }
}

module.exports = CityProp;
