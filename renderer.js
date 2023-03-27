const infomation = document.getElementById('info')
infomation.innerText = `this app is using chrome (v${versions.chrome()}), Node.js (v${versions.node()}), and Electron (v${versions.electron()})`

console.log(versions)

const func = async () => {
  const response = await window.versions.ping()
  console.log(response) // prints out 'pong'
}

func()

const audiooutputDom = document.getElementById('audiooutput')
let audiooutputs = []
navigator.mediaDevices.enumerateDevices().then(res => {
  audiooutputs = audiooutputs.concat(res.filter(item => item.kind === 'audiooutput'))
  audiooutputDom.innerHTML = audiooutputs.reduce((res,item,index) =>res +=  `<option value="${index}">${item.label}</option>`,'')
}).catch(err=>{
  console.err(err)
})

var context = new window.AudioContext()
const playMp3 = async () => {
  const response = await window.versions.getMp3()
  console.log(response) // prints out 'pong'
  context.decodeAudioData(response, buffer=> {
    var source = context.createBufferSource()
    source.buffer = buffer
    source.loop = true; //循环播放
    source.connect(context.destination);
    source.start(0); //立即播放
  })
}
window.onload = function (){
  audiooutputDom.addEventListener('change', e => {
    const index = parseInt(e.target.value)
    const device = audiooutputs.find((item,idx) => idx === index)
    console.log(device)
    context.setSinkId(device.deviceId)
  })

  playMp3()
}