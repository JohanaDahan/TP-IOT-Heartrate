function InstantHeartrate(props){
    const {data} = props
    let couleur = "BPMNormal"
  
    if (!data){return(<p>Aucune valeur</p>)}
  
    if(data.heartrate > 40 && data.heartrate < 70){
      couleur = "BPMTropBas"
    }
    if(data.heartrate > 160){
      couleur = "BPMTropEleve"
    }
    else{
        couleur= "BPMNormal"
        }
    return(
      <div className={couleur}> {data.heartrate} BPM </div>
    )
  }
  
  export default InstantHeartrate;