// authenticates you with the API standard library
// type `await lib.` to display API autocomplete
const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

/*
// you can write whatever javascript you'd like
// logs are visible from the [? Help] popup on right
for (let i = 0; i < 10; i++) {
  console.log(`A log! ${i}`);
}

// `context` is automatically populated with HTTP request data
// you can modify `context.params` test data via [Payload] below
let message = `hello ${context.params.name}`;

// endpoints are executed as functions, click [> Run] below to test
return message;
*/



//teal'c
if (context.params.event.content.match(/what/i)) {
  min = 1;  
  max = 10;  

  x = Math.random() * (max - min + 1) + min ;

  msg = "Indeed."
  if (x<3){
  msg="I am not certian."
  }
  if (x>8){
  msg="Indeed?"
  }
  
  //idk if this works
  await lib.discord.channels['@0.2.0'].messages.create({
    channel_id: context.params.event.channel_id,
    content:msg
  });

}



if (context.params.event.content.match(/star|space|alien/i)) {
  min = 1;  
  max = 10;  
  
  x = Math.random() * (max - min + 1) + min ;
  
  emj=`💫`
  if (x<5){
  emj=`🌟`
  }
  
  
let result = await lib.discord.channels['@0.2.0'].messages.reactions.create({
  emoji: emj,
  message_id: `${context.params.event.id}`,
  channel_id: `${context.params.event.channel_id}`
});
return result;
}


if (context.params.event.content.match(/lucy/i)) {
mgs="I am not Lucy."

}

if (context.params.event.content.match(/teal'c|tealc/i)) {
  //let messageContent = context.params.event.content.match(/hi|hey|hello|sup/i);

  min = 1;  
  max = 10;  
  
  x = Math.random() * (max - min + 1) + min ;
  
  msg = "On Chulak, when a great warrior retires from the field of battle, it is customary to sing a song of lament. Fortunately, we are not on Chulak."
  
  if (x>1){
  msg="I do not consume alcohol."
  }
  if (x>2){
  msg="A Serpent guard, a Horus guard, and a Setesh guard meet on a neutral planet. It is a tense moment. The Serpent guard’s eyes glow. The Horus guard’s beak glistens. The Setesh guard’s nose drips."
  
  }
  if (x>3){
  msg="I have heard of a place where humans do battle in a ring of jello."
  
  }
  if (x>4){
  msg="Things will indeed, calm up."
  }
  if (x>5){
  msg="Undomesticated equines could not remove me."
  }
  if (x>6){
  msg="My depth is immaterial to this conversation."
  }
  if (x>7){
  msg="To resist the influence of others, knowledge of one's self is most important."
  }
  if (x>8){
  msg="In my culture, I would be well in my rights to dismember you."
  }
  if (x>9){
  msg="Do not humans usually die when they are frozen?"
  }

  

  await lib.discord.channels['@0.2.0'].messages.create({
    channel_id: context.params.event.channel_id,
    content:msg,
  });
}

