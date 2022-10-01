


const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyText = `It was 94 fahrenheit outside, so xItem went for a walk. When they got to yItem, they stared in horror for a few moments, then zItem. Bob saw the whole thing, but was not surprised — xItem weighs 300 pounds, and it was a hot day.`;

const insertX = ['Willy the Goblin','Big Daddy', 'Father Christmas'];

const insertY = ['the soup kitchen','Disneyland','the White House'];

const insertZ = ['spontaneously combusted','melted into a puddle on the sidewalk','turned into a slug and crawled away'];



randomize.addEventListener('click', result);

function result() {

  if(customName.value !== '') {
    const name = customName.value;
    newStory = storyText;
    let xItem = randomValueFromArray(insertX);
    let yItem = randomValueFromArray(insertY);
    let zItem = randomValueFromArray(insertZ);
    newStory = storyText.replaceAll('xItem',xItem);
    newStory = newStory.replace('yItem',yItem);
    newStory = newStory.replace('zItem',zItem);
    newStory = newStory.replace('Bob',name);
    

  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(300/14) + ' stone';
    const temperature =  Math.round((94 - 32) * 5/9 ) + ' centigrade';
    newStory = newStory.replace('94 fahrenheit',temperature);
    newStory = newStory.replace('300 pounds',weight);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}