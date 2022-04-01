// authenticates you with the API standard library
// type `await lib.` to display API autocomplete
const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});


// respond to messages containing cannibal flags
if (context.params.event.content.match(/cannibal|cannibbal|canibal| vore|dahmer|donner/i)) { 

  //message.add_reaction("👀");

  //let messageContent = context.params.event.content.match(/cannibal|cannibalism|hannibal/i);
  var countValue = new Number();
  countValue = 0;
  await lib.discord.channels['@0.2.0'].messages.create({
  channel_id: context.params.event.channel_id,
  content: `It has now been ${countValue} days since the last mention of cannibalism. The counter has been reset to zero.`,
  message_reference: {
   message_id: context.params.event.id
    }
  });
  
  }
  
  // respond to "hanny" with a random greeting
if (context.params.event.content.match(/hanny/i)) {
  //let messageContent = context.params.event.content.match(/hi|hey|hello|sup/i);

  min = 1;  
  max = 10;  
  
  x = Math.random() * (max - min + 1) + min ;
  
  msg = "👀 Hello."
  if (x<1.5){
    msg="H e l l o ,  W i l l ."
  }
  if (x<1.1){
    msg="👀👄👀"
  }
  if (x>5){
    msg= "You called?"
  }
  if (x>9) {
    msg="👁 👁"
  }

if (x>9.7) {
  msg="👁 👄 👁"
}
if (x>9.9){
  msg="👁 👄 👁"
}

  await lib.discord.channels['@0.2.0'].messages.create({
    channel_id: context.params.event.channel_id,
    content:msg,
    message_reference: {
      message_id: context.params.event.id
    }
  });
}


//emote react to variations of his name
if (context.params.event.content.match(/hannibal|hanibal|lector/i)) {
let result = await lib.discord.channels['@0.2.0'].messages.reactions.create({
  emoji: `👀`,
  message_id: `${context.params.event.id}`,
  channel_id: `${context.params.event.channel_id}`
});
return result;
}

if (context.params.event.content.match(/kill|murder|knife|redrum/i)) {
let result = await lib.discord.channels['@0.2.0'].messages.reactions.create({
  emoji: `🔪`,
  message_id: `${context.params.event.id}`,
  channel_id: `${context.params.event.channel_id}`
});
return result;
}

