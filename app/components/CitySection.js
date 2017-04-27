const React = require('react'),
    // Modules
    CityProp = require('./CityProp'),
    ContactBox = require('./Contact/ContactBox'),
    DMCILogo = require('./DmciLogo'),
    Footer = require('./Menu/Footer');

class CitySection extends React.Component {
    render() {
        window.scrollTo(0, 0);

        const cities = [
                {
                    "cityName": "Las Piñas",
                    "id": "lasPinasSection",
                    "photo": "app/img/locations/lasPinas.jpg",
                    "link": "#lasPinasSection",
                    "lists": [{
                        "properties": [],
                        "show": false
                    }, {
                        "title": "Ready for Occupancy",
                        "properties": [{
                            "propName": "Maricielo Villas",
                            "link": "properties/MaricieloVillasLasPinas.html#mainSection",
                            "namePhoto": "app/img/propertiesName/lasPinas-MaricieloVillas.jpg",
                            "mapPhoto": "app/img/propertiesMap/lasPinas-MaricieloVillas.jpg",
                            "address": "Casimiro Avenue, Las Piñas"
                        }],
                        "collapse": "collapseLasPinas",
                        "color": "readOc",
                        "show": true
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
                            "link": "properties/BrioTowerMakati.html#mainSection",
                            "namePhoto": "app/img/propertiesName/makati-BrioTower.jpg",
                            "mapPhoto": "app/img/propertiesMap/makati-BrioTower.jpg",
                            "address": "Guadalupe Viejo, Makati City"
                        }],
                        "collapse": "collapseMakati",
                        "color": "unCons",
                        "show": true
                    }, {
                        "properties": [],
                        "show": false
                    }]
                },
                {
                    "cityName": "Mandaluyong",
                    "id": "mandaluyongSection",
                    "photo": "app/img/locations/mandaluyong.jpg",
                    "link": "#mandaluyongSection",
                    "lists": [
                        {
                            "properties": [],
                            "show": false
                        },
                        {
                            "title": "Ready for Occupancy",
                            "properties": [{
                                "propName": "Dansalan Gardens",
                                "link": "properties/DansalanGardensCondoMandaluyong.html#mainSection",
                                "namePhoto": "app/img/propertiesName/mandaluyong-DansalanGardens.jpg",
                                "mapPhoto": "app/img/propertiesMap/mandaluyong-DansalanGardens.jpg",
                                "address": "M. Vicente St., Mandaluyong City"
                            }, {
                                "propName": "Flair Towers",
                                "link": "properties/FlairTowersMandaluyong.html#mainSection",
                                "namePhoto": "app/img/propertiesName/mandaluyong-FlairTowers.jpg",
                                "mapPhoto": "app/img/propertiesMap/mandaluyong-FlairTowers.jpg",
                                "address": "Reliance St. Corner Pines Highway Hills, Mandaluyong City"
                            }, {
                                "propName": "Tivoli Garden",
                                "link": "properties/TivoliGardenResidencesMandaluyong.html#mainSection",
                                "namePhoto": "app/img/propertiesName/mandaluyong-TivoliGarden.jpg",
                                "mapPhoto": "app/img/propertiesMap/mandaluyong-TivoliGardenResidences.jpg",
                                "address": "Coronoado Street, Brgy. Hulo, Mandaluyong City"
                            }],
                            "collapse": "collapseMandaluyong",
                            "color": "readOc",
                            "show": true
                        }]
                },
                {
                    "cityName": "Muntinlupa",
                    "id": "muntinlupaSection",
                    "photo": "app/img/locations/muntinlupa.jpg",
                    "link": "#muntinlupaSection",
                    "lists": [{
                        "properties": [],
                        "show": false
                    }, {
                        "title": "Ready for Occupancy",
                        "properties": [{
                            "propName": "Rhapsody Residences",
                            "link": "properties/RhapsodyResidencesMuntinlupa.html#mainSection",
                            "namePhoto": "app/img/propertiesName/muntinlupa-Rhapsody.jpg",
                            "mapPhoto": "app/img/propertiesMap/muntinlupa-Rhapsody.jpg",
                            "address": "East Service Road, Barrio Cupang, Muntinlupa City"
                        }],
                        "collapse": "collapseMuntinlupa",
                        "color": "readOc",
                        "show": true
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
                            "link": "properties/CalatheaPlaceParanaque.html#mainSection",
                            "namePhoto": "app/img/propertiesName/paranaque-CalatheaPlace.jpg",
                            "mapPhoto": "app/img/propertiesMap/paranaque-CalatheaPlace.jpg",
                            "address": "Dr. A. Santos Ave. Parañaque City"
                        }, {
                            "propName": "Oak Harbor Residences",
                            "link": "properties/OakHarborResidencesParanaque.html#mainSection",
                            "namePhoto": "app/img/propertiesName/paranaque-OakHarbor.jpg",
                            "mapPhoto": "app/img/propertiesMap/paranaque-OakHarborResidences.jpg",
                            "address": "Jackson Ave. Asiaworld City, Brgy. Don Galo, Parañaque City"
                        }],
                        "collapse": "collapse1Paranaque",
                        "color": "unCons",
                        "show": true
                    }, {
                        "title": "Ready for Occupancy",
                        "properties": [{
                            "propName": "Arista Place",
                            "link": "properties/AristaPlaceParanaque.html#mainSection",
                            "namePhoto": "app/img/propertiesName/paranaque-AristaPlace.jpg",
                            "mapPhoto": "app/img/propertiesMap/paranaque-AristaPlace.jpg",
                            "address": "JP Rizal St., Brgy. Sto. Niño, Parañaque City"
                        }, {
                            "propName": "Asteria Residences",
                            "link": "properties/AsteriaResidencesParanaque.html#mainSection",
                            "namePhoto": "app/img/propertiesName/paranaque-AsteriaResidences.jpg",
                            "mapPhoto": "app/img/propertiesMap/paranaque-AsteriaResidences.jpg",
                            "address": "San Pedro Street , San Antonio Valley 2 Brgy San Isidro, Sucat, Parañaque City"
                        }, {
                            "propName": "Raya Garden",
                            "link": "properties/RayaGardenCondoParanaque.html#mainSection",
                            "namePhoto": "app/img/propertiesName/paranaque-RayaGarden.jpg",
                            "mapPhoto": "app/img/propertiesMap/paranaque-RayaGarden.jpg",
                            "address": "West Service Road, Merville, Parañaque City"
                        }, {
                            "propName": "Siena Park Residences",
                            "link": "properties/SienaParkResidencesParanaque.html#mainSection",
                            "namePhoto": "app/img/propertiesName/paranaque-SienaPark.jpg",
                            "mapPhoto": "app/img/propertiesMap/paranaque-SienaParkResidences.jpg",
                            "address": "West Service Road, Sun Valley, Bicutan, Parañaque City"
                        }],
                        "collapse": "collapse2Paranaque",
                        "color": "readOc",
                        "show": true
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
                            "link": "properties/FairwayTerracesPasay.html#mainSection",
                            "namePhoto": "app/img/propertiesName/pasay-FairwayTerraces.jpg",
                            "mapPhoto": "app/img/propertiesMap/pasay-FairwayTerraces.jpg",
                            "address": "Villamor Airbase, Pasay City"
                        }],
                        "collapse": "collapse1Pasay",
                        "color": "unCons",
                        "show": true
                    }, {
                        "title": "Ready for Occupancy",
                        "properties": [{
                            "propName": "La Verti Residences",
                            "link": "properties/LaVertiResidencesPasay.html#mainSection",
                            "namePhoto": "app/img/propertiesName/pasay-LaVerti.jpg",
                            "mapPhoto": "app/img/propertiesMap/pasay-LaVertiResidences.jpg",
                            "address": "Taft Avenue, Pasay City"
                        }],
                        "collapse": "collapse2Pasay",
                        "color": "readOc",
                        "show": true
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
                            "link": "properties/BrixtonPlacePasig.html#mainSection",
                            "namePhoto": "app/img/propertiesName/pasig-BrixtonPlace.jpg",
                            "mapPhoto": "app/img/propertiesMap/pasig-BrixtonPlace.jpg",
                            "address": "27 Brixton St., Kapitolyo, Pasig City"
                        }, {
                            "propName": "Lumiere Residences",
                            "link": "properties/LumiereResidencesPasig.html#mainSection",
                            "namePhoto": "app/img/propertiesName/pasig-LumiereResidences.jpg",
                            "mapPhoto": "app/img/propertiesMap/pasig-LumiereResidences.jpg",
                            "address": "Pasig Blvd., cor. Shaw Blvd., Pasig City"
                        }, {
                            "propName": "Mirea Residences",
                            "link": "properties/MireaResidencesPasig.html#mainSection",
                            "namePhoto": "app/img/propertiesName/pasig-MireaResidences.jpg",
                            "mapPhoto": "app/img/propertiesMap/pasig-MireaResidences.jpg",
                            "address": "Amang Rodriquez Ave., Brgy Santolan, Pasig Cit"
                        }, {
                            "propName": "Sheridan Towers",
                            "link": "properties/SheridanTowersPasig.html#mainSection",
                            "namePhoto": "app/img/propertiesName/pasig-SheridanTowers.jpg",
                            "mapPhoto": "app/img/propertiesMap/pasig-SheridanTowers.jpg",
                            "address": "Sheridan St., Pasig City"
                        }],
                        "collapse": "collapse1Pasig",
                        "color": "unCons",
                        "show": true
                    }, {
                        "title": "Ready for Occupancy",
                        "properties": [{
                            "propName": "East Raya Gardens",
                            "link": "properties/EastRayaGardensPasig.html#mainSection",
                            "namePhoto": "app/img/propertiesName/pasig-EastRayaGardens.jpg",
                            "mapPhoto": "app/img/propertiesMap/pasig-EastRayaGardens.jpg",
                            "address": "One Mercedes Avenue, Corner Luis St. Brgy. Mercedes, Pasig City"
                        }, {
                            "propName": "Levina Place",
                            "link": "properties/LevinaPlacePasig.html#mainSection",
                            "namePhoto": "app/img/propertiesName/pasig-LevinaPlace.jpg",
                            "mapPhoto": "app/img/propertiesMap/pasig-LevinaPlace.jpg",
                            "address": "Jenny's Ave., Pasig City"
                        }],
                        "collapse": "collapse2Pasig",
                        "color": "readOc",
                        "show": true
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
                            "link": "properties/MaplePlaceTaguig.html#mainSection",
                            "namePhoto": "app/img/propertiesName/taguig-MaplePlace.jpg",
                            "mapPhoto": "app/img/propertiesMap/taguig-MaplePlace.jpg",
                            "address": "Acacia Estates, Taguig City"
                        }, {
                            "propName": "Ivory Wood",
                            "link": "properties/IvoryWoodTaguig.html#mainSection",
                            "namePhoto": "app/img/propertiesName/taguig-Ivorywood.jpg",
                            "mapPhoto": "app/img/propertiesMap/taguig-IvoryWood.jpg",
                            "address": "Acacia Estates, Taguig City"
                        }, {
                            "propName": "The Birchwood",
                            "link": "properties/TheBirchwoodTaguig.html#mainSection",
                            "namePhoto": "app/img/propertiesName/taguig-TheBirchwood.jpg",
                            "mapPhoto": "app/img/propertiesMap/taguig-TheBirchwood.jpg",
                            "address": "Acacia Estates, Taguig City"
                        }],
                        "collapse": "collapse1Taguig",
                        "color": "unCons",
                        "show": true
                    }, {
                        "title": "Ready for Occupancy",
                        "properties": [{
                            "propName": "Cedar Crest",
                            "link": "properties/CedarCrestTaguig.html#mainSection",
                            "namePhoto": "app/img/propertiesName/taguig-CedarCrest.jpg",
                            "mapPhoto": "app/img/propertiesMap/taguig-CedarCrest.jpg",
                            "address": "Acacia Estates, Taguig City"
                        }, {
                            "propName": "Cypress Tower",
                            "link": "properties/CypressTowersTaguig.html#mainSection",
                            "namePhoto": "app/img/propertiesName/taguig-CypressTowers.jpg",
                            "mapPhoto": "app/img/propertiesMap/taguig-CypressTowers.jpg",
                            "address": "C5 Corner Diego Silang St., Taguig City"
                        }, {
                            "propName": "Verawood Residences",
                            "link": "properties/VerawoodResidencesTaguig.html#mainSection",
                            "namePhoto": "app/img/propertiesName/taguig-Verawood.jpg",
                            "mapPhoto": "app/img/propertiesMap/taguig-VerawoodResidences.jpg",
                            "address": "Acacia Estates, Taguig City"
                        }],
                        "collapse": "collapse2Taguig",
                        "color": "readOc",
                        "show": true
                    }]
                }];

        return (
            <div>
                <section id="propertiesSection" className="container-fluid">
                    <ContactBox />

                    <div className="propSection">
                        <DMCILogo />

                        <h2 className="text-left" style={{ background: "url('app/img/icons/condoLogo.png') 0 3px/50px no-repeat padding-box" }}>PROPERTIES</h2>
                        <hr />

                        <div className="row text-center mainPage">
                            {cities.map(function(city){
                                return (
                                    <div key={city.cityName} className="col-md-3 col-sm-4 col-xs-6">
                                        <a href={city.link}>
                                            <img src={city.photo} alt={city.cityName} className="img-responsive" width="200" height="180" />
                                            <h3>{city.cityName}</h3>
                                        </a>
                                    </div>
                                );
                            })}
                        </div>

                    </div>
                </section>

                <CityProp />

                <Footer />
            </div>
            )
    }
}

module.exports = CitySection;
