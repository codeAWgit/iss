let earthImage
let issObj
let issArr = []

function setup(){
	createCanvas(1600,900)
    earthImage = loadImage('https://4.bp.blogspot.com/-jW9BWkBS15c/T0Jw1TT5x1I/AAAAAAAAASs/AjwBeg6p0CA/s1600/Earth+Map.jpg')
    mapISS()
    
}

function mapISS(){
    loadJSON('http://api.open-notify.org/iss-now.json', function (data){
        issObj = data 
        console.log(issObj)
    })
}

function mousePressed(){
    mapISS()
}


function draw(){
    background(earthImage)
    
    if(issObj){
        let lat = Number.parseFloat(issObj.iss_position.latitude)
        let long = Number.parseFloat(issObj.iss_position.longitude)

        lat = map(lat,-90,90,0,height)
        long = map(long,-180,180,0,width)
        
        ellipse(long,lat,12,12)
        
    }
    
    //setInterval(mapISS(), 8000)
}

