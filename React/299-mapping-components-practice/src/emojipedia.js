const emojipedia = [
  { id: 1, emoji: "😀", name: "Grinning Face", meaning: "A broad smile, showing upper teeth. It’s often used to express general happiness and positivity." },
  { id: 2, emoji: "😁", name: "Beaming Face with Smiling Eyes", meaning: "Smiling with closed eyes and showing upper teeth. Expresses happiness or excitement." },
  { id: 3, emoji: "😂", name: "Face with Tears of Joy", meaning: "Often used to indicate something is so funny that it brings tears to your eyes." },
  { id: 4, emoji: "🤣", name: "Rolling on the Floor Laughing", meaning: "A more intense version of the face with tears of joy, indicating that something is hilariously funny." },
  { id: 5, emoji: "😃", name: "Grinning Face with Big Eyes", meaning: "A wide smile with open eyes. Represents happiness or enthusiasm." },
  { id: 6, emoji: "😄", name: "Grinning Face with Smiling Eyes", meaning: "A broad smile with eyes closed. Expresses joy and contentment." },
  { id: 7, emoji: "😅", name: "Grinning Face with Sweat", meaning: "A smile with sweat droplets. Often used to indicate relief or nervous laughter." },
  { id: 8, emoji: "😆", name: "Grinning Squinting Face", meaning: "A smile with squinted eyes. Represents hearty laughter or amusement." },
  { id: 9, emoji: "😇", name: "Smiling Face with Halo", meaning: "A smiling face with a halo. Often used to suggest innocence or angelic behavior." },
  { id: 10, emoji: "😈", name: "Smiling Face with Horns", meaning: "A mischievous grin with horns. Indicates devilish or playful behavior." },
  { id: 11, emoji: "👿", name: "Angry Face with Horns", meaning: "An angry face with horns. Expresses anger or frustration." },
  { id: 12, emoji: "😍", name: "Heart Eyes", meaning: "A face with hearts for eyes, representing love, adoration, or infatuation." },
  { id: 13, emoji: "😎", name: "Sunglasses Face", meaning: "A cool face with sunglasses. Indicates confidence or a relaxed attitude." },
  { id: 14, emoji: "😘", name: "Face Blowing a Kiss", meaning: "A face blowing a kiss, often used to express affection or love." },
  { id: 15, emoji: "😗", name: "Kissing Face", meaning: "A simple face with puckered lips, used to express a kiss or affection." },
  { id: 16, emoji: "😙", name: "Kissing Face with Smiling Eyes", meaning: "A face blowing a kiss with smiling eyes, indicating a warm and affectionate kiss." },
  { id: 17, emoji: "😚", name: "Kissing Face with Closed Eyes", meaning: "A kissing face with closed eyes, showing deep affection or intimacy." },
  { id: 18, emoji: "🙂", name: "Slightly Smiling Face", meaning: "A neutral smile, often used to convey contentment or politeness." },
  { id: 19, emoji: "🙃", name: "Upside-Down Face", meaning: "A face flipped upside down, often used to express silliness or sarcasm." },
  { id: 20, emoji: "😉", name: "Winking Face", meaning: "A face with a wink, used to suggest a joke or flirtation." },
  { id: 21, emoji: "😊", name: "Smiling Face with Smiling Eyes", meaning: "A smiling face with eyes closed. Indicates genuine happiness and positivity." },
  { id: 22, emoji: "😇", name: "Smiling Face with Halo", meaning: "A face with a halo, representing innocence or angelic behavior." },
  { id: 23, emoji: "🥰", name: "Smiling Face with Hearts", meaning: "A face surrounded by hearts, showing love, affection, or adoration." },
  { id: 24, emoji: "🤩", name: "Star-Struck", meaning: "A face with star eyes, expressing excitement or admiration." },
  { id: 25, emoji: "🤗", name: "Hugging Face", meaning: "A face with open arms, suggesting a hug or affection." },
  { id: 26, emoji: "🤔", name: "Thinking Face", meaning: "A face with a hand on the chin, used to indicate thinking or pondering." },
  { id: 27, emoji: "🤐", name: "Zipper-Mouth Face", meaning: "A face with a zipper mouth, representing silence or keeping a secret." },
  { id: 28, emoji: "🤨", name: "Face with Raised Eyebrow", meaning: "A face with a raised eyebrow, used to express skepticism or suspicion." },
  { id: 29, emoji: "😐", name: "Neutral Face", meaning: "A neutral expression with no emotion, indicating indifference or boredom." },
  { id: 30, emoji: "😑", name: "Expressionless Face", meaning: "A face with a flat expression, used to show disinterest or a lack of emotion." },
  { id: 31, emoji: "😶", name: "Face Without Mouth", meaning: "A face with no mouth, often indicating silence or lack of words." },
  { id: 32, emoji: "🙄", name: "Face with Rolling Eyes", meaning: "A face with eyes rolling, used to express annoyance or disbelief." },
  { id: 33, emoji: "😯", name: "Hushed Face", meaning: "A face with a hand covering the mouth, indicating surprise or secrecy." },
  { id: 34, emoji: "😲", name: "Astonished Face", meaning: "A face with wide eyes and raised eyebrows, showing shock or amazement." },
  { id: 35, emoji: "😳", name: "Flushed Face", meaning: "A blushing face, often used to express embarrassment or surprise." },
  { id: 36, emoji: "🥺", name: "Pleading Face", meaning: "A face with big, pleading eyes, used to show begging or desperation." },
  { id: 37, emoji: "😞", name: "Disappointed Face", meaning: "A face with a downturned mouth, expressing disappointment or sadness." },
  { id: 38, emoji: "😟", name: "Worried Face", meaning: "A face with furrowed brows and a frown, indicating worry or concern." },
  { id: 39, emoji: "😤", name: "Face with Steam from Nose", meaning: "A face with steam coming from the nose, used to express frustration or anger." },
  { id: 40, emoji: "😠", name: "Angry Face", meaning: "A red, frowning face with furrowed brows, showing anger or rage." },
  { id: 41, emoji: "😡", name: "Pouting Face", meaning: "A face with a frown and clenched teeth, expressing strong anger or frustration." },
  { id: 42, emoji: "🤬", name: "Face with Symbols on Mouth", meaning: "A face with symbols covering the mouth, indicating swearing or strong profanity." },
  { id: 43, emoji: "😈", name: "Smiling Face with Horns", meaning: "A mischievous face with horns, suggesting playful or devilish behavior." },
  { id: 44, emoji: "👿", name: "Angry Face with Horns", meaning: "A red, angry face with horns, showing intense anger or malice." },
  { id: 45, emoji: "💀", name: "Skull", meaning: "A human skull, often used to represent death or something scary." },
  { id: 46, emoji: "👻", name: "Ghost", meaning: "A cartoonish ghost, used to represent spookiness or Halloween." },
  { id: 47, emoji: "👽", name: "Alien", meaning: "A green, cartoonish alien face, used to represent extraterrestrial life or something unusual." },
  { id: 48, emoji: "👾", name: "Alien Monster", meaning: "A pixelated alien monster, often used to represent video games or sci-fi themes." },
  { id: 49, emoji: "🤖", name: "Robot Face", meaning: "A face with a robotic appearance, used to represent technology or robots." },
  { id: 50, emoji: "🎃", name: "Jack-O-Lantern", meaning: "A pumpkin with a face carved into it, used to represent Halloween." },
  { id: 51, emoji: "😺", name: "Grinning Cat Face", meaning: "A grinning cat face, expressing happiness or contentment from a cat's perspective." },
  { id: 52, emoji: "😸", name: "Grinning Cat Face with Smiling Eyes", meaning: "A cat with a wide smile and closed eyes, representing joy or satisfaction." },
  { id: 53, emoji: "😹", name: "Cat Face with Tears of Joy", meaning: "A cat face laughing with tears, used to express something very funny or amusing." },
  { id: 54, emoji: "😻", name: "Smiling Cat Face with Heart-Eyes", meaning: "A cat with heart-shaped eyes, showing love or adoration." },
  { id: 55, emoji: "😼", name: "Cat Face with Wry Smile", meaning: "A cat face with a sly smile, often used to indicate mischief or sarcasm." },
  { id: 56, emoji: "😽", name: "Kissing Cat Face", meaning: "A cat face blowing a kiss, used to express affection from a feline perspective." },
  { id: 57, emoji: "🙀", name: "Weary Cat Face", meaning: "A cat face looking stressed or anxious, indicating concern or discomfort." },
  { id: 58, emoji: "😿", name: "Crying Cat Face", meaning: "A cat face crying, used to show sadness or disappointment." },
  { id: 59, emoji: "😾", name: "Pouting Cat Face", meaning: "A cat face with a frown, expressing displeasure or frustration." },
  { id: 60, emoji: "🤡", name: "Clown Face", meaning: "A face with clown makeup, used to represent fun, silliness, or a circus theme." },
  { id: 61, emoji: "😶‍🌫️", name: "Face in Clouds", meaning: "A face obscured by clouds, often indicating confusion or being lost in thought." },
  { id: 62, emoji: "🤧", name: "Sneezing Face", meaning: "A face sneezing with a tissue, representing sickness or allergies." },
  { id: 63, emoji: "😇", name: "Angel Face", meaning: "A smiling face with a halo, indicating innocence or purity." },
  { id: 64, emoji: "🥳", name: "Partying Face", meaning: "A face wearing a party hat and blowing a party horn, used to celebrate or indicate a party." },
  { id: 65, emoji: "😎", name: "Cool Face", meaning: "A face with sunglasses, suggesting coolness, confidence, or relaxation." },
  { id: 66, emoji: "😫", name: "Tired Face", meaning: "A face showing exhaustion or frustration, with closed eyes and furrowed brows." },
  { id: 67, emoji: "😳", name: "Blushing Face", meaning: "A face blushing with wide eyes, used to express embarrassment or surprise." },
  { id: 68, emoji: "😶‍🌫️", name: "Foggy Face", meaning: "A face surrounded by fog, indicating confusion or feeling disoriented." },
  { id: 69, emoji: "🤠", name: "Cowboy Hat Face", meaning: "A face with a cowboy hat, often used to represent a country or adventurous theme." },
  { id: 70, emoji: "🤑", name: "Money-Mouth Face", meaning: "A face with money symbols for eyes and a dollar sign mouth, indicating greed or excitement about money." },
  { id: 71, emoji: "🤕", name: "Face with Head-Bandage", meaning: "A face with a head bandage, showing injury or a headache." },
  { id: 72, emoji: "🤒", name: "Face with Thermometer", meaning: "A face with a thermometer in its mouth, indicating illness or a fever." },
  { id: 73, emoji: "🤢", name: "Nauseated Face", meaning: "A face with a greenish color, showing nausea or sickness." },
  { id: 74, emoji: "🤮", name: "Face Vomiting", meaning: "A face vomiting, indicating extreme disgust or illness." },
  { id: 75, emoji: "🤧", name: "Sneezing Face", meaning: "A face sneezing, often used to express illness or allergies." },
  { id: 76, emoji: "😵", name: "Dizzy Face", meaning: "A face with swirling eyes, representing dizziness or confusion." },
  { id: 77, emoji: "😵‍💫", name: "Face with Spiral Eyes", meaning: "A face with spirals in its eyes, showing disorientation or bewilderment." },
  { id: 78, emoji: "🤯", name: "Exploding Head", meaning: "A face with an exploding head, used to show shock or mind-blowing realization." },
  { id: 79, emoji: "🥴", name: "Woozy Face", meaning: "A face with a dazed expression, indicating being out of it or tipsy." },
  { id: 80, emoji: "😴", name: "Sleeping Face", meaning: "A face with closed eyes and a zzz, showing sleepiness or boredom." },
  { id: 81, emoji: "🤤", name: "Drooling Face", meaning: "A face drooling, used to show hunger or desire for something." },
  { id: 82, emoji: "😪", name: "Sleepy Face", meaning: "A face with drooping eyes and a tired expression, indicating sleepiness or exhaustion." },
  { id: 83, emoji: "😫", name: "Tired Face", meaning: "A face showing fatigue or frustration, often with closed eyes and furrowed brows." },
  { id: 84, emoji: "😌", name: "Relieved Face", meaning: "A face with a calm expression and closed eyes, indicating relief or contentment." },
  { id: 85, emoji: "😔", name: "Pensive Face", meaning: "A face with a downturned mouth, expressing thoughtfulness or sadness." },
  { id: 86, emoji: "😕", name: "Confused Face", meaning: "A face with furrowed brows and a frown, showing confusion or uncertainty." },
  { id: 87, emoji: "😣", name: "Persevering Face", meaning: "A face with clenched teeth and furrowed brows, indicating stress or effort." },
  { id: 88, emoji: "😖", name: "Confounded Face", meaning: "A face showing extreme frustration or discomfort, often with tightly shut eyes." },
  { id: 89, emoji: "😩", name: "Weary Face", meaning: "A face showing exhaustion or frustration, often with downturned eyes and mouth." },
  { id: 90, emoji: "😧", name: "Anguished Face", meaning: "A face with wide eyes and furrowed brows, indicating anguish or distress." },
  { id: 91, emoji: "😨", name: "Fearful Face", meaning: "A face with wide eyes and a fearful expression, showing fear or anxiety." },
  { id: 92, emoji: "😰", name: "Anxious Face with Sweat", meaning: "A face with sweat drops and wide eyes, indicating anxiety or worry." },
  { id: 93, emoji: "😥", name: "Sad but Relieved Face", meaning: "A face with a frown and tears, showing sadness but also relief." },
  { id: 94, emoji: "😢", name: "Crying Face", meaning: "A face with tears, expressing sadness or grief." },
  { id: 95, emoji: "😭", name: "Loudly Crying Face", meaning: "A face with tears streaming down, showing intense grief or sadness." },
  { id: 96, emoji: "🥺", name: "Pleading Face", meaning: "A face with big, pleading eyes, indicating begging or desperation." },
  { id: 97, emoji: "😠", name: "Angry Face", meaning: "A face with a frown and furrowed brows, showing anger or irritation." },
  { id: 98, emoji: "😡", name: "Pouting Face", meaning: "A face with a frown and clenched teeth, expressing strong anger or frustration." },
  { id: 99, emoji: "🤬", name: "Face with Symbols on Mouth", meaning: "A face with symbols covering the mouth, indicating strong profanity or swearing." },
  { id: 100, emoji: "🤯", name: "Exploding Head", meaning: "A face with an exploding head, used to express shock or mind-blowing realization." }
]

export default emojipedia