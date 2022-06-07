function scuberGreetingForFeet(){
  // Write your code here!
  if(feet <= 400){
    return 'This one is on me!';
  }
  else if(feet > 2000 && feet< 2501){
    return 'I will gladly take your thirty bucks.';
  }
  else if (feet> 2500){
    return 'No can do.';
  }
}

function ternaryCheckCity(){
  // Write your code here!
  return city === 'NYC'? "OK, sounds good.": "No go.";
}

function switchOnCharmFromTip(){
  // Write your code here!
  switch(tip){
    case 'generous':
      return 'Thank you.';
      break;

      case 'not as generous':
        return 'Thank you.';
        break;

        case 'thanks for everything':
          return 'Bye';
          break;
  }
}