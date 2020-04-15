function updateMap()
 {   console.log("Updating map with realtime data ")
    fetch("/data.json")
        .then(response => response.json())
        .then(rsp => {
            console.log(rsp.data)
            rsp.data.forEach(element => {
                
                Long = element.Long;
                Lat = element.Lat;
                cases = element.Confirmed;
                if(cases>0 && cases<1000)
                {
                    color = "Yellow"
                }
                else if(cases>=1000 && cases<10000)
                {
                    color = "Green"
                }
                else if(cases>=10000 && cases<15000)
                {
                    color = "Blue"
                }
                else if(cases>=15000 && cases<20000)
                {
                    color = "Black"
                }
                else

                {
                    color = "Red"
                }



                new mapboxgl.Marker({
                    draggable: false,
                    color: color

                })
                    .setLngLat([Long,Lat])
                    .addTo(map);

            });

        })
}
let interval=2000;
setInterval(updateMap,interval);

updateMap();