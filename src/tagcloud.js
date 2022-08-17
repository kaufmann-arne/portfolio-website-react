import 'https://code.jquery.com/jquery-3.4.1.js'

function TagCloud() {
$(document).ready(function(){
            var entries = [
                    { label : 'HTML' },
                    { label : 'JavaScript' },
                    { label : 'React' },
                    { label : 'CSS3' },
                    { label : 'Python' },
                    { label : 'Three JS' },
                    { label : 'Node JS' },
                    { label : 'Typescript' },
                    { label : 'npm' },
                    { label : 'GSAP' },
                    { label : 'Blender' },
                    { label : 'Solidity' },
                    { label : 'Moralis' },
                    { label : 'Hardhat' },
                    { label : 'Graph' }
                ];

                var settings = {
                    entries : entries,
                    width: 640,
                    height: 480,
                    radius: '80%',
                    radiusMin: 75,
                    bgDraw: true,
                    bgColor: '#1d1d1d',
                    opacityOver: 1.00,
                    opacityOut: 0.05,
                    opacitySpeed: 6,
                    fov: 800,
                    speed: 1,
                    fontFamily: 'Open, Sans, sans-serif',
                    fontSize: '20',
                    fontColor: '#08fdd8',
                    fontWeight: 'bold',
                    fontStyle: 'normal',
                    fontStretch: 'normal',
                    fontToUpperCase: true
                };
                $('#tag').svg3DTagCloud(settings);
          });
}

export default TagCloud;