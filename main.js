let latitude=22.7868542, longitude=88.3643296;
mapboxgl.accessToken = 'pk.eyJ1IjoiYW5vbnltb3VzLWJveSIsImEiOiJjbGI1MHdpa2swMjhvM29tc2R1bjFhcDNuIn0.NfTzCh5AxefHS69a7t9iSA'

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [longitude, latitude],
    zoom: 16
});

map.addControl(
    new mapboxgl.GeolocateControl({
        position: {enableHighAccuracy: true},
        trackUserLocation: true
    })
)

map.addControl(
    new MapboxDirections({
        accessToken: mapboxgl.accessToken
    }),
    'top-left'
)