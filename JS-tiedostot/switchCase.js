function kortti(kortti)
{
  switch(kortti)
  {
    case "J":
        document.write("Annoit jätkän");
        break;
    case "Q":
        document.write("Annoit rouvan");
        break;
    case "K":
        document.write("Annoit kurkon");
        break;
    default:
        document.write("Annoit jotain muuta");
        break;
  }
}

function kuukausi(kuukausi)
{
  switch(kuukausi)
  {
  	case "Tammikuu":
    case "Maaliskuu":
    case "Toukokuu":
    case "Heinäkuu":
    case "Elokuu":
    case "Lokakuu":
    case "Joulukuu":
    	document.write("Kuukaudessa on 31 päivää");
      break;
    case "Huhtikuu":
    case "Kesäkuu":
    case "Syyskuu":
    case "Marraskuu":
    	document.write("Kuukaudessa on 30 päivää");
    	break;
    case "Helmikuu":
    	document.write("Kuukaudessa on 27/28 päivää");
    	break;
    default:
    	document.write("Annoit jotain muuta");
      break;
  }
}
